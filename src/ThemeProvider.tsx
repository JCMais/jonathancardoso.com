// @ts-ignore
import React from 'react'
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

export const ThemeProvider = ({ children }) => (
  <ThemeProviderWrapper theme={theme}>
    <>
      <Global
        styles={css`
          ${normalize};
        `}
      />
      {children}
    </>
  </ThemeProviderWrapper>
)
