import React, { useState } from 'react'
import Space from '@rebass/space'
import { graphql, PageProps } from 'gatsby'
import moment from 'moment'
import { Trans, useTranslation } from 'react-i18next'
import { Text } from 'rebass'

import { IndexQuery } from '@r/generated/graphql'

import { styled } from '@r/styled'

import { MainLayout } from '@r/layouts/MainLayout'

import { ContentBox } from '@r/components/ContentBox'
import { MainContentWrapper } from '@r/components/MainContentWrapper'
import { SEO } from '@r/components/SEO'

import { PostsTimeline } from '@r/components/PostsTimeline'
import { FeatherIcons } from '@r/components/icon/FeatherIcons'
import { StackOverflowIcon } from '@r/components/icon/StackOverflowIcon'
import { H1 } from '@r/components/ui/H1'
import { H2 } from '@r/components/ui/H2'
import { Link, linkBackgroundEffectCss } from '@r/components/ui/Link'
import { Paragraph } from '@r/components/ui/Paragraph'
import { ListUnordered } from '@r/components/ui/ListUnordered'
import { ListItem } from '@r/components/ui/ListItem'

const SocialNetworksList = styled(ListUnordered)`
  list-style: none;
  padding-left: 0;
`
const SocialNetworkUsername = (props: { children: string }) => (
  <Text as="span" variant="body" {...props} />
)

type SocialNetworkLinkProps = {
  iconComponent: JSX.Element
  to: string
  label: string
  children: string
}

// this is ugly but I don't have time to think on a better solution right now :P
const SocialNetworkLink = ({
  iconComponent,
  to,
  label,
  children,
}: SocialNetworkLinkProps) => {
  return (
    <>
      <Link tabIndex={-1} to={to} aria-label={label} noBg>
        {iconComponent}
      </Link>
      <Link to={to} aria-label={label}>
        <SocialNetworkUsername>{children}</SocialNetworkUsername>
      </Link>
    </>
  )
}

const MailAntiSpammer = styled.a`
  ${(props) => linkBackgroundEffectCss(props.theme)}
  ::after {
    content: attr(data-acc) '@' attr(data-domain) '.' attr(data-tld);
  }
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const IndexPage = ({ data }: PageProps<IndexQuery>) => {
  const { allBlogPost } = data
  const { edges: posts } = allBlogPost
  const { t } = useTranslation('home')

  const date = moment('2012-06-01', 'YYYY-MM-DD')
  const years = moment().diff(date, 'years')

  const [emailHref, setEmailHref] = useState('')

  const onEmailMouseEnter: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    const { acc, domain, tld } = evt.currentTarget.dataset
    setEmailHref(`mailto:${acc}@${domain}.${tld}`)
  }

  const onEmailMouseLeave: React.MouseEventHandler<HTMLAnchorElement> = () => {
    setEmailHref('')
  }

  const onClickMail: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    // can happen with tabbing
    if (!emailHref) {
      const { acc, domain, tld } = evt.currentTarget.dataset
      window.location.href = `mailto:${acc}@${domain}.${tld}`
    }
    return false
  }

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
            <Trans i18nKey="discussMail" t={t}>
              Want to discuss something? Send me an email:{' '}
              <MailAntiSpammer
                className="cm"
                data-acc="me"
                data-domain="jonathancardoso"
                data-tld="com"
                href={emailHref}
                onMouseEnter={onEmailMouseEnter}
                onMouseLeave={onEmailMouseLeave}
                onClick={onClickMail}
              />
              Btw, I&apos;m open for new opportunities 😉
            </Trans>
          </Paragraph>
        </ContentBox>
        <ContentBox>
          <H2>{t('Social Networks')}</H2>
          <SocialNetworksList>
            <Space my={1}>
              <ListItem>
                <SocialNetworkLink
                  to="https://github.com/JCMais"
                  label="GitHub Profile for JCMais"
                  iconComponent={
                    <FeatherIcons.GitHub variant="icon" aria-label="GitHub Icon" />
                  }
                >
                  JCMais
                </SocialNetworkLink>
              </ListItem>
              <ListItem>
                <SocialNetworkLink
                  to="https://twitter.com/_jonathancardos"
                  label="Twitter Profile for _jonathancardos"
                  iconComponent={
                    <FeatherIcons.Twitter variant="icon" aria-label="Twitter Icon" />
                  }
                >
                  _jonathancardos
                </SocialNetworkLink>
              </ListItem>
              <ListItem>
                <SocialNetworkLink
                  to="https://stackoverflow.com/users/710693/jonathancardoso"
                  label="StackOverflow Profile for jonathancardoso"
                  iconComponent={
                    <StackOverflowIcon variant="icon" aria-label="StackOverflow Icon" />
                  }
                >
                  jonathancardoso
                </SocialNetworkLink>
              </ListItem>
              <ListItem>
                <SocialNetworkLink
                  to="https://www.linkedin.com/in/jonathancardoso/"
                  label="Linkedin Profile for jonathancardoso"
                  iconComponent={
                    <FeatherIcons.Linkedin variant="icon" aria-label="Linkedin Icon" />
                  }
                >
                  jonathancardoso
                </SocialNetworkLink>
              </ListItem>
              <ListItem>
                <SocialNetworkLink
                  to="https://www.instagram.com/jcm_dev"
                  label="Instagram Profile for jcm_dev"
                  iconComponent={
                    <FeatherIcons.Instagram variant="icon" aria-label="Instagram Icon" />
                  }
                >
                  jcm_dev
                </SocialNetworkLink>
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
            <PostsTimeline posts={posts} />
            <Link to="/blog/" lng>
              {t('common:See all posts')}
            </Link>
          </ContentBox>
        )}
        <ContentBox>
          This site uses cookies, see the{' '}
          <Link to="/privacy/" lng>
            Privacy Policy
          </Link>
        </ContentBox>
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
