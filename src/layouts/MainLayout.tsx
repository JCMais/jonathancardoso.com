import React from 'react'
import { Box, Flex } from 'rebass'

import { styled } from '@r/styled'

import { Header } from '@r/components/Header'
import { Footer } from '@r/components/Footer'

const PageHeight = styled(Flex)`
  /* flex: 1; */
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundDarker};
`

const PageContent: React.FC = ({ children }) => (
  <Box py={[3, 4]} p={[4, 5]} flex={1}>
    {children}
  </Box>
)

type MainLayoutProps = {
  headerTitleComponent?: React.ElementType
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  headerTitleComponent,
  ...props
}) => {
  return (
    <PageHeight {...props}>
      <Header headerTitleComponent={headerTitleComponent} />
      <PageContent>{children}</PageContent>
      <Footer />
    </PageHeight>
  )
}
