import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { Box } from 'rebass'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const PageHeight = styled.div`
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.backgroundDarker};
`

// const PageContent = styled.main`
//   align-self: center;
// `

const PageContent = ({ children }) => (
  <Box py={4} p={5}>
    {children}
  </Box>
)

export const MainLayout: React.FunctionComponent = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MainLayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <PageHeight>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageContent>{children}</PageContent>
      <Footer />
    </PageHeight>
  )
}
