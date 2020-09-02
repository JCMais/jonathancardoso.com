import React from 'react'

import { Text, TextProps } from 'rebass'

export const Paragraph = (props: TextProps) => {
  return <Text variant="body" as="p" {...props} />
}
