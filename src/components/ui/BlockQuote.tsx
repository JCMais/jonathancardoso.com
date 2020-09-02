import React from 'react'

import { Text, TextProps } from 'rebass'

export const BlockQuote = (props: TextProps) => {
  return (
    <Text
      variant="quote"
      as="blockquote"
      ml={['1%']}
      pl={['3%']}
      sx={{
        borderLeft: '3px solid transparent',
        borderLeftColor: 'gray.2',
        '> p': {
          lineHeight: 'quote',
        },
      }}
      {...props}
    />
  )
}
