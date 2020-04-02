import React from 'react'

import { Heading } from './Heading'

export const H4 = props => (
  <Heading
    as="h4"
    variant="subHeading"
    sx={{
      fontSize: 4,
    }}
    {...props}
  />
)
