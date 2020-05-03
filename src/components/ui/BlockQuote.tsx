import React from 'react'

import { Text } from 'rebass'

export const BlockQuote = props => {
  return (
    <Text
      variant="quote"
      as="blockquote"
      ml={['10%']}
      pl={['5%']}
      sx={{
        borderLeft: '2px solid transparent',
        borderLeftColor: 'gray.2',
        '> p': {
          lineHeight: 'quote',
        },
      }}
      {...props}
    />
  )
}
