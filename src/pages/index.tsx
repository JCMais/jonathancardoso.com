import React from 'react'
import { Link, graphql } from 'gatsby'
import { Box, Text } from 'rebass'

import { MainLayout } from '../layouts/MainLayout'
import { LogoImage } from '../components/LogoImage'
import { SEO } from '../components/SEO'

// const NAVIGATION = [
//   { to: '/', label: 'Home' },
//   { to: '/blog', label: 'Blog' },
// ]

const IndexPage = ({ data }) => {
  const { allMdx } = data
  const { edges: posts } = allMdx

  return (
    <MainLayout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Link style={{}} to={'/about'}>
          <Text color="black" mb={2} fontFamily="sans" fontSize={2}>
            About
          </Text>
        </Link>
        <LogoImage />
      </div>
      {posts
        .filter(
          post =>
            post.node.frontmatter.title.length > 0 &&
            post.node.parent.sourceInstanceName === 'blog',
        )
        .map(({ node: post }) => {
          return (
            <Box mt={5} mb={3} key={post.id}>
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to={post.fields.slug}
              >
                <Text as="h3" color="black" mb={2} fontFamily="sans">
                  {post.frontmatter.title}
                </Text>
                <Text color="gray.1" fontSize={2}>
                  {post.frontmatter.date}
                </Text>
                <Text color="gray.2">
                  <i>{post.frontmatter.description}</i>
                </Text>
              </Link>
            </Box>
          )
        })}
    </MainLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            date(formatString: "MMMM DD, YYYY")
            rawDate: date(formatString: "X")
          }
          fields {
            slug
          }
          parent {
            ... on File {
              id
              sourceInstanceName
            }
          }
        }
      }
    }
  }
`
