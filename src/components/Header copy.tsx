import React from 'react'

import { Box, Flex, Text } from 'rebass'
import Space from '@rebass/space'
import styled from '@emotion/styled'

import { Link } from './ui/Link'

const HeaderTitleLetter = styled.span`
  position: relative;
  display: inline-block;
  /* transition: left 1s ease-out; */
  /* left: 0px; */
`

const HeaderTitleLetterOther = styled(HeaderTitleLetter)``
const HeaderTitleFirstLetter = styled(HeaderTitleLetter)``
const HeaderTitleFirstLetterJ = styled(HeaderTitleFirstLetter)``
const HeaderTitleFirstLetterC = styled(HeaderTitleFirstLetter)``
const HeaderTitleFirstLetterM = styled(HeaderTitleFirstLetter)``

const HeaderTitle = styled(Text)`
  text-transform: 'uppercase';
  white-space: nowrap;

  @keyframes hide-letters-others {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-325px);
    }
  }
  @keyframes hide-letters-first {
    0% {
      left: 0;
    }
    100% {
      left: 0;
    }
  }
  @keyframes hide-letters-second {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-90px);
    }
  }
  @keyframes hide-letters-third {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-160px);
    }
  }

  ${HeaderTitleLetterOther} {
    animation: hide-letters-others 2s forwards;
    /* left: -325px; */
  }

  ${HeaderTitleFirstLetterC} {
    animation: hide-letters-second 4s forwards;
    /* left: -90px; */
  }

  ${HeaderTitleFirstLetterM} {
    animation: hide-letters-third 4s forwards;
    /* left: -160px; */
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    ${HeaderTitleLetterOther} {
      animation: hide-letters-others 2s reverse;
      /* left: -325px; */
    }

    ${HeaderTitleFirstLetterC} {
      animation: hide-letters-second 4s reverse;
      /* left: -90px; */
    }

    ${HeaderTitleFirstLetterM} {
      animation: hide-letters-third 4s reverse;
      /* left: -160px; */
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
      <HeaderTitleLetterOther>o</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>n</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>a</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>t</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>h</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>a</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>n</HeaderTitleLetterOther>{' '}
      <HeaderTitleFirstLetterC>C</HeaderTitleFirstLetterC>
      <HeaderTitleLetterOther>a</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>r</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>d</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>o</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>s</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>o</HeaderTitleLetterOther>{' '}
      <HeaderTitleFirstLetterM>M</HeaderTitleFirstLetterM>
      <HeaderTitleLetterOther>a</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>c</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>h</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>a</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>d</HeaderTitleLetterOther>
      <HeaderTitleLetterOther>o</HeaderTitleLetterOther>
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
