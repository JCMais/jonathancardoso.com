/* eslint-disable import/no-unresolved,no-shadow,import/extensions */
/**
 * Implement Gatsby's Browser (Client Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import { GatsbyBrowser } from 'gatsby'

import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import moment from 'moment'

import { getLangKeyFromPath } from './shared/utils'
import { i18n, i18nConfig } from './src/i18n'

import { GatsbyPageComponent } from './src/GatsbyPageComponent'
import { GatsbyRootComponent } from './src/GatsbyRootComponent'

// initial language is set inside a script tag when the page is first loaded
//  code for that is on replaceRenderer inside the gatsby-ssr.ts file
declare global {
  interface Window {
    initialLanguage: string
  }
}

void i18n
  // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .init(
    {
      ...i18nConfig,
      lng: window.initialLanguage,
      ns: [],
      detection: {
        lookupFromPathIndex: 0,
        order: ['path'],
      },
    },
    () => {
      moment.locale(i18n.language)
    },
  )

// https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
export const wrapRootElement = GatsbyRootComponent
// @TODO we can avoid re-render of the reader if we move the layout code to this hook.
// https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
export const wrapPageElement = GatsbyPageComponent

// Based on Dan's blog, see:
//  https://github.com/gaearon/overreacted.io/blob/94bcb38c3c6a3a961f5eb2bc9d9cf4bf95dfb097/gatsby-browser.js#L6
// This will avoid the page to re-render when clicking on something
// @TODO Does not seems to be needed, here just for reference - Remove later
// export const replaceComponentRenderer: GatsbyBrowser['replaceComponentRenderer'] = ({
//   props,
// }) => {
//   // @ts-expect-error
//   // eslint-disable-next-line react/destructuring-assignment
//   return React.createElement(props.pageResources.component, {
//     ...props,

//     // Gatsby default is:
//     // key: this.props.path || this.props.pageResources.page.path,
//     // See https://github.com/gatsbyjs/gatsby/blob/561d33e2e491d3971cb2a404eec9705a5a493602/packages/gatsby/cache-dir/page-renderer.js#L19-L24
//     // But we're happy with letting React do its thing.
//   })
// }

/// ///////////////////////////////////
// Automatic Scroll to Hash Handling
// Proudly copied from:
// https://github.com/gatsbyjs/gatsby/blob/fbf7abc68bfa3ac7a70ff/packages/gatsby-remark-autolink-headers/src/gatsby-browser.js#L37
/// ///////////////////////////////////
const SCROLL_OFFSET_Y = 0
const getTargetOffset = (hash: string) => {
  const id = window.decodeURI(hash.replace('#', ''))
  if (id !== ``) {
    const element = document.getElementById(id)
    if (element) {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      const clientTop = document.documentElement.clientTop || document.body.clientTop || 0
      const computedStyles = window.getComputedStyle(element)
      const scrollMarginTop =
        computedStyles.getPropertyValue('scroll-margin-top') ||
        computedStyles.getPropertyValue('scroll-snap-margin-top') ||
        '0px'

      return (
        element.getBoundingClientRect().top +
        scrollTop -
        parseInt(scrollMarginTop, 10) -
        clientTop -
        SCROLL_OFFSET_Y
      )
    }
  }
  return null
}

// https://www.gatsbyjs.org/docs/browser-apis/#onInitialClientRender
export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = () => {
  requestAnimationFrame(() => {
    const offset = getTargetOffset(window.location.hash)
    if (offset !== null) {
      window.scrollTo(0, offset)
    }
  })
}

const blogRegExp = /^\/[a-z-]+\/blog\/([^/]*)\/$/

// https://www.gatsbyjs.org/docs/browser-apis/#shouldUpdateScroll
export const shouldUpdateScroll: GatsbyBrowser['shouldUpdateScroll'] = ({
  prevRouterProps,
  routerProps,
}) => {
  if (!prevRouterProps) {
    return [0, 0]
  }

  const { hash: nextHash, pathname: nextPathname } = routerProps.location
  const {
    location: { hash: prevHash, pathname: prevPathname },
  } = prevRouterProps

  const prevLang = getLangKeyFromPath(prevPathname)
  const nextLang = getLangKeyFromPath(nextPathname)

  // it's not a language change
  if (prevLang === nextLang) {
    // there was hash change
    if (prevHash !== nextHash) {
      const offset = getTargetOffset(nextHash)
      return offset ? [0, offset] : true
    }

    return true
  }

  const isPrevBlog = blogRegExp.test(prevPathname)
  const isNextBlog = blogRegExp.test(nextPathname)

  // language change on blog post
  if (isPrevBlog && isNextBlog) {
    // next url has hash, so scroll to it
    if (nextHash) {
      const offset = getTargetOffset(nextHash)
      return offset ? [0, offset] : true
    }

    return false
  }

  return false
}

// https://www.gatsbyjs.org/docs/browser-apis/#onClientEntry
// based on comment https://github.com/angeloocana/gatsby-plugin-i18n/issues/92#issuecomment-580912666
// @TODO Check if this is the best way to do that from a SEO pov
export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  // const languages = Object.keys(locale.supportedLanguages)
  // const urlStartsWithLangKey = languages.some((langKey) =>
  //   window.location.pathname.startsWith(`/${langKey}`),
  // )
  // if (!urlStartsWithLangKey) {
  //   let foundLanguages: string[] = []
  //   if (typeof navigator !== 'undefined') {
  //     if (navigator.languages && navigator.languages.length) {
  //       for (const langKey of navigator.languages) {
  //         foundLanguages = [...foundLanguages, langKey]
  //       }
  //     }
  //     if (navigator.language) {
  //       foundLanguages = [...foundLanguages, navigator.language]
  //     }
  //   }
  //   let langKey = locale.defaultLangKey
  //   for (const langKeyUser of foundLanguages) {
  //     const langKeyUserLowerCase = langKeyUser.toLowerCase()
  //     if (languages.includes(langKeyUserLowerCase)) {
  //       langKey = langKeyUserLowerCase
  //       break
  //     }
  //   }
  //   window.location.pathname = `/${langKey}${window.location.pathname}`
  // }
}
