/*
 * This file needs to be .jsx because the netlify-cms must consume it.
 */

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

export const ThemeProvider = props => (
  <StyledThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {props.children}
    </>
  </StyledThemeProvider>
)
