/* eslint-disable import/no-unresolved,import/extensions,no-console */

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'

// https://github.com/hagnerd/gatsby-starter-blog-mdx/blob/6d007b051d7f4646a7de7f09060a97b986b661b8/gatsby-browser.js#L1
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#optional-add-shell-prompt
import 'prismjs/plugins/command-line/prism-command-line.css'
import './assets/prismjs-theme.css'

import Backend from 'i18next-sync-fs-backend'
import { renderToString } from 'react-dom/server'
import { I18nextProvider, useSSR } from 'react-i18next'
import * as moment from 'moment'

import { i18n, i18nConfig } from './src/i18n'
import { Boot } from './src/Boot'
import { getLangKeyFromPath } from './src/utils'

// gatsby config is needed to grab locales info
import config from './gatsby-config'
import { convertLangKeyToISO } from './shared/utils'

const {
  siteMetadata: { locale },
} = config

// let initialI18nStore = {}
// let initialLanguage = null

// heavily inspired on:
//  https://github.com/onestopjs/gatsby-theme-localization/blob/54f98a960c2a7daae3dc262563f61cc32ae16230/gatsby-theme-localization/src/gatsby/ssr/feedTranslations.ts
export const replaceRenderer = ({
  bodyComponent,
  pathname,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // i18n handling
  const supportedLanguages = Object.keys(locale.supportedLanguages)
  const langFromPathname = getLangKeyFromPath(
    pathname,
    supportedLanguages,
    locale.defaultLangKey,
  )
  let initialI18nStore = {}
  let initialLanguage = null
  i18n.use(Backend).init({
    ...i18nConfig,
    debug: false,
    preload: supportedLanguages,
    lng: convertLangKeyToISO(langFromPathname),
    initImmediate: false,
    // We must include all namespaces here
    ns: ['common', 'footer', 'home', 'pages'],
    backend: {
      // path where resources get loaded from
      loadPath: './static/locales/{{lng}}/{{ns}}.json',
      // path to post missing resources
      addPath: './static/locales/{{lng}}/{{ns}}.missing.json',
    },
  })
  moment.locale(langFromPathname)

  i18n.languages.forEach((l) => {
    initialI18nStore = {
      ...initialI18nStore,
      [l]: i18n.services.resourceStore.data[l],
    }
  })
  initialLanguage = i18n.language

  setHeadComponents([
    <script
      key="jc-i18n-preload"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
            window.initialI18nStore = ${JSON.stringify(initialI18nStore)};
            window.initialLanguage = ${JSON.stringify(initialLanguage)};
        `,
      }}
    />,
  ])

  // scroll to hash on page load
  // proudly copied from:
  // https://github.com/gatsbyjs/gatsby/blob/fbf7abc68bfa/packages/gatsby-remark-autolink-headers/src/gatsby-ssr.js#L56
  const scrollToHashScript = `
  document.addEventListener("DOMContentLoaded", function(event) {
    var hash = window.decodeURI(location.hash.replace('#', ''))
    console.log('Hash is', hash)
    if (hash !== '') {
      var element = document.getElementById(hash)
      if (element) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var clientTop = document.documentElement.clientTop || document.body.clientTop || 0
        var offset = element.getBoundingClientRect().top + scrollTop - clientTop
        // Wait for the browser to finish rendering before scrolling.
        setTimeout((function() {
          window.scrollTo(0, offset)
        }), 0)
      }
    }
  })`

  setHeadComponents([
    <script
      key="jc-autoscroll-script"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: scrollToHashScript }}
    />,
  ])

  replaceBodyHTMLString(renderToString(bodyComponent))
}

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = Boot

// const InitSSR = ({ children }) => {
//   useSSR(initialI18nStore, initialLanguage)
//   // return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
//   return children
// }

// export const wrapPageElement = ({ props: _props, element }) => {
//   return <InitSSR>{element}</InitSSR>
// }
