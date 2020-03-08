import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const PageContent = styled.div`
  align-self: center;
`

const PageHeight = styled.div`
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
`

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
      <PageContent>
        <main>{children}</main>
      </PageContent>
      <Footer />
    </PageHeight>
  )
}
