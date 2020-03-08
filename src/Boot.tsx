import { MDXProvider } from '@mdx-js/react'
import React from 'react'

import { ThemeProvider } from './ThemeProvider'
import { MDXGlobalComponents, MDXLayoutComponents } from './components/mdx'

export const Boot: React.FunctionComponent<{ element: any }> = ({ element }) => {
  return (
    <ThemeProvider>
      <>
        <MDXProvider
          components={{
            ...MDXLayoutComponents,
            ...MDXGlobalComponents,
          }}
        >
          {element}
        </MDXProvider>
      </>
    </ThemeProvider>
  )
}
