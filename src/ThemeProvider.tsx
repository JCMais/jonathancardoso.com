// @ts-ignore
import React, { useEffect } from 'react'
// import {
//   ThemeProvider as ThemeProviderWrapper,
//   createGlobalStyle,
// } from 'styled-components'
import { css, Global } from '@emotion/core'
import { ThemeProvider as ThemeProviderWrapper } from 'emotion-theming'
import { normalize } from 'styled-normalize'

import { theme } from './theme'

// export const GlobalStyle = createGlobalStyle`
//   ${normalize};
//   /* Does not work with gatsby-image idk why */
//   /* * { position: relative; } */
// `

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
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
          // @ts-ignore
          styles={css`
            ${normalize};

            :root {
              --scrollbar-width: 0px;
            }

            body {
              font-family: ${theme.fonts.body};
              font-size: ${theme.fontSizes[3]}px;
              font-weight: ${theme.fontWeights.body};
            }

            .gatsby-resp-image-wrapper {
              border: 1px solid hsl(0, 0%, 65%);
            }

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
            .gatsby-highlight::after {
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
            }

            /* inline code block */
            :not(pre) > code[class*='language-'] {
              border-radius: 0;
              padding: 0.2em 0.3em;
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
              background-color: #140085;
              color: white;
              z-index: 0;
            }

            /* Line Highlight */
            .gatsby-highlight-code-line {
              background-color: rgba(104, 104, 104, 0.65);
              display: inline-block;
              margin-right: -1em;
              margin-left: -1em;
              padding-right: 1em;
              padding-left: 0.8em;
              border-left: 0.2em solid #e5e5e5;
            }
          `}
        />
        {children}
      </>
    </ThemeProviderWrapper>
  )
}
