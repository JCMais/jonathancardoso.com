import React from 'react'
import { Box, BoxProps } from 'rebass'

export const ListOrdered = (props: BoxProps) => {
  return <Box as="ol" pl={[5]} {...props} />
}
