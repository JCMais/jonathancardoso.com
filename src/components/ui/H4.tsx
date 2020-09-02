import React from 'react'
import { HeadingProps } from 'rebass'

import { Heading } from './Heading'

export const H4: React.FC<HeadingProps> = ({ sx, ...props }) => (
  // @ts-expect-error Type A is not assingable to type B
  <Heading
    as="h4"
    variant="subHeading"
    {...props}
    sx={{
      fontSize: 26,
      ...sx,
    }}
  />
)
