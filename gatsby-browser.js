/**
 * Implement Gatsby's Browser (Client Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
// https://github.com/hagnerd/gatsby-starter-blog-mdx/blob/6d007b051d7f4646a7de7f09060a97b986b661b8/gatsby-browser.js#L1
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#optional-add-shell-prompt
import 'prismjs/plugins/command-line/prism-command-line.css'
import './assets/prismjs-theme.css'

// import i18n (needs to be bundled ;))
// it will be converted to js file, so we can ignore this warning
// eslint-disable-next-line import/no-unresolved,import/extensions
import './src/i18n'

// eslint-disable-next-line import/no-unresolved,import/extensions
import { Boot } from './src/Boot'

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = Boot
