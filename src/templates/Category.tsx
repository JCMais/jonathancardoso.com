import React from 'react'
import { PageProps, graphql } from 'gatsby'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'
import { MainContentWrapper } from 'components/MainContentWrapper'
import { ContentBox } from 'components/ContentBox'
import { H1 } from 'components/ui/H1'
import { PostsTimeline } from 'components/PostTimeline'
import { useTranslation } from 'react-i18next'

interface CategoryInfo {
  category: string
  categorySlug: string
}

const Category: React.FunctionComponent<PageProps<
  {},
  {
    activeCategory: CategoryInfo
  }
>> = ({ pageContext, data }) => {
  const { activeCategory } = pageContext
  const { t } = useTranslation('pages')

  const posts = data.allBlogPost.edges
  return (
    <MainLayout>
      <SEO title={t('Category', { category: activeCategory.category })} />
      <MainContentWrapper>
        <ContentBox>
          <H1>{activeCategory.category}</H1>

          <PostsTimeline posts={posts} />

          <Link to="/blog/categories" lng>
            {t('See all categories')}
          </Link>
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryQuery($langKey: LangKey!, $page: [String!]!) {
    allBlogPost(
      filter: { langKey: { eq: $langKey }, id: { in: $page } }
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
