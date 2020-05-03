import * as React from 'react'
import { PageProps } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { Box, BoxProps, Flex, FlexProps } from 'rebass'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'
import { MainContentWrapper } from '../components/MainContentWrapper'
import { ContentBox } from '../components/ContentBox'
import { H1 } from '../components/ui/H1'

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
    to={`/blog/tags/${tag}`}
    lng
    py={[3]}
    px={[4]}
    my={3}
    mx={2}
    sx={{
      display: 'inline-block',
    }}
  >
    #{tag} ({articlesCount})
  </Link>
)

const Tags: React.FunctionComponent<PageProps<
  {},
  {
    tags: Array<TagInfo>
  }
>> = ({ pageContext: { tags } }) => {
  const { t } = useTranslation('pages')

  return (
    <MainLayout>
      <SEO title={t('Tags')} />
      <MainContentWrapper>
        <ContentBox>
          <H1>{t('Tags')}</H1>
          <TagGrid>
            {tags.map(({ tag, articlesCount }) => (
              <TagItem key={tag}>
                <TagLink tag={tag} articlesCount={articlesCount} />
              </TagItem>
            ))}
          </TagGrid>
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Tags
