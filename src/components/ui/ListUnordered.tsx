import React from 'react'
import { Box, BoxProps } from 'rebass'

export const ListUnordered = (props: BoxProps) => {
  return <Box as="ul" pl={[5]} {...props} />
}
