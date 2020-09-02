import React from 'react'
import { PageProps, graphql } from 'gatsby'

import { useTranslation } from 'react-i18next'

import { PaginationAwarePageContext } from '@shared/types'

import { CategoryQuery } from '@r/generated/graphql'

import { MainLayout } from '@r/layouts/MainLayout'

import { MainContentWrapper } from '@r/components/MainContentWrapper'
import { ContentBox } from '@r/components/ContentBox'
import { PostsTimeline } from '@r/components/PostsTimeline'
import { Pagination } from '@r/components/Pagination'

import { SEO } from '@r/components/SEO'
import { Link } from '@r/components/ui/Link'
import { H1 } from '@r/components/ui/H1'

interface CategoryInfo {
  category: string
  categorySlug: string
}

type CategoryPageContext = {
  activeCategory: CategoryInfo
} & PaginationAwarePageContext

// TODO: Pagination here - Missing
const Category: React.FC<PageProps<CategoryQuery, CategoryPageContext>> = ({
  pageContext,
  data,
}) => {
  const { activeCategory, pagination } = pageContext
  const { t } = useTranslation('pages')

  const posts = data.allBlogPost.edges

  return (
    <MainLayout>
      <SEO title={t('Category', { category: activeCategory.category })} />
      <MainContentWrapper>
        <ContentBox>
          <H1>{activeCategory.category}</H1>
          <Link to="/blog/categories" lng>
            {t('See all categories')}
          </Link>

          <PostsTimeline posts={posts} />
          <Pagination pagination={pagination} />
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryQuery($langKey: LangKey!, $pageEntries: [String!]!) {
    allBlogPost(
      filter: { langKey: { eq: $langKey }, id: { in: $pageEntries } }
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
