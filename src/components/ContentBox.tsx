import React, { FunctionComponent } from 'react'
import { Box, BoxProps } from 'rebass'

export const ContentBox: FunctionComponent<BoxProps> = (props) => {
  return (
    <Box
      width={[1, 4 / 5, 3 / 4, 3 / 5]}
      mt={6}
      mb={2}
      as="section"
      {...props}
      sx={{
        whiteSpace: 'pre-line',
        ...props.sx,
      }}
    />
  )
}
