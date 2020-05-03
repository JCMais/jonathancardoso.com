import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Box, Flex, Text } from 'rebass'
import Space from '@rebass/space'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { H1 } from '../components/ui/H1'
import FeatherIcons from '../components/icon/FeatherIcons'
import { SEO } from '../components/SEO'
import styled from '@emotion/styled'
import { DevToIcon } from '../components/icon/DevToIcon'

const TagList = ({ list = [] }) => (
  <>
    Tags:
    <ul>
      {list.map((tag) => (
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

const ContentBox = (props) => {
  return (
    <Box
      width={[1, 4 / 5, 3 / 4, 3 / 5]}
      mt={props.isFirst ? 0 : 6}
      mb={2}
      as="section"
      {...props}
    />
  )
}

const DiscussionText = (props) => {
  return <Text variant="postBody" fontSize={[2]} ml={[2]} {...props} />
}

const ContentFlowSeparator = styled.hr`
  /* could have been this way: */
  /* background-image: linear-gradient(to right,#B5B5B5 50%,rgba(255,255,255,0) 0%);
  background-position: bottom;
  background-size: 26px 4px;
  background-repeat: repeat-x; */
  /* but we are using svg: */
  background-image: url('data:image/svg+xml;utf-8, <svg width="13" height="4" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="13" height="4" rx="2" fill="%23B5B5B5"/></svg>');
  background-size: 26px 4px;
  background-repeat: repeat-x;
  border-style: none;
  height: 4px;
  margin: ${(p) => p.theme.space[6]}px 0;
`

const PostMetadata = (props) => {
  return <Flex color="gray.0" alignItems="center" mr={['0px', 5]} my={[1]} {...props} />
}

const PostBannerImageWrapper = (props) => {
  return (
    <Box
      sx={{
        width: 'calc(100vw)',
        margin: [
          '0 0 0 calc(-16px)',
          //  - (100vw - 100%) is needed to remove the scrollbar width
          '0 0 0 calc((100vw - 48px) * -0.2 / 2 - 24px - var(--scrollbar-width))',
          '0 0 0 calc((100vw - 48px) * -0.25 / 2 - 24px - var(--scrollbar-width))',
          '0 0 0 calc((100vw - 48px) * -0.4 / 2 - 24px - var(--scrollbar-width))',
        ],
      }}
      {...props}
    />
  )
}

const PostMetadataText = (props) => {
  return (
    <Text
      variant="body"
      fontSize={[1, 2]}
      ml={[1]}
      fontWeight="bold"
      sx={{
        overflowWrap: ['break-word', 'normal'],
      }}
      {...props}
    />
  )
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
          <Flex mb={[5]} flexDirection={['column', 'row']}>
            {/* 55565B */}
            <PostMetadata aria-label="article published at">
              <FeatherIcons.Calendar width="icon.smaller" height="icon.smaller" />
              <PostMetadataText as="time" dateTime={blogPost.dateISOString}>
                {blogPost.date}
              </PostMetadataText>
            </PostMetadata>
            <PostMetadata aria-label="article tags">
              <FeatherIcons.Tag width="icon.smaller" height="icon.smaller" />
              <PostMetadataText>
                <Space mr={[1]}>
                  {blogPost.tags.map((tag) => (
                    <Link key={tag} to={`/blog/tags/${tag}`} lng>
                      {tag}
                    </Link>
                  ))}
                </Space>
              </PostMetadataText>
            </PostMetadata>
            <PostMetadata aria-label="article category">
              <FeatherIcons.Folder width="icon.smaller" height="icon.smaller" />
              <PostMetadataText>
                <Link to={`/blog/categories/${blogPost.categorySlug}`} lng>
                  {blogPost.category}
                </Link>
              </PostMetadataText>
            </PostMetadata>
          </Flex>

          {blogPost.banner && (
            <PostBannerImageWrapper>
              <Img sizes={blogPost.banner.childImageSharp.sizes} />
            </PostBannerImageWrapper>
          )}

          <MDXRenderer>{blogPost.body}</MDXRenderer>
          <ContentFlowSeparator />
          <Flex justifyContent="space-evenly" flexWrap="wrap">
            <Flex alignItems="center">
              <DevToIcon width="icon.normal" height="icon.normal" />
              <DiscussionText>Discuss on Dev.to</DiscussionText>
            </Flex>
            <Flex alignItems="center">
              <FeatherIcons.Twitter
                width="icon.normal"
                height="icon.normal"
                color="#1DA1F2"
              />
              <DiscussionText>Discuss on Twitter</DiscussionText>
            </Flex>
            <Flex alignItems="center">
              <FeatherIcons.GitHub width="icon.normal" height="icon.normal" />
              <DiscussionText>Edit on GitHub</DiscussionText>
            </Flex>
          </Flex>
          <ContentFlowSeparator />
          <Flex justifyContent="space-evenly" flexWrap="wrap">
            <Space py={1}>
              {prev && (
                <Text variant="postBody">
                  <Link to={prev.slug}>
                    <Flex flexDirection="row" alignItems="center">
                      <Space px={2}>
                        <Box>{'<<'}</Box>
                        <Box>{prev.title}</Box>
                      </Space>
                    </Flex>
                  </Link>
                </Text>
              )}
              {next && (
                <Text variant="postBody">
                  <Link to={next.slug}>
                    <Flex flexDirection="row" alignItems="center">
                      <Space px={2}>
                        <Box>{next.title}</Box>
                        <Box>{'>>'}</Box>
                      </Space>
                    </Flex>
                  </Link>
                </Text>
              )}
            </Space>
          </Flex>
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
          sizes(maxWidth: 2000) {
            ...GatsbyImageSharpSizes
          }
        }
      }
      tableOfContents(maxDepth: 2)
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
