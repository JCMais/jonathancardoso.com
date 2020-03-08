import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'

const TagList = ({ list = [] }) => (
  <Fragment>
    Tags:
    <ul>
      {list.map(tag => (
        <li key={tag}>
          <Link to={`/blog/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </Fragment>
)

export default function Post({ data: { site, mdx }, pageContext: { next, prev } }) {
  return (
    <MainLayout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        keywords={mdx.frontmatter.keywords}
      />
      <h1>{mdx.frontmatter.title}</h1>
      <h2>{mdx.frontmatter.date}</h2>

      {mdx.frontmatter.banner && (
        <Img sizes={mdx.frontmatter.banner.childImageSharp.sizes} />
      )}

      <MDXRenderer>{mdx.body}</MDXRenderer>

      <div>
        <p>
          Category:{' '}
          <Link to={`/blog/categories/${mdx.fields.categorySlug}`}>
            {mdx.fields.category}
          </Link>
        </p>
        <TagList list={mdx.frontmatter.tags} />

        <hr />

        {prev && (
          <span>
            Previous <Link to={prev.fields.slug}>{prev.fields.title}</Link>
          </span>
        )}
        {next && (
          <span>
            Next <Link to={next.fields.slug}>{next.fields.title}</Link>
          </span>
        )}
      </div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
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
      }
      fields {
        slug
        category
        categorySlug
        tags
      }
      body
    }
  }
`
