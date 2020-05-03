import * as React from 'react'
import { Flex, FlexProps } from 'rebass'

export const MainContentWrapper: React.FunctionComponent<FlexProps> = ({ children }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      {children}
    </Flex>
  )
}
