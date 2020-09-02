/* eslint-disable import/no-unresolved,import/extensions,no-console */

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'
import Backend from 'i18next-sync-fs-backend'
import { renderToString } from 'react-dom/server'
import moment from 'moment'
import { GatsbySSR, ReplaceRendererArgs } from 'gatsby'

import { locale } from '@shared/config'
import { convertLangKeyToISO, getLangKeyFromPath } from '@shared/utils'

import { i18n, i18nConfig } from './src/i18n'
import { GatsbyRootComponent } from './src/GatsbyRootComponent'

export const wrapRootElement = GatsbyRootComponent

// heavily inspired on:
//  https://github.com/onestopjs/gatsby-theme-localization/blob/54f98a960c2a7daae3dc262563f61cc32ae16230/gatsby-theme-localization/src/gatsby/ssr/feedTranslations.ts
type GatsbyReplaceRendererArgsFixed = {
  bodyComponent: React.ReactHTMLElement<HTMLBodyElement>
  pathname: string
} & ReplaceRendererArgs

export const replaceRenderer: GatsbySSR['replaceRenderer'] = async ({
  bodyComponent,
  pathname,
  setHeadComponents,
  replaceBodyHTMLString,
}: GatsbyReplaceRendererArgsFixed) => {
  // i18n handling
  const supportedLanguages = Object.keys(locale.supportedLanguages)
  const langFromPathname = getLangKeyFromPath(
    pathname,
    supportedLanguages,
    locale.defaultLangKey,
  )
  let initialI18nStore = {}
  let initialLanguage = null
  void i18n.use(Backend).init({
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
