/**
 * Implement Gatsby's Browser (Client Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// https://github.com/hagnerd/gatsby-starter-blog-mdx/blob/6d007b051d7f4646a7de7f09060a97b986b661b8/gatsby-browser.js#L1
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#optional-add-shell-prompt
import 'prismjs/plugins/command-line/prism-command-line.css'
import './assets/prismjs-theme.css'

import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// import i18n (needs to be bundled ;))
// it will be converted to js file, so we can ignore this warning
// eslint-disable-next-line import/no-unresolved,import/extensions
import { i18n, i18nConfig } from './src/i18n'

// eslint-disable-next-line import/no-unresolved,import/extensions
import { Boot } from './src/Boot'

i18n
  // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .init({
    ...i18nConfig,

    detection: {
      lookupFromPathIndex: 0,
      order: ['path'],
    },
  })

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = Boot
