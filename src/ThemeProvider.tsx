// https://github.com/hagnerd/gatsby-starter-blog-mdx/blob/6d007b051d7f4646a7de7f09060a97b986b661b8/gatsby-browser.js#L1
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#optional-add-shell-prompt
import 'prismjs/plugins/command-line/prism-command-line.css'
// fonts
import 'typeface-fira-code'
import 'typeface-karma'
import 'typeface-lato'
import 'typeface-quicksand'

import '../assets/prismjs-theme-light.css'

import React, { useEffect } from 'react'
import { css, Global } from '@emotion/core'
import { ThemeProvider as ThemeProviderWrapper } from 'emotion-theming'

import { normalize } from './normalize'
import { theme } from './theme'

export const ThemeProvider: React.FC = ({ children }) => {
  useEffect(() => {
    // We are using this to measure the width of the scrollbar
    // The resulting width is then stored in a CSS variable

    // Add temporary box to wrapper
    const scrollbox = document.createElement('div')

    // Make box scrollable
    scrollbox.style.overflow = 'scroll'

    // Append box to document
    document.body.appendChild(scrollbox)

    // Measure inner width of box
    const scrollBarWidth = scrollbox.offsetWidth - scrollbox.clientWidth

    // Remove box
    document.body.removeChild(scrollbox)
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`)
    document.body.classList.add('scrollbar-var-ready')
  })

  return (
    <ThemeProviderWrapper theme={theme}>
      <>
        <Global
          // Some global styles - Easier to do them this way.
          // @ts-ignore
          styles={css`
            ${normalize};

            :root {
              --scrollbar-width: 0px;
            }

            body {
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              font-family: ${theme.fonts.body};
              font-size: ${theme.fontSizes[3]}px;
              font-weight: ${theme.fontWeights.body};
            }

            ::-moz-selection {
              /* TODO: Add to theme */
              background: #7eb8ff;
            }
            ::selection {
              /* TODO: Add to theme */
              background: #7eb8ff;
            }

            /*
            .gatsby-resp-image-wrapper {
              border: 1px solid hsl(0, 0%, 65%);
            }
            .gatsby-resp-image-image {
              object-fit: cover;
              object-position: center;
            }
            */

            /**
           * Prism Syntax Highlight with Gatsby
           * Style Changes
           */
            .gatsby-highlight {
              font-family: ${theme.fonts.monospace};
              position: relative;
              font-size: ${theme.fontSizes[3]}px;
            }

            .gatsby-highlight pre[class*='language-'],
            .gatsby-highlight code[class*='language-'] {
              border-radius: 0;
            }

            /* Language icon on the top right corner of the codeblock */
            /* .gatsby-highlight::after {
              position: absolute;
              top: 0;
              right: 0;
              padding: 4px;
              font-size: 0.8em;
              font-weight: bold;
              user-select: none;
            }
            .gatsby-highlight[data-language='typescript']::after,
            .gatsby-highlight[data-language='tsx']::after {
              content: 'TS';
              color: white;
              background: #0074c1;
            }
            .gatsby-highlight[data-language='javascript']::after,
            .gatsby-highlight[data-language='js']::after {
              content: 'JS';
              color: #323330;
              background: #f0db4f;
            } */

            pre[class*='language-'] {
              box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
            }

            /* inline code block */
            :not(pre) > code[class*='language-'] {
              border-radius: 0;
              padding: 0em 0.1em;
              font-size: 0.9em;
              box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            }

            .gatsby-highlight pre[class*='language-'].line-numbers {
              padding-left: 3.3em;
            }
            /* Fix line height for the line numbers */
            .gatsby-highlight pre[class*='language-'].line-numbers .line-numbers-rows {
              padding-bottom: 1em;
              padding-left: 1em;
              padding-top: 1em;
            }

            /* Codeblock title */
            .gatsby-code-title {
              margin-bottom: -0.6rem;
              padding: 0.5em 1em;
              font-family: ${theme.fonts.monospace};
              /* TODO: add to theme */
              background-color: #004e85;
              font-size: 0.8em;
              color: white;
              z-index: 0;
            }

            /* Line Highlight */
            .gatsby-highlight-code-line {
              display: inline-block;
              margin-right: -1em;
              margin-left: -1em;
              padding-right: 1em;
              padding-left: 0.8em;
              border-left: 0.2em solid #4b8be2;
              background-color: rgba(216, 208, 154, 0.25);
              /*dark*/
              /*border-left: 0.2em solid #e5e5e5;*/
              /*background-color: rgba(104, 104, 104, 0.65);*/
            }
          `}
        />
        {children}
      </>
    </ThemeProviderWrapper>
  )
}
