import React from 'react'

import { Box, Flex, Text } from 'rebass'
import Space from '@rebass/space'
import styled from '@emotion/styled'

import { Link } from './ui/Link'

const HeaderTitleLetter = styled.span`
  position: relative;
  transition: left 1s ease-out;
  left: 0px;
`

const HeaderTitleFirstLetter = styled(HeaderTitleLetter)``
const HeaderTitleFirstLetterJ = styled(HeaderTitleFirstLetter)``
const HeaderTitleFirstLetterC = styled(HeaderTitleFirstLetter)``
const HeaderTitleFirstLetterM = styled(HeaderTitleFirstLetter)``

const HeaderTitle = styled(Text)`
  text-transform: 'uppercase';
  white-space: nowrap;
  @media screen and (max-width: ${p => p.theme.breakpoints[0]}) {
    ${HeaderTitleLetter} {
      transition: left 1s ease-in 0s;
      left: -325px;
    }

    ${HeaderTitleFirstLetter} {
      left: 0px;
    }

    ${HeaderTitleFirstLetterC} {
      left: -90px;
    }

    ${HeaderTitleFirstLetterM} {
      left: -160px;
    }
  }
`

export const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle: _siteTitle,
  headerTitleComponent = Text,
}) => (
  <Flex
    backgroundColor="backgroundDarker"
    px={18}
    py={20}
    justifyContent="space-between"
    as="header"
    sx={{
      boxShadow: 'rgba(0,0,0,0.25) 3px 2px 42px',
    }}
  >
    <HeaderTitle
      fontFamily="heading"
      fontSize={4}
      fontWeight="bold"
      as={headerTitleComponent}
    >
      <HeaderTitleFirstLetterJ>J</HeaderTitleFirstLetterJ>
      <HeaderTitleLetter>o</HeaderTitleLetter>
      <HeaderTitleLetter>n</HeaderTitleLetter>
      <HeaderTitleLetter>a</HeaderTitleLetter>
      <HeaderTitleLetter>t</HeaderTitleLetter>
      <HeaderTitleLetter>h</HeaderTitleLetter>
      <HeaderTitleLetter>a</HeaderTitleLetter>
      <HeaderTitleLetter>n</HeaderTitleLetter>{' '}
      <HeaderTitleFirstLetterC>C</HeaderTitleFirstLetterC>
      <HeaderTitleLetter>a</HeaderTitleLetter>
      <HeaderTitleLetter>r</HeaderTitleLetter>
      <HeaderTitleLetter>d</HeaderTitleLetter>
      <HeaderTitleLetter>o</HeaderTitleLetter>
      <HeaderTitleLetter>s</HeaderTitleLetter>
      <HeaderTitleLetter>o</HeaderTitleLetter>{' '}
      <HeaderTitleFirstLetterM>M</HeaderTitleFirstLetterM>
      <HeaderTitleLetter>a</HeaderTitleLetter>
      <HeaderTitleLetter>c</HeaderTitleLetter>
      <HeaderTitleLetter>h</HeaderTitleLetter>
      <HeaderTitleLetter>a</HeaderTitleLetter>
      <HeaderTitleLetter>d</HeaderTitleLetter>
      <HeaderTitleLetter>o</HeaderTitleLetter>
    </HeaderTitle>
    <Box>
      <Space mx={2}>
        <Link to="/en/" variant="linkHeader">
          HOME
        </Link>
        <Link to="/en/blog" variant="linkHeader">
          BLOG
        </Link>
      </Space>
    </Box>
  </Flex>
)
