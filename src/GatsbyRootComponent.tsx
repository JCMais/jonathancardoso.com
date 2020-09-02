import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { WrapRootElementBrowserArgs } from 'gatsby'

import { ThemeProvider } from './ThemeProvider'
import { MDXGlobalComponents, MDXLayoutComponents } from './components/mdx'
import { MaybeSuspense } from './components/MaybeSuspense'

type GatsbyRootComponentProps = WrapRootElementBrowserArgs

export const GatsbyRootComponent = ({ element }: GatsbyRootComponentProps) => {
  return (
    <ThemeProvider>
      <MDXProvider
        components={{
          ...MDXLayoutComponents,
          ...MDXGlobalComponents,
        }}
      >
        <MaybeSuspense fallback="Loading...">{element}</MaybeSuspense>
      </MDXProvider>
    </ThemeProvider>
  )
}
