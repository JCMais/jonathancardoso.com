import React from 'react'
import { Flex, FlexProps } from 'rebass'

export const MainContentWrapper: React.FC<FlexProps> = ({ children }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      {children}
    </Flex>
  )
}
