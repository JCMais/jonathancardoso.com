import { Suspense, Fragment } from 'react'

export const MaybeSuspense = typeof document !== 'undefined' ? Suspense : Fragment
