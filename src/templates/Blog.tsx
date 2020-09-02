import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { PaginationAwarePageContext } from '@shared/types'

import { BlogQuery } from '@r/generated/graphql'

import { MainLayout } from '@r/layouts/MainLayout'
import { SEO } from '@r/components/SEO'
import { PostsTimeline } from '@r/components/PostTimeline'
import { ContentBox } from '@r/components/ContentBox'
import { MainContentWrapper } from '@r/components/MainContentWrapper'
import { Pagination } from '@r/components/Pagination'

import { ContentFlowSeparator } from '@r/components/ui/ContentFlowSeparator'
import { H1 } from '@r/components/ui/H1'

const Blog: React.FC<PageProps<BlogQuery, PaginationAwarePageContext>> = ({
  data: { allBlogPost },
  pageContext: { pagination },
}) => {
  return (
    <MainLayout>
      <SEO
        title="Blog"
        jsonLd={[
          {
            '@context': 'http://schema.org',
            '@type': 'Blog',
            about:
              'Personal thoughts about a variety of topics, but mostly software development related, including GraphQL, TypeScript, Node.js, and others.',
            author: {
              '@type': 'Person',
              '@id': 'jonathancardoso',
            },
          },
        ]}
      />
      <MainContentWrapper>
        <ContentBox>
          <H1>Blog</H1>
          <PostsTimeline posts={allBlogPost.edges} />
          <ContentFlowSeparator />
          <Pagination pagination={pagination} />
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery($pageEntries: [String!]!) {
    allBlogPost(
      filter: { id: { in: $pageEntries } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          title
          date
          banner {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          keywords
          slug
        }
      }
    }
  }
`
