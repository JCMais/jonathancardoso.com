import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { Box, BoxProps, Flex, FlexProps } from 'rebass'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'
import { MainContentWrapper } from '../components/MainContentWrapper'
import { ContentBox } from '../components/ContentBox'
import { H1 } from '../components/ui/H1'
import { TagQuery } from '../types/graphql'
import { PostsTimeline } from '../components/PostTimeline'

type TagInfo = { articlesCount: number; tag: string }

const TagGrid: React.FunctionComponent<FlexProps> = (props) => (
  <Flex
    as="ul"
    my={3}
    mx={false}
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="space-evenly"
    alignItems="center"
    {...props}
    sx={{
      listStyle: 'none',
    }}
  />
)

const TagItem: React.FunctionComponent<BoxProps> = (props) => <Box {...props} as="li" />

const TagLink: React.FunctionComponent<TagInfo> = ({ tag, articlesCount }) => (
  <Link
    to={`/blog/tag/${tag}`}
    lng
    py={[3]}
    px={[4]}
    my={3}
    mx={2}
    color="textLighter"
    sx={{
      display: 'inline-block',
      textDecoration: 'none',
      backgroundColor: 'primary',
    }}
  >
    {tag} ({articlesCount})
  </Link>
)

const Tag: React.FC<PageProps<
  TagQuery,
  {
    tag: String
  }
>> = ({ pageContext: { tag }, data }) => {
  const { t } = useTranslation('pages')

  const title = t('Tag', { tag })
  return (
    <MainLayout>
      <SEO title={title} />
      <MainContentWrapper>
        <ContentBox>
          <H1>{title}</H1>
          <PostsTimeline posts={data.allBlogPost.edges} />
          <Link to="/blog/tags" lng>
            Back to list of Tags
          </Link>
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Tag

export const pageQuery = graphql`
  query TagQuery($langKey: LangKey!, $tag: String!) {
    allBlogPost(filter: { langKey: { eq: $langKey }, tags: { in: [$tag] } }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          title
          date
          banner {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          keywords
          slug
        }
      }
    }
  }
`
