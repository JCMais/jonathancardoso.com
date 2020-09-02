import React from 'react'

import { Text, TextProps } from 'rebass'

export const PostMetadataText = (props: TextProps) => {
  return (
    <Text
      variant="body"
      fontSize={[1, 2]}
      ml={[1]}
      fontWeight="bold"
      sx={{
        overflowWrap: ['break-word', 'normal'],
      }}
      {...props}
    />
  )
}
