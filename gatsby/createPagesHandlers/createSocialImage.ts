import fs from 'fs'
import path from 'path'
import assert from 'assert'
import tls from 'tls'

import mkdirp from 'mkdirp'
import { Curl, CurlFeature, curly } from 'node-libcurl'

import { trim } from '@shared/utils'

import { BlogPost } from '../generated/graphql'

// idea taken from this PR: https://github.com/JasonEtco/jasonet.co/pull/45/files
const pathToCardPreviewTemplate = path.join(
  __dirname,
  '..',
  '..',
  'static',
  'card-preview.html',
)
const styleRegExp = /(?:<style>)(?<styles>[\s\S]*)(?:<\/style>)/g

const tlsCertificatesFilePath = path.join(__dirname, '..', '..', 'debug', 'cert.pem')
if (!fs.existsSync(tlsCertificatesFilePath)) {
  mkdirp.sync(path.dirname(tlsCertificatesFilePath))

  const tlsData = tls.rootCertificates.join('\n')
  fs.writeFileSync(tlsCertificatesFilePath, tlsData)
}

let html = ''
let css = ''

type Post = Pick<
  BlogPost,
  'slug' | 'date' | 'excerpt' | 'description' | 'title' | 'hasNonDefaultSocialImageUrl'
>

const getCardPreviewTemplate = (post: Post) => {
  if (!html || !css) {
    const cardPreviewContent = fs.readFileSync(pathToCardPreviewTemplate, 'utf8')
    const styles = styleRegExp.exec(cardPreviewContent)
    assert(styles, 'Invalid format for the card-preview.html file')
    const stylesWithoutTag = styles.groups?.styles
    assert(stylesWithoutTag, 'Invalid format for the card-preview.html file')

    html = cardPreviewContent.replace(styles[0], '')
    css = stylesWithoutTag
  }

  const titleSize =
    post.title.length >= 60 ? '35px' : post.title.length >= 50 ? '40px' : '50px'

  return {
    css: css.replace('font-size: 50px;', `font-size: ${titleSize};`),
    html: html
      .replace('::title::', post.title)
      .replace('::excerpt::', post.description || post.excerpt)
      .replace('::date::', post.date),
  }
}

const createCard = async (post: Post) => {
  const { HTML_CSS_TO_IMG_API_ID, HTML_CSS_TO_IMG_API_KEY } = process.env

  const template = getCardPreviewTemplate(post)

  assert(
    HTML_CSS_TO_IMG_API_ID && HTML_CSS_TO_IMG_API_KEY,
    'Missing HTML_CSS_TO_IMG_API_ID/HTML_CSS_TO_IMG_API_KEY environment variables for hcti.io',
  )

  if (
    post.slug !==
    '/en/blog/using-circleci-workflows-replicate-docker-hub-automated-builds/'
  ) {
    return
  }

  const result = await curly.post('https://hcti.io/v1/image', {
    caInfo: tlsCertificatesFilePath,
    httpPost: [
      {
        name: 'css',
        contents: template.css,
      },
      {
        name: 'html',
        contents: template.html,
      },
    ],
    username: HTML_CSS_TO_IMG_API_ID,
    password: HTML_CSS_TO_IMG_API_KEY,
  })

  if (!(result.statusCode >= 200 && result.statusCode <= 200)) {
    console.error(
      `hcti.io api failed with status code: ${result.statusCode}`,
      result.data,
    )
  }
  return JSON.parse(result.data).url
}

export const createImageIfNeeded = async (post: Post) => {
  const slug = trim(post.slug, '/').split('/').pop()

  const pathToFile = path.join(
    __dirname,
    '..',
    '..',
    'static',
    'og-images',
    'blog',
    `${slug}.png`,
  )
  if (post.hasNonDefaultSocialImageUrl || fs.existsSync(pathToFile)) return

  mkdirp.sync(path.dirname(pathToFile))

  const url = await createCard(post)

  if (!url) return

  return new Promise((resolve, reject) => {
    const curl = new Curl()
    curl.setOpt('URL', url)
    curl.setOpt('CAINFO', tlsCertificatesFilePath)

    curl.enable(CurlFeature.Raw)

    curl.on('end', (_statusCode, data) => {
      fs.writeFileSync(pathToFile, data)
      curl.close()

      resolve()
    })
    curl.on('error', (error) => {
      console.error('Error while requesting preview image', { error })
      curl.close()

      reject(error)
    })

    curl.perform()
  })
}
