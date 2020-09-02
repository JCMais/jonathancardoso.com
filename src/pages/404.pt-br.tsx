import React from 'react'

import { MainLayout } from '@r/layouts/MainLayout'
import { ContentBox } from '@r/components/ContentBox'
import { MainContentWrapper } from '@r/components/MainContentWrapper'

import { SEO } from '@r/components/SEO'
import { H1 } from '@r/components/ui/H1'
import { Paragraph } from '@r/components/ui/Paragraph'

const NotFoundPage = () => {
  return (
    <MainLayout>
      <SEO title="404: Página Não Encontrada" />
      <MainContentWrapper>
        <ContentBox>
          <H1>404</H1>
          <Paragraph>
            Oops, você chegou em uma página que não existe... que triste.
          </Paragraph>
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default NotFoundPage
