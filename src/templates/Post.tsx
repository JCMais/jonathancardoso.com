import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Box, Flex, FlexProps, Text, TextProps } from 'rebass'
import Space from '@rebass/space'
import { useTranslation } from 'react-i18next'

import { convertLangKeyFromGraphQLEnum, getLanguageName, getSiteUrl } from '@shared/utils'

import { PostQuery, MdxBlogPost } from '@r/generated/graphql'

import { SEO } from '@r/components/SEO'
import { ContentBox } from '@r/components/ContentBox'
import { MainContentWrapper } from '@r/components/MainContentWrapper'

import { DevToIcon } from '@r/components/icon/DevToIcon'
import { FeatherIcons } from '@r/components/icon/FeatherIcons'

import { H1 } from '@r/components/ui/H1'
import { Link } from '@r/components/ui/Link'
import { ContentFlowSeparator } from '@r/components/ui/ContentFlowSeparator'

import { MainLayout } from '@r/layouts/MainLayout'

import { PostNewsletterForm } from './Post/PostNewsletterForm'
import { PostBannerImageWrapper } from './Post/PostBannerImageWrapper'
import { PostMetadataText } from './Post/PostMetadataText'
import { PostInfoWrapper } from './Post/PostInfoWrapper'
import { locale } from '@shared/config'

const DiscussionText = (props: TextProps) => {
  return <Text variant="postBody" fontSize={[2]} ml={[2]} {...props} />
}

const PostMetadata = (props: FlexProps) => {
  return <Flex color="gray.0" alignItems="center" mr={['0px', 5]} my={[1]} {...props} />
}

type PostPageContext = {
  prev?: MdxBlogPost
  next?: MdxBlogPost
}

type PostProps = PageProps<PostQuery, PostPageContext>

export default function Post({ data, pageContext: { next, prev } }: PostProps) {
  const { t, i18n } = useTranslation()

  const { blogPost, postInOtherLanguages } = data

  // never really going to happen
  if (!blogPost) {
    return null
  }

  let linkLanguages = [
    {
      rel: 'alternate',
      href: getSiteUrl(`/${locale.defaultLangKey}/blog`),
      hreflang: 'x-default',
    },
  ]

  for (const { node } of postInOtherLanguages.edges) {
    linkLanguages = [
      ...linkLanguages,
      {
        rel: 'alternate',
        hreflang: convertLangKeyFromGraphQLEnum(node.langKey),
        href: getSiteUrl(node.slug),
      },
    ]
  }

  const BannerWrapper =
    blogPost.bannerStyle === 'FULL_WIDTH' ? PostBannerImageWrapper : Box

  return (
    <MainLayout>
      <SEO
        title={blogPost.title}
        description={blogPost.description || blogPost.excerpt}
        keywords={blogPost.keywords}
        link={linkLanguages}
        canonical={blogPost.externalLinks?.canonical ?? ''}
        ogType="article"
        ogImage={blogPost.socialImageUrl}
        twitterCard="summary_large_image"
        jsonLd={[
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            headline: blogPost.title,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            image: blogPost.banner?.childImageSharp?.fluid?.src,
            url: getSiteUrl(blogPost.slug),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                blogPost.externalLinks?.canonical || getSiteUrl(`/${i18n.language}/blog`),
            },
            datePublished: blogPost.dateISOString,
            dateModified: blogPost.dateModifiedISOString,
            description: blogPost.excerpt,
            inLanguage: convertLangKeyFromGraphQLEnum(blogPost.langKey),
            author: {
              '@type': 'Person',
              '@id': 'jonathancardoso',
            },
            // TODO: Add publisher to external blog posts?
            publisher: blogPost.publisher
              ? {
                  '@type': 'Organization',
                  '@id': blogPost.publisher.id,
                  name: blogPost.publisher.name,
                  url: blogPost.publisher.url,
                }
              : {
                  '@type': 'Person',
                  '@id': 'jonathancardoso',
                },
          },
        ]}
      />
      <MainContentWrapper>
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
                    <Link key={tag} to={`/blog/tags/${tag}/`} lng>
                      {tag}
                    </Link>
                  ))}
                </Space>
              </PostMetadataText>
            </PostMetadata>
            <PostMetadata aria-label="article category">
              <FeatherIcons.Folder width="icon.smaller" height="icon.smaller" />
              <PostMetadataText>
                <Link to={`/blog/categories/${blogPost.categorySlug}/`} lng>
                  {blogPost.category}
                </Link>
              </PostMetadataText>
            </PostMetadata>
          </Flex>
          {!!blogPost.banner?.childImageSharp?.fluid && (
            <BannerWrapper>
              {/* @ts-expect-error This is complaining about the base64 prop, not under our control */}
              <Img fluid={blogPost.banner.childImageSharp.fluid} />
            </BannerWrapper>
          )}
          {!!postInOtherLanguages?.edges.length && (
            <PostInfoWrapper>
              Translations available for:{' '}
              {postInOtherLanguages.edges.map(({ node }) => (
                <Link key={node.id} to={node.slug} px={[1]}>
                  {getLanguageName(convertLangKeyFromGraphQLEnum(node.langKey))}
                </Link>
              ))}
            </PostInfoWrapper>
          )}
          {!!blogPost.externalLinks?.canonical && (
            <PostInfoWrapper>
              This post is originally available at:{' '}
              <Link to={blogPost.externalLinks.canonical}>
                {blogPost.externalLinks.canonical}
              </Link>
            </PostInfoWrapper>
          )}
          <MDXRenderer>{blogPost.body}</MDXRenderer>
          <Flex justifyContent="space-evenly" flexWrap="wrap" mt={[-5]} mb={[5]}>
            <Text fontSize={[8]}>…</Text>
          </Flex>
          <PostNewsletterForm />
          <ContentFlowSeparator />
          <Flex justifyContent="space-evenly" flexWrap="wrap">
            <Space mx={[2, 3]} my={[3, 2]}>
              {!!blogPost?.externalLinks?.devto && (
                <Flex alignItems="center">
                  <DevToIcon width="icon.normal" height="icon.normal" />
                  <DiscussionText>
                    <Link to={blogPost.externalLinks.devto}>
                      {t('Discuss on Dev.to')}
                    </Link>
                  </DiscussionText>
                </Flex>
              )}
              <Flex alignItems="center">
                <FeatherIcons.Twitter
                  width="icon.normal"
                  height="icon.normal"
                  color="#1DA1F2"
                />
                <DiscussionText>
                  <Link
                    to={`https://mobile.twitter.com/search?q=${getSiteUrl(
                      blogPost.slug,
                    )}`}
                    target="_blank"
                  >
                    {t('Discuss on Twitter')}
                  </Link>
                </DiscussionText>
              </Flex>
              <Flex alignItems="center">
                <FeatherIcons.GitHub width="icon.normal" height="icon.normal" />
                <DiscussionText>
                  <Link to={blogPost.externalLinks.github} target="_blank">
                    {t('Edit on GitHub')}
                  </Link>
                </DiscussionText>
              </Flex>
            </Space>
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
      </MainContentWrapper>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: String!, $globalBlogPostId: ID!, $langKeySlug: String!) {
    postInOtherLanguages: allBlogPost(
      filter: { id: { ne: $id }, globalBlogPostId: { eq: $globalBlogPostId } }
    ) {
      languages: group(field: langKey) {
        fieldValue
      }
      edges {
        node {
          id
          title
          slug
          langKey
        }
      }
    }
    blogPost(id: { eq: $id }) {
      title
      date(formatString: "MMMM DD, YYYY", locale: $langKeySlug)
      dateISOString: date
      dateModifiedISOString: dateModified
      banner {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      publisher {
        id
        name
        url
      }
      langKey
      bannerStyle
      socialImageUrl
      keywords
      description
      excerpt(pruneLength: 100)
      slug
      category
      categorySlug
      globalBlogPostId
      tags
      body
      externalLinks {
        devto
        github
        canonical
      }
    }
  }
`
