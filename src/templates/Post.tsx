import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Box, Flex, Text } from 'rebass'
import Space from '@rebass/space'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { H1 } from '../components/ui/H1'
import FeatherIcon from '../components/icon/FeatherIcons'
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

// @TODO Page Content Wrapper - Duplicated
const Wrapper = ({ children }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      {children}
    </Flex>
  )
}

const ContentBox = props => {
  return (
    <Box
      width={[1, 3 / 4, 2 / 4]}
      mt={props.isFirst ? 0 : 6}
      mb={2}
      as="section"
      {...props}
    />
  )
}

const PostMetadata = props => {
  return <Flex color="gray.0" alignItems="center" mr={[5]} {...props} />
}

const PostMetadataText = props => {
  return <Text variant="body" fontSize={[2]} ml={[1]} fontWeight="bold" {...props} />
}

export default function Post({ data: { blogPost }, pageContext: { next, prev } }) {
  return (
    <MainLayout>
      <SEO
        title={blogPost.title}
        description={blogPost.description}
        keywords={blogPost.keywords}
      />
      <Wrapper>
        <ContentBox as="article">
          <H1>{blogPost.title}</H1>
          {/* Article Info */}
          <Flex>
            {/* 55565B */}
            <PostMetadata aria-label="article published at">
              <FeatherIcon.Calendar width="icon.smaller" height="icon.smaller" />
              <PostMetadataText as="time" dateTime={blogPost.dateISOString}>
                {blogPost.date}
              </PostMetadataText>
            </PostMetadata>
            <PostMetadata aria-label="article tags">
              <FeatherIcon.Tag width="icon.smaller" height="icon.smaller" />
              <PostMetadataText>
                <Space mr={[1]}>
                  {blogPost.tags.map(tag => (
                    <Link key={tag} to={`/blog/tags/${tag}`} lng>
                      {tag}
                    </Link>
                  ))}
                </Space>
              </PostMetadataText>
            </PostMetadata>
            <PostMetadata aria-label="article category">
              <FeatherIcon.Folder width="icon.smaller" height="icon.smaller" />
              <PostMetadataText>
                <Link to={`/blog/categories/${blogPost.categorySlug}`} lng>
                  {blogPost.category}
                </Link>
              </PostMetadataText>
            </PostMetadata>
          </Flex>

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
        </ContentBox>
      </Wrapper>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query($id: String!, $langKeySlug: String!) {
    blogPost(id: { eq: $id }) {
      title
      date(formatString: "MMMM DD, YYYY", locale: $langKeySlug)
      dateISOString: date
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
