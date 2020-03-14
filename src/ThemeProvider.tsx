import React from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components'
import styledNormalize from 'styled-normalize'

import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize};
`

export const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </StyledThemeProvider>
)
