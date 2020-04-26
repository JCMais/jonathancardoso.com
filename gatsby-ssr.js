/* eslint-disable import/no-unresolved,import/extensions,no-console */

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
// https://github.com/hagnerd/gatsby-starter-blog-mdx/blob/6d007b051d7f4646a7de7f09060a97b986b661b8/gatsby-browser.js#L1
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#optional-add-shell-prompt
import 'prismjs/plugins/command-line/prism-command-line.css'
import './assets/prismjs-theme.css'

import Backend from 'i18next-sync-fs-backend'
import { renderToString } from 'react-dom/server'
import * as moment from 'moment'

import { i18n, i18nConfig } from './src/i18n'
import { Boot } from './src/Boot'
import { getLangKeyFromPath } from './src/utils'

// gatsby config is needed to grab locales info
import config from './gatsby-config'

const {
  siteMetadata: { locale },
} = config

// heavily inspired on:
//  https://github.com/onestopjs/gatsby-theme-localization/blob/54f98a960c2a7daae3dc262563f61cc32ae16230/gatsby-theme-localization/src/gatsby/ssr/feedTranslations.ts
export const replaceRenderer = ({ bodyComponent, pathname, replaceBodyHTMLString }) => {
  const langFromPathname = getLangKeyFromPath(
    pathname,
    Object.keys(locale.supportedLanguages),
    locale.defaultLangKey,
  )
  console.info(`Rendering page ${pathname} - Lang: ${langFromPathname}`)
  i18n.use(Backend).init({
    ...i18nConfig,
    debug: false,
    lng: langFromPathname,
    initImmediate: false,
    backend: {
      // path where resources get loaded from
      loadPath: './static/locales/{{lng}}/{{ns}}.json',
      // path to post missing resources
      addPath: './static/locales/{{lng}}/{{ns}}.missing.json',
    },
  })
  moment.locale(langFromPathname)

  replaceBodyHTMLString(renderToString(bodyComponent))
}

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = Boot
