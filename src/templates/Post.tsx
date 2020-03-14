import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'

const TagList = ({ list = [] }) => (
  <>
    Tags:
    <ul>
      {list.map(tag => (
        <li key={tag}>
          <Link to={`/blog/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </>
)

export default function Post({ data: { blogPost }, pageContext: { next, prev } }) {
  return (
    <MainLayout>
      <SEO
        title={blogPost.title}
        description={blogPost.description}
        keywords={blogPost.keywords}
      />
      <h1>{blogPost.title}</h1>
      <h2>{blogPost.date}</h2>

      {blogPost.banner && <Img sizes={blogPost.banner.childImageSharp.sizes} />}

      <MDXRenderer>{blogPost.body}</MDXRenderer>

      <div>
        <p>
          Category:{' '}
          <Link to={`/blog/categories/${blogPost.categorySlug}`}>
            {blogPost.category}
          </Link>
        </p>
        <TagList list={blogPost.tags} />

        <hr />

        {prev && (
          <span>
            Previous <Link to={prev.slug}>{prev.title}</Link>
          </span>
        )}
        {next && (
          <span>
            Next <Link to={next.slug}>{next.title}</Link>
          </span>
        )}
      </div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    blogPost(id: { eq: $id }) {
      title
      date(formatString: "MMMM DD, YYYY")
      banner {
        childImageSharp {
          sizes(maxWidth: 900) {
            ...GatsbyImageSharpSizes
          }
        }
      }
      keywords
      description
      slug
      category
      categorySlug
      tags
      body
    }
  }
`
