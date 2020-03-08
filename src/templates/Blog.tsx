import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'

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

const Blog = ({ data: { allMdx }, pageContext: { pagination, categories } }) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const posts = page.map(id => allMdx.edges.find(edge => edge.node.id === id))

  return (
    <MainLayout>
      <SEO title="Blog" />
      <div>
        All categories on the blog: <Categories categories={categories} />
      </div>

      {posts.map(({ node: post }) => (
        <div key={post.id}>
          {post.fields.banner && <Img sizes={post.fields.banner.childImageSharp.sizes} />}

          <h2>
            <Link to={post.fields.slug}>{post.fields.title}</Link>
          </h2>

          <small>{post.fields.date}</small>

          <p>{post.excerpt}</p>

          <Link to={post.fields.slug}>Continue Reading</Link>
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
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            keywords
            slug
          }
        }
      }
    }
  }
`
