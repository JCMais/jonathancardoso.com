import React from 'react'
import { HeadingProps } from 'rebass'

import { Heading } from './Heading'

export const H2: React.FC<HeadingProps> = (props) => (
  // @ts-expect-error Type A is not assingable to type B
  <Heading as="h2" variant="heading" {...props} />
)
