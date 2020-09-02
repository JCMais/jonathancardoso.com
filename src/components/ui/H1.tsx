import React from 'react'
import { HeadingProps } from 'rebass'

import { Heading } from './Heading'

export const H1: React.FC<HeadingProps> = (props) => (
  // @ts-expect-error Type A is not assingable to type B
  <Heading as="h1" variant="heading" {...props} />
)
