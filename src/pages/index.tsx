import styled from '@emotion/styled'
import Space from '@rebass/space'
import { graphql } from 'gatsby'
import moment from 'moment'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Box, Flex, Text } from 'rebass'
import { space } from 'styled-system'
import { ContentBox } from '../components/ContentBox'
import { FeatherIcons } from '../components/icon/FeatherIcons'
import { StackOverflowIcon } from '../components/icon/StackOverflowIcon'
import { MainContentWrapper } from '../components/MainContentWrapper'
import { SEO } from '../components/SEO'
import { H1 } from '../components/ui/H1'
import { H2 } from '../components/ui/H2'
import { H3 } from '../components/ui/H3'
import { Link } from '../components/ui/Link'
import { Paragraph } from '../components/ui/Paragraph'
import { MainLayout } from '../layouts/MainLayout'
import { PostsTimeline } from '../components/PostTimeline'

// @TODO Create a separated list component?
const BoxUnorderedList = (props) => <Box as="ul" {...props} />
const SocialNetworksList = styled(BoxUnorderedList)`
  list-style: none;
  padding-left: 0;
`
const SocialNetworkListItem = styled.li`
  ${space};
`

const SocialNetworkUsername = (props) => (
  <Text ml={2} as="span" variant="body" {...props} />
)

export const IndexPage = ({ data }) => {
  const { allBlogPost } = data
  const { edges: posts } = allBlogPost
  const { t } = useTranslation('home')

  const date = moment('2012-06-01', 'YYYY-MM-DD')
  const years = moment().diff(date, 'years')

  return (
    <MainLayout headerTitleComponent={H1}>
      <SEO title="Home" />
      <MainContentWrapper>
        <ContentBox
          mt={7}
          sx={{
            textAlign: 'center',
          }}
        >
          <H2>{t('Hi!')}</H2>
          <H2>{t('imjonathan')}</H2>
          <Paragraph fontSize={3}>{t('description', { years })}</Paragraph>
          <Paragraph my={2} fontSize={3}>
            {t('discussMail')}
          </Paragraph>
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
                  <FeatherIcons.GitHub variant="icon" aria-label="GitHub Icon" />
                  <SocialNetworkUsername>JCMais</SocialNetworkUsername>
                </Link>
              </SocialNetworkListItem>
              <SocialNetworkListItem>
                <Link
                  to="https://twitter.com/_jonathancardos"
                  aria-label="Twitter Profile for _jonathancardos"
                >
                  <FeatherIcons.Twitter variant="icon" aria-label="Twitter Icon" />
                  <SocialNetworkUsername>_jonathancardos</SocialNetworkUsername>
                </Link>
              </SocialNetworkListItem>
              <SocialNetworkListItem>
                <Link
                  to="https://stackoverflow.com/users/710693/jcm"
                  aria-label="StackOverflow Profile for jcm"
                >
                  <StackOverflowIcon variant="icon" aria-label="StackOverflow Icon" />
                  <SocialNetworkUsername>jcm</SocialNetworkUsername>
                </Link>
              </SocialNetworkListItem>
              <SocialNetworkListItem>
                <Link
                  to="https://www.linkedin.com/in/jonathancardoso/"
                  aria-label="Linkedin Profile for jonathancardoso"
                >
                  <FeatherIcons.Linkedin variant="icon" aria-label="Linkedin Icon" />
                  <SocialNetworkUsername>jonathancardoso</SocialNetworkUsername>
                </Link>
              </SocialNetworkListItem>
              <SocialNetworkListItem>
                <Link
                  to="https://www.instagram.com/jcm_dev"
                  aria-label="Instagram Profile for jcm_dev"
                >
                  <FeatherIcons.Instagram variant="icon" aria-label="Instagram Icon" />
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
            <PostsTimeline posts={posts} />
            <Link to="/blog" lng>
              {t('common:See all posts')}
            </Link>
          </ContentBox>
        )}
      </MainContentWrapper>
    </MainLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery($langKey: LangKey!) {
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
          date
          slug
        }
      }
    }
  }
`
