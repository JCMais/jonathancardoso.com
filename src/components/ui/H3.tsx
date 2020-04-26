import React from 'react'

import { Heading } from './Heading'

export const H3 = props => (
  <Heading
    as="h3"
    variant="subHeading"
    sx={{
      fontSize: 4,
    }}
    {...props}
  />
)
