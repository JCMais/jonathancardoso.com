import React from 'react'

import { Heading } from './Heading'

export const H4 = ({ sx, ...props }) => (
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
