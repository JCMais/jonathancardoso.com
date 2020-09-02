import path from 'path'
import crypto from 'crypto'

import slugify from '@sindresorhus/slugify'
import { GatsbyNode } from 'gatsby'
import { FileSystemNode } from 'gatsby-source-filesystem'

import { githubRepoUrl } from '@shared/config'

import { convertLangKeyToGraphQLEnum, getLangKeyFromFilePath, trim } from './utils'

interface MdxNode extends FileSystemNode {
  fileAbsolutePath: string
  frontmatter: Record<string, any>
}

const convertToPosixPath = (nonPosixPath: string) => nonPosixPath.replace(/\\/g, '/')

// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
  createContentDigest,
  createNodeId,
  node,
  getNode,
  actions,
}) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { createNode, createParentChildLink } = actions

  // We only care for Mdx nodes here.
  if (node.internal.type !== `Mdx`) {
    return
  }

  const mdxNode = (node as unknown) as MdxNode

  const fileNode = getNode(mdxNode.parent) as FileSystemNode
  const { fileAbsolutePath } = mdxNode
  const { sourceInstanceName } = fileNode

  // ***************************
  // * AUTOMATIC SLUG HANDLING
  // ***************************
  // We can specify on the file directly if we want to, otherwise one is going to be generated
  //  based on the relative path of the file.
  const relativePath = convertToPosixPath(
    path.relative(
      path.resolve(__dirname, '..', 'content'),
      path.dirname(fileAbsolutePath),
    ),
  )
  const fileRelativePath = convertToPosixPath(
    path.relative(path.resolve(__dirname, '..', 'content'), fileAbsolutePath),
  )

  // Using the source instance name (we have multiple filesystem sources)
  const pageLocation = sourceInstanceName === 'pages' ? '/' : `/${sourceInstanceName}/`

  // remove date from path
  const filePathWithoutDate = relativePath.replace(/[0-9]{4}-[0-9]{2}-[0-9]{2}_/, '')

  let slug = mdxNode.frontmatter.slug
    ? `${pageLocation}${trim(mdxNode.frontmatter.slug, '/')}`
    : filePathWithoutDate
        .split('/')
        .map((p) => slugify(p))
        .join('/')

  // ***************************
  // * i18n handling
  // ***************************
  // This is heavily inspired on the https://github.com/angeloocana/gatsby-plugin-i18n plugin
  const langKey = getLangKeyFromFilePath(fileAbsolutePath)
  slug = `/${langKey}/${trim(slug, '/')}/`

  const globalBlogPostId = crypto.createHash('sha1').update(relativePath).digest('base64')

  // ***************************
  // End of special handling
  // ***************************

  const date = mdxNode.frontmatter.date

  if (!date) {
    throw new Error('All mdx content must have a date field on the frontmatter')
  }

  const blogFields = {
    title: mdxNode.frontmatter.title,
    description: mdxNode.frontmatter.description || '',
    slug,
    langKey: convertLangKeyToGraphQLEnum(langKey),
    globalBlogPostId,
    externalLinks: {
      github: `${trim(githubRepoUrl, '/')}/blob/master/content/${fileRelativePath.replace(
        /\\/g,
        '/',
      )}`,
      ...(mdxNode.frontmatter.externalLinks || {}),
    },
    date,
    dateModified: mdxNode.frontmatter.dateModified || fileNode.modifiedTime || date,
    banner: mdxNode.frontmatter.banner,
    bannerStyle:
      mdxNode.frontmatter.banner && (mdxNode.frontmatter.bannerStyle || 'FULL_WIDTH'),
    // If we wanted to have a separated class for categories
    //  Same could be done for tags
    // category: {
    //   name: node.frontmatter.category,
    //   slug: slugify(node.frontmatter.category),
    // },
    category: mdxNode.frontmatter.category,
    categorySlug: slugify(mdxNode.frontmatter.category),
    tags: mdxNode.frontmatter.tags ?? mdxNode.frontmatter.keywords ?? [],
    keywords: mdxNode.frontmatter.keywords ?? mdxNode.frontmatter.tags ?? [],
  }

  // https://www.gatsbyjs.org/docs/actions/#createNode
  const mdxBlogPostId = createNodeId(`MdxBlogPost:${mdxNode.id}`)
  // eslint-disable-next-line @typescript-eslint/await-thenable
  await createNode({
    ...blogFields,
    // Required fields.
    id: mdxBlogPostId,
    parent: mdxNode.id,
    children: [],
    internal: {
      type: `MdxBlogPost`,
      contentDigest: createContentDigest(blogFields),
      description: 'Mdx implementation of the BlogPost interface',
    },
  })
  createParentChildLink({ parent: mdxNode, child: getNode(mdxBlogPostId) })
}
