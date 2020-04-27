import React from 'react'
import { graphql } from 'gatsby'
import { Box, Text, Flex } from 'rebass'
import moment from 'moment'
import { GitHub, Linkedin, Twitter, Instagram } from 'react-feather'
import styled from '@emotion/styled'
import { space } from 'styled-system'
import Space from '@rebass/space'
import { useTranslation, Trans } from 'react-i18next'

import { MainLayout } from '../layouts/MainLayout'
import { LogoImage } from '../components/LogoImage'
import { SEO } from '../components/SEO'
import { H1 } from '../components/ui/H1'
import { H2 } from '../components/ui/H2'
import { H3 } from '../components/ui/H3'
import { H4 } from '../components/ui/H4'
import { Paragraph } from '../components/ui/Paragraph'
import { Link } from '../components/ui/Link'
import { convertLangKeyToGraphQLEnum, getLangKeyFromPath } from '../utils'

// const NAVIGATION = [
//   { to: '/', label: 'Home' },
//   { to: '/blog', label: 'Blog' },
// ]

const PostsTimeline = styled(Box)`
  position: relative;
  ::after {
    content: '';
    width: 6px;
    /* background-color: #fff; */
    /* background-color: #c4c4c4; */
    background: rgb(196, 196, 196);
    background: linear-gradient(
      180deg,
      #f5f5f5 0%,
      #c4c4c4 20%,
      #c4c4c4 80%,
      #f5f5f5 100%
    );
    /* border: 1px solid #c4c4c4; */
    left: 0;
    top: 0;
    height: 100%;
    position: absolute;
  }
  /* ::before {
    content: '';
    background-image: url('data:image/svg+xml; utf8, <svg width="8" height="32" viewBox="0 0 18 18" fill="%23C4C4C4" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" /></svg>');
    width: 8px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin-left: -16px;
  } */
`

const PostTimelineMonth = styled(Box)`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 16px;

  ::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 8px;
    background-color: #c4c4c4;
    height: 2px;
    width: 100%;
    z-index: 1;
  }
`

const PostTimelineMonthText = styled(Text)`
  background-color: #fff;
  border: 1px solid #c4c4c4;
  position: relative;
  z-index: 3;
`

const PostBox = styled(Box)`
  background-color: ${p => p.theme.colors.background};
  position: relative;
  border: 1px solid #c4c4c4;
  border-radius: 20px;

  ::before {
    content: '';
    /* background-color: red; */
    border: 1px solid #c4c4c4;
    background-color: #fff;
    position: absolute;
    width: 12px;
    height: 12px;
    left: -31px;
    top: -38px;
    border-radius: 12px;
    z-index: 2;
  }

  ::after {
    content: '';
    /* background-color: red; */
    background-color: #fff;
    border: 1px solid #c4c4c4;
    position: absolute;
    width: 22px;
    height: 22px;
    left: -14px;
    top: -24px;
    border-radius: 22px;
    z-index: 2;
  }
`

// @TODO Create a separated list component?
const BoxUnorderedList = props => <Box as="ul" {...props} />
const SocialNetworksList = styled(BoxUnorderedList)`
  list-style: none;
  padding-left: 0;
`
const SocialNetworkListItem = styled.li`
  ${space};
`

const SocialNetworkIconWrapper = styled(Box)`
  float: left;
`
const SocialNetworkUsername = props => <Text ml={2} as="span" variant="body" {...props} />

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
    <Box width={[1, 2 / 3]} mt={props.isFirst ? 0 : 6} mb={2} as="section" {...props} />
  )
}

export const IndexPage = ({ data }) => {
  const { allBlogPost } = data
  const { edges: posts } = allBlogPost
  const { t } = useTranslation('home')

  const date = moment('2012-06-01', 'YYYY-MM-DD')
  const years = moment().diff(date, 'years')

  const postsPerMonth = posts.reduce(
    (acc, { node }) => ({
      ...acc,
      [node.dateMonth]: [...(acc[node.dateMonth] || []), node],
    }),
    {},
  )

  return (
    <MainLayout headerTitleComponent={H1}>
      <SEO title="Home" />
      <Wrapper>
        <ContentBox isFirst>
          <H2>{t('Hi!')}</H2>
          <H2>{t('imjonathan')}</H2>
          <Paragraph>{t('description', { years })}</Paragraph>
          <Paragraph>{t('welcome')}</Paragraph>
        </ContentBox>
        <ContentBox>
          <H2>{t('Social Networks')}</H2>
          <SocialNetworksList>
            <Space my={1}>
              <SocialNetworkListItem>
                <Link
                  to="https://github.com/JCMais"
                  aria-label="GitHub Profile for JCMais"
                >
                  <SocialNetworkIconWrapper>
                    <GitHub size={24} aria-label="GitHub Icon" />
                  </SocialNetworkIconWrapper>
                  <SocialNetworkUsername>JCMais</SocialNetworkUsername>
                </Link>
              </SocialNetworkListItem>
              <SocialNetworkListItem>
                <Link
                  to="https://twitter.com/_jonathancardos"
                  aria-label="Twitter Profile for _jonathancardos"
                >
                  <SocialNetworkIconWrapper>
                    <Twitter size={24} aria-label="Twitter Icon" />
                  </SocialNetworkIconWrapper>
                  <SocialNetworkUsername>_jonathancardos</SocialNetworkUsername>
                </Link>
              </SocialNetworkListItem>
              <SocialNetworkListItem>
                <Link
                  to="https://www.linkedin.com/in/jonathancardoso/"
                  aria-label="Linkedin Profile for jonathancardoso"
                >
                  <SocialNetworkIconWrapper>
                    <Linkedin size={24} aria-label="Linkedin Icon" />
                  </SocialNetworkIconWrapper>
                  <SocialNetworkUsername>jonathancardoso</SocialNetworkUsername>
                </Link>
              </SocialNetworkListItem>
              <SocialNetworkListItem>
                <Link
                  to="https://www.instagram.com/jcm_dev"
                  aria-label="Instagram Profile for jcm_dev"
                >
                  <SocialNetworkIconWrapper>
                    <Instagram size={24} aria-label="Instagram Icon" />
                  </SocialNetworkIconWrapper>
                  <SocialNetworkUsername>jcm_dev</SocialNetworkUsername>
                </Link>
              </SocialNetworkListItem>
            </Space>
          </SocialNetworksList>
          <Paragraph>
            <Trans i18nKey="More details about myself" t={t}>
              For more details about myself, hit the{' '}
              <Link
                to="/about"
                aria-label="Page with more details about Jonathan Cardoso Machado"
                lng
              >
                about page
              </Link>
            </Trans>
          </Paragraph>
        </ContentBox>
        {!!posts.length && (
          <ContentBox>
            <H2>{t('Latest Thoughts')}</H2>
            <PostsTimeline pt={[6]} pb={[0]}>
              {Object.entries(postsPerMonth).map(([month, posts]) => (
                <div key={`month-${month.replace(/\s+/g, '').toLowerCase()}`}>
                  <PostTimelineMonth mt={4} mb={4} ml={26}>
                    <PostTimelineMonthText
                      sx={{
                        textTransform: 'uppercase',
                      }}
                      py={1}
                      px={2}
                      as="span"
                    >
                      {month}
                    </PostTimelineMonthText>
                  </PostTimelineMonth>
                  {posts.map(post => (
                    <PostBox
                      as="article"
                      mt={6}
                      mb={6}
                      ml={26}
                      px={3}
                      py={4}
                      key={post.id}
                    >
                      <Link
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        to={post.slug}
                      >
                        <H3>{post.title}</H3>
                        <Text color="gray.1" variant="body" fontSize={1}>
                          {post.date}
                        </Text>
                        <Text color="gray.2" variant="body">
                          <i>{post.description}</i>
                        </Text>
                      </Link>
                    </PostBox>
                  ))}
                </div>
              ))}
            </PostsTimeline>
            <Link to="/blog" lng>
              See all posts
            </Link>
          </ContentBox>
        )}
      </Wrapper>
    </MainLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery($langKey: LangKey!, $langKeySlug: String!) {
    allBlogPost(
      filter: { langKey: { eq: $langKey } }
      sort: { order: DESC, fields: [date] }
      limit: 3
    ) {
      edges {
        node {
          id
          description
          title
          date(formatString: "MMMM DD, YYYY", locale: $langKeySlug)
          dateMonth: date(formatString: "MMMM YYYY", locale: $langKeySlug)
          rawDate: date(formatString: "X")
          slug
        }
      }
    }
  }
`
