import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { useTranslation } from 'react-i18next'

import { TagQuery } from '@r/generated/graphql'

import { MainLayout } from '@r/layouts/MainLayout'

import { SEO } from '@r/components/SEO'
import { MainContentWrapper } from '@r/components/MainContentWrapper'
import { ContentBox } from '@r/components/ContentBox'
import { PostsTimeline } from '@r/components/PostsTimeline'

import { Link } from '@r/components/ui/Link'
import { H1 } from '@r/components/ui/H1'

const Tag: React.FC<PageProps<
  TagQuery,
  {
    tag: String
  }
>> = ({ pageContext: { tag }, data }) => {
  const { t } = useTranslation('pages')

  const title = t('Tag', { tag })
  return (
    <MainLayout>
      <SEO title={title} />
      <MainContentWrapper>
        <ContentBox>
          <H1>{title}</H1>
          <PostsTimeline posts={data.allBlogPost.edges} />
          <Link to="/blog/tags/" lng>
            Back to list of Tags
          </Link>
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Tag

export const pageQuery = graphql`
  query TagQuery($langKey: LangKey!, $tag: String!) {
    allBlogPost(
      filter: { langKey: { eq: $langKey }, tags: { in: [$tag] } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          title
          description
          excerpt(pruneLength: 300)
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
