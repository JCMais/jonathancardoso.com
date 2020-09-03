import React from 'react'

import { Text, TextProps } from 'rebass'

export const PostInfoWrapper = (props: TextProps) => {
  return (
    <Text
      mt={[4]}
      p={[3]}
      sx={{
        backgroundColor: 'highlight',
        textAlign: 'center',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
      }}
      {...props}
    />
  )
}
