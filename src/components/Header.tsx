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
    /* 99% {
      transform: translateX(-325px);
      opacity: 1;
      position: relative;
    } */
    100% {
      transform: translateX(-325px);
      /* position: absolute; */
      /* opacity: 0; */
    }
  }

  @keyframes hide-letters-second {
    0% {
      transform: translateX(0);
    }
    /* 90% */
    100% {
      transform: translateX(-90px);
      opacity: 1;
    }
    /* 99% {
      transform: translateX(-90px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    } */
  }
  @keyframes hide-letters-third {
    0% {
      transform: translateX(0);
    }
    /* 90% */
    100% {
      transform: translateX(-160px);
      opacity: 1;
    }
    /* 99% {
      transform: translateX(-160px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    } */
  }

  @keyframes show-letters-others {
    0% {
      position: relative;
      opacity: 1;
      transform: translateX(-325px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes show-letters-second {
    0% {
      transform: translateX(-90px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes show-letters-third {
    0% {
      transform: translateX(-160px);
    }
    100% {
      transform: translateX(0);
    }
  }

  ${HeaderTitleLetterOther} {
    animation: hide-letters-others 0.6s linear forwards;
    /* left: -325px; */
  }

  ${HeaderTitleFirstLetterC} {
    animation: hide-letters-second 0.6s linear forwards;
    /* left: -90px; */
  }

  ${HeaderTitleFirstLetterM} {
    animation: hide-letters-third 0.6s linear forwards;
    /* left: -160px; */
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[0]}) {
    ${HeaderTitleLetterOther} {
      animation: show-letters-others 0.6s linear;
      /* left: -325px; */
    }

    ${HeaderTitleFirstLetterC} {
      animation: show-letters-second 0.6s linear;
      /* left: -90px; */
    }

    ${HeaderTitleFirstLetterM} {
      animation: show-letters-third 0.6s linear;
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
    <Link to="/" lng sx={{ textDecoration: 'none' }}>
      <HeaderTitle
        fontFamily="heading"
        fontSize={4}
        fontWeight="bold"
        as={headerTitleComponent}
        sx={{
          maxWidth: ['50%', 'none'],
        }}
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
    </Link>
    <Box>
      <Space mx={2}>
        <Link to="/" lng variant="linkHeader">
          HOME
        </Link>
        <Link to="/blog" lng variant="linkHeader">
          BLOG
        </Link>
      </Space>
    </Box>
  </Flex>
)
