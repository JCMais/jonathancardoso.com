import React, { Suspense, Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'

import { MomentLanguageSwitcher } from './MomentLanguageSwitcher'
import { ThemeProvider } from './ThemeProvider'
import { MDXGlobalComponents, MDXLayoutComponents } from './components/mdx'

const MaybeSuspense = typeof document !== 'undefined' ? Suspense : Fragment

export const Boot: React.FunctionComponent<{ element: any }> = ({ element }) => (
  <MomentLanguageSwitcher>
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
  </MomentLanguageSwitcher>
)
