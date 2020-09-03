import React from 'react'
import { Box, BoxProps, Text } from 'rebass'
import moment from 'moment'

import { BlogPost } from '@r/generated/graphql'

import { styled } from '@r/styled'

import { Link } from './ui/Link'
import { H3 } from './ui/H3'

const PostsTimelineWrapper = styled(Box)`
  position: relative;
  ::after {
    content: '';
    width: 6px;
    background: rgb(196, 196, 196);
    background: linear-gradient(
      180deg,
      #f5f5f5 0%,
      #c4c4c4 20%,
      #c4c4c4 80%,
      #f5f5f5 100%
    );
    left: 0;
    top: 0;
    height: 100%;
    position: absolute;
  }
`

const PostsTimelineMonth = styled(Box)`
  /* box-sizing: border-box; */
  display: inline-block;
  position: relative;
  width: 100%;
  height: 16px;

  ::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 8px;
    background-color: #c4c4c4;
    height: 2px;
    width: 100%;
    z-index: 1;
  }
`

const PostsTimelineMonthText = styled(Text)`
  background-color: #fff;
  border: 1px solid #c4c4c4;
  position: relative;
  z-index: 3;
`

const PostBox = styled(Box)`
  background-color: ${(p) => p.theme.colors.background};
  position: relative;
  border: 1px solid #c4c4c4;
  border-radius: 20px;

  ::before {
    content: '';
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

type BlogPostOnTimeline = Pick<BlogPost, 'id' | 'slug' | 'title' | 'date' | 'excerpt'>
type BlogPostEdgeOnTimeline = { node: BlogPostOnTimeline }

type PostsTimelineProps = {
  postTitleComponent?: typeof H3
  postTitleSx?: BoxProps['sx']
  posts: Array<BlogPostEdgeOnTimeline>
}

export const PostsTimeline = ({
  posts,
  postTitleComponent = H3,
  postTitleSx = {
    fontSize: [4],
  },
}: PostsTimelineProps) => {
  const postsPerMonth = posts.reduce<Record<string, Array<BlogPostOnTimeline>>>(
    (acc, { node }) => {
      const dateMonth = moment(node.date).format('MMMM YYYY')
      return {
        ...acc,
        [dateMonth]: [...(acc[dateMonth] || []), node],
      }
    },
    {},
  )

  const PostTitleComponent = postTitleComponent

  return (
    <PostsTimelineWrapper pt={[6]} pb={[0]}>
      {Object.entries(postsPerMonth).map(([month, postsForMonth]) => (
        <div key={`month-${month.replace(/\s+/g, '').toLowerCase()}`}>
          <PostsTimelineMonth mt={4} mb={4} pl={26}>
            <PostsTimelineMonthText
              sx={{
                textTransform: 'uppercase',
              }}
              py={1}
              px={2}
              as="span"
            >
              {month}
            </PostsTimelineMonthText>
          </PostsTimelineMonth>
          {postsForMonth.map((post) => (
            <PostBox as="article" mt={6} mb={6} ml={26} px={3} py={4} key={post.id}>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={post.slug}>
                <PostTitleComponent sx={postTitleSx}>{post.title}</PostTitleComponent>
                <Text color="gray.1" variant="body" fontSize={1}>
                  {moment(post.date).format('MMMM DD, YYYY')}
                </Text>
                <Text color="gray.2" variant="body">
                  <i>{post.excerpt}</i>
                </Text>
              </Link>
            </PostBox>
          ))}
        </div>
      ))}
    </PostsTimelineWrapper>
  )
}
