import React from 'react'

import { Text, TextProps } from 'rebass'

export const ListItem = (props: TextProps) => {
  return <Text variant="body" as="li" {...props} />
}
