import React from 'react'

import { Heading } from './Heading'

export const H3 = ({ sx, ...props }) => (
  <Heading
    as="h3"
    variant="subHeading"
    {...props}
    sx={{
      fontSize: 28,
      ...sx,
    }}
  />
)
