import React from 'react'
import { PageProps } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { Box, BoxProps, Flex, FlexProps } from 'rebass'

import { MainLayout } from '@r/layouts/MainLayout'

import { SEO } from '@r/components/SEO'
import { MainContentWrapper } from '@r/components/MainContentWrapper'
import { ContentBox } from '@r/components/ContentBox'

import { Link } from '@r/components/ui/Link'
import { H1 } from '../components/ui/H1'

type TagInfo = { postsCount: number; tag: string }

const TagGrid: React.FC<FlexProps> = (props) => (
  <Flex
    as="ul"
    my={3}
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

const TagItem: React.FC<BoxProps> = (props) => <Box {...props} as="li" />

const TagLink: React.FC<TagInfo> = ({ tag, postsCount }) => (
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
    #{tag} ({postsCount})
  </Link>
)

const Tags: React.FC<PageProps<
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
            {tags.map(({ tag, postsCount }) => (
              <TagItem key={tag}>
                <TagLink tag={tag} postsCount={postsCount} />
              </TagItem>
            ))}
          </TagGrid>
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Tags
