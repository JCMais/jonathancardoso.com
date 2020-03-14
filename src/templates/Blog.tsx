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

const Blog = ({ data: { allBlogPost }, pageContext: { pagination, categories } }) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const posts = page.map(id => allBlogPost.edges.find(edge => edge.node.id === id))

  return (
    <MainLayout>
      <SEO title="Blog" />
      <div>
        All categories on the blog: <Categories categories={categories} />
      </div>

      {posts.map(({ node: post }) => (
        <div key={post.id}>
          {post.banner && <Img sizes={post.banner.childImageSharp.sizes} />}

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
`
