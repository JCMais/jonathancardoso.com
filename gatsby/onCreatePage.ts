/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable no-console,no-continue */
import { GatsbyNode, Page as GatsbyPage } from 'gatsby'

import { siteMetadata } from '../gatsby-config'

import { getLangKeyFromFilePath, trim, convertLangKeyToGraphQLEnum } from './utils'

const { locale } = siteMetadata

const supportedLanguagesKey = Object.keys(locale.supportedLanguages)

const pagesByPathCache = new Map()

type PageContext = Record<string, any>
interface Page<Context> extends GatsbyPage<Context> {
  componentPath: string
}

const regExp404 = /^\/[a-z]{2}(-[a-z]{2})?\/404\/$/

/**
 * https://www.gatsbyjs.org/docs/node-apis/#onCreatePage
 * Adds langKey to pages that do not have one - This is called for pages inside /src/pages/
 */
export const onCreatePage: GatsbyNode['onCreatePage'] = async ({
  page: _page,
  actions,
}) => {
  const page = _page as Page<PageContext>
  if (page.context.langKey) {
    console.log('Skipping page since it already has the langKey context prop')
  }

  const { createPage, deletePage } = actions

  // @TODO Should we ignore /dev-404-page/ | ComponentDev404Page

  // based on https://www.gatsbyjs.org/docs/creating-prefixed-404-pages-for-different-languages/

  // special case for the root index file, which is where we are going to redirect to languages
  // Or we dont need it? See last link below.
  // see:
  //  https://github.com/angeloocana/gatsby-plugin-i18n/issues/72
  //  https://github.com/angeloocana/gatsby-plugin-i18n/issues/66
  //  https://github.com/angeloocana/gatsby-plugin-i18n/issues/92#issuecomment-580912666
  if (page.path === '/root/' || page.path === '/dev-404-page/') {
    return
  }

  // first verify if the page has lang key extension
  //  if this is the case, we should only add the langKey and fix the page
  //  and not create any other page.
  // If the page is already on the cache, the one with .lang-key suffix should take precedence

  const hasLangKeySuffixOnComponentPath = /\.[a-z]{2}(-[a-z]{2})?\.tsx$/.test(
    page.componentPath,
  )
  const pathWithoutLangKey = page.path.replace(/\.[a-z]{2}(-[a-z]{2})?\/$/, '/')

  if (hasLangKeySuffixOnComponentPath) {
    // page has override for given lang key
    const langKeyFromComponentPath = getLangKeyFromFilePath(page.componentPath, null)
    const langKeyEnum = convertLangKeyToGraphQLEnum(langKeyFromComponentPath)
    const pathWithLangKey = `/${langKeyFromComponentPath}${pathWithoutLangKey}`

    const cacheKey = pathWithLangKey
    const pageOnCache = pagesByPathCache.get(cacheKey)
    const isPathOnCache = !!pageOnCache

    let newPage = {
      ...page,
      path: pathWithLangKey,
      context: {
        ...page.context,
        langKey: langKeyEnum,
        langKeySlug: langKeyFromComponentPath,
      },
    }
    deletePage(page)

    if (isPathOnCache) {
      console.log(
        `Deleting previously created page ${pageOnCache.path} (${pageOnCache.componentPath}), a page override for it was found`,
      )
      deletePage(pageOnCache)
      pagesByPathCache.delete(cacheKey)
    }

    if (regExp404.test(newPage.path)) {
      // The page is a localized 404
      // Recreate the modified page
      newPage = {
        ...newPage,
        matchPath: `/${langKeyFromComponentPath}/*`,
      }
    }

    createPage(newPage)
    pagesByPathCache.set(cacheKey, newPage)
  } else {
    // this is a page without the lang key suffix, create new pages for each supported language
    deletePage(page)

    for (const langKey of supportedLanguagesKey) {
      const langKeyEnum = convertLangKeyToGraphQLEnum(langKey)

      const pathWithLangKey = `/${trim(
        `/${langKey}/${trim(pathWithoutLangKey, '/')}/`,
        '/',
      )}/`

      const cacheKey = pathWithLangKey
      const pageOnCache = pagesByPathCache.get(cacheKey)
      const isPathOnCache = !!pageOnCache

      let newPage = {
        ...page,
        path: pathWithLangKey,
        context: {
          ...page.context,
          langKey: langKeyEnum,
          langKeySlug: langKey,
        },
      }

      if (isPathOnCache && page.path !== '/404/') {
        // Do not recreate the page, another page for this component already exists and should take precende
        console.log(
          `Not recreating page ${page.path} (${page.componentPath}) for lang ${langKey} | Page override for given lang key already exists`,
        )
        continue
      } else {
        // @TODO Should we ignore /dev-404-page/ | ComponentDev404Page
        if (page.path === '/404.html' || page.path === '/404/') {
          // The page is the default 404 page - Only create it for the default language
          if (langKey !== locale.defaultLangKey) {
            console.log('Skipping creation of root 404 page for non default language')
            continue
          }
          newPage = {
            ...newPage,
            path: page.path,
          }
        } else if (regExp404.test(newPage.path)) {
          // The page is a localized 404
          // Recreate the modified page
          newPage = {
            ...newPage,
            matchPath: `/${langKey}/*`,
          }
        }

        createPage(newPage)
        pagesByPathCache.set(cacheKey, newPage)
      }
    }
  }
}
