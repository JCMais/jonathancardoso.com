import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'
import { H1 } from '../components/ui/H1'
import { H2 } from '../components/ui/H2'
import { H3 } from '../components/ui/H3'
import { H4 } from '../components/ui/H4'
import { BlogQuery } from 'types/graphql'
import { PostsTimeline } from 'components/PostTimeline'
import { ContentBox } from 'components/ContentBox'
import { MainContentWrapper } from 'components/MainContentWrapper'

const Categories = ({ categories }) => (
  <>
    <ul>
      {categories.map(({ category, categorySlug }) => (
        <li key={categorySlug}>
          <Link to={`/blog/categories/${categorySlug}`}>{category}</Link>
        </li>
      ))}
    </ul>
  </>
)

const Blog: React.FC<PageProps<BlogQuery, Record<string, any>>> = ({
  data: { allBlogPost },
  pageContext: { pagination, categories },
}) => {
  const { t: _t, i18n: _i18n } = useTranslation('common')

  const { page, nextPagePath, previousPagePath } = pagination

  console.log(page)

  return (
    <MainLayout>
      <SEO title="Blog" />
      <MainContentWrapper>
        <ContentBox>
          <PostsTimeline posts={allBlogPost.edges} />
          <hr />

          <div>
            Pagination:
            <ul>
              {nextPagePath && (
                <li>
                  <Link to={nextPagePath}>Next Page</Link>
                </li>
              )}

              {previousPagePath && (
                <li>
                  <Link to={previousPagePath}>Previous Page</Link>
                </li>
              )}
            </ul>
          </div>
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery($page: [String!]!) {
    allBlogPost(filter: { id: { in: $page } }, sort: { fields: date, order: DESC }) {
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
