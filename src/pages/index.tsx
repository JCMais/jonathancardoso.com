import styled from '@emotion/styled'
import Space from '@rebass/space'
import { graphql, PageProps } from 'gatsby'
import moment from 'moment'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'rebass'

import { IndexQuery } from '@r/generated/graphql'

import { MainLayout } from '@r/layouts/MainLayout'

import { ContentBox } from '@r/components/ContentBox'
import { MainContentWrapper } from '@r/components/MainContentWrapper'
import { SEO } from '@r/components/SEO'

import { PostsTimeline } from '@r/components/PostsTimeline'
import { FeatherIcons } from '@r/components/icon/FeatherIcons'
import { StackOverflowIcon } from '@r/components/icon/StackOverflowIcon'
import { H1 } from '@r/components/ui/H1'
import { H2 } from '@r/components/ui/H2'
import { Link } from '@r/components/ui/Link'
import { Paragraph } from '@r/components/ui/Paragraph'
import { ListUnordered } from '@r/components/ui/ListUnordered'
import { ListItem } from '@r/components/ui/ListItem'

const SocialNetworksList = styled(ListUnordered)`
  list-style: none;
  padding-left: 0;
`
const SocialNetworkUsername = (props: { children: string }) => (
  <Text ml={2} as="span" variant="body" {...props} />
)

export const IndexPage = ({ data }: PageProps<IndexQuery>) => {
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
              <ListItem>
                <Link
                  to="https://github.com/JCMais"
                  aria-label="GitHub Profile for JCMais"
                >
                  <FeatherIcons.GitHub variant="icon" aria-label="GitHub Icon" />
                  <SocialNetworkUsername>JCMais</SocialNetworkUsername>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="https://twitter.com/_jonathancardos"
                  aria-label="Twitter Profile for _jonathancardos"
                >
                  <FeatherIcons.Twitter variant="icon" aria-label="Twitter Icon" />
                  <SocialNetworkUsername>_jonathancardos</SocialNetworkUsername>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="https://stackoverflow.com/users/710693/jonathancardoso"
                  aria-label="StackOverflow Profile for jonathancardoso"
                >
                  <StackOverflowIcon variant="icon" aria-label="StackOverflow Icon" />
                  <SocialNetworkUsername>jonathancardoso</SocialNetworkUsername>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="https://www.linkedin.com/in/jonathancardoso/"
                  aria-label="Linkedin Profile for jonathancardoso"
                >
                  <FeatherIcons.Linkedin variant="icon" aria-label="Linkedin Icon" />
                  <SocialNetworkUsername>jonathancardoso</SocialNetworkUsername>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="https://www.instagram.com/jcm_dev"
                  aria-label="Instagram Profile for jcm_dev"
                >
                  <FeatherIcons.Instagram variant="icon" aria-label="Instagram Icon" />
                  <SocialNetworkUsername>jcm_dev</SocialNetworkUsername>
                </Link>
              </ListItem>
            </Space>
          </SocialNetworksList>
          {/* TODO: Create about page */}
          {/* <Paragraph>
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
          </Paragraph> */}
        </ContentBox>
        {!!posts.length && (
          <ContentBox>
            <H2>{t('Latest Thoughts')}</H2>
            <PostsTimeline
              posts={posts}
              postTitleSx={{
                fontSize: [4],
              }}
            />
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
      filter: { langKey: { eq: $langKey }, isDraft: { eq: false } }
      sort: { order: DESC, fields: [date] }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          title
          date
          slug
        }
      }
    }
  }
`
