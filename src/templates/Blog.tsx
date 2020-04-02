import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'
import { H1 } from '../components/ui/H1'
import { H2 } from '../components/ui/H2'
import { H3 } from '../components/ui/H3'
import { H4 } from '../components/ui/H4'

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

const Blog = ({ data: { allBlogPost }, pageContext: { pagination, categories } }) => {
  const { t: _t, i18n: _i18n } = useTranslation('common')

  const { page, nextPagePath, previousPagePath } = pagination

  const posts = page.map(id => allBlogPost.edges.find(edge => edge.node.id === id))
  return (
    <MainLayout>
      <SEO title="Blog" />
      {/* <p>{t('test')}</p> */}
      <H1>Heading #1</H1>
      <H2>Heading #2</H2>
      <H3>Heading #3</H3>
      <H4>Heading #4</H4>
      <div>
        All categories on the blog: <Categories categories={categories} />
      </div>

      {posts.map(({ node: post }) => (
        <div key={post.id}>
          {post.banner && (
            <Img fluid={post.banner.childImageSharp.fluid} style={{ maxWidth: '100%' }} />
          )}

          <h2>
            <Link to={post.slug}>{post.title}</Link>
          </h2>

          <small>{post.date}</small>

          <p>{post.excerpt}</p>

          <Link to={post.slug}>Continue Reading</Link>
        </div>
      ))}

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
    </MainLayout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allBlogPost {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          title
          date(formatString: "MMMM DD, YYYY")
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
