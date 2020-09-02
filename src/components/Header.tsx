import React from 'react'

import { Box, Flex, Text } from 'rebass'
import Space from '@rebass/space'
import { WindowLocation, useLocation } from '@reach/router'
import { useTranslation } from 'react-i18next'
//
import styled from '@emotion/styled'

import { locale } from '@shared/config'
import { trim } from '@shared/utils'

import { Theme } from '@r/theme'

import { Link } from './ui/Link'

const HeaderTitleLetter = styled.span`
  position: relative;
  display: inline-block;
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

  @keyframes hide-letters-second {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-4em);
    }
  }
  @keyframes hide-letters-third {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-7.1em);
    }
  }

  @keyframes show-letters-others {
    0% {
      transform: translateX(-325px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes show-letters-second {
    0% {
      transform: translateX(-4em);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes show-letters-third {
    0% {
      transform: translateX(-7.1em);
    }
    100% {
      transform: translateX(0);
    }
  }

  ${HeaderTitleLetterOther} {
    display: none;
  }

  @media screen and (max-width: ${(p) => (p.theme as Theme).breakpoints[0]}) {
    .scrollbar-var-ready & ${HeaderTitleLetterOther} {
      animation: hide-letters-others 0.6s linear forwards;
      display: inline-block;
    }

    .scrollbar-var-ready & ${HeaderTitleFirstLetterC} {
      animation: hide-letters-second 0.6s linear forwards;
    }

    .scrollbar-var-ready & ${HeaderTitleFirstLetterM} {
      animation: hide-letters-third 0.6s linear forwards;
    }
  }

  @media screen and (min-width: ${(p) => (p.theme as Theme).breakpoints[0]}) {
    .scrollbar-var-ready & ${HeaderTitleLetterOther} {
      animation: show-letters-others 0.6s linear;
      display: inline-block;
    }

    .scrollbar-var-ready & ${HeaderTitleFirstLetterC} {
      animation: show-letters-second 0.6s linear;
    }

    .scrollbar-var-ready & ${HeaderTitleFirstLetterM} {
      animation: show-letters-third 0.6s linear;
    }
  }
`

const wrapIfCurrent = (currentLanguage: string, language: string) => {
  const isSame = currentLanguage.toLowerCase() === language.toLowerCase()

  return [isSame ? '[' : '', `${language}`, isSame ? ']' : ''].join('')
}

type CurrentPageInfo = { nextLanguage: string; location: WindowLocation }

const getLanguageSwitchAddressForCurrentPage = ({
  nextLanguage,
  location,
}: CurrentPageInfo) => {
  const pieces = trim(location.pathname, '/').split('/')

  const startsWithLanguage = Object.keys(locale.supportedLanguages).some(
    (val) => val === pieces[0],
  )
  const isBlog = pieces[1] === 'blog'

  const piecesAfterLang = pieces.slice(1)

  // if the it starts with a language:
  //  if it's on the blog - go to the blog index as there is no easy way
  //   to know the url of the current page on the other language here, if one exists
  //  else go to the translated page
  // else go to the home of the language
  return startsWithLanguage
    ? isBlog
      ? `/${nextLanguage}/blog/`
      : `/${nextLanguage}/${piecesAfterLang.join('/')}`
    : `/${nextLanguage}/`
}

type HeaderProps = {
  headerTitleComponent?: React.ElementType
}

export const Header: React.FC<HeaderProps> = ({ headerTitleComponent = Text }) => {
  const { i18n } = useTranslation()
  const location = useLocation()

  const enLngUrl = getLanguageSwitchAddressForCurrentPage({
    nextLanguage: 'en',
    location,
  })

  const ptBrLngUrl = getLanguageSwitchAddressForCurrentPage({
    nextLanguage: 'pt-br',
    location,
  })

  return (
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
        <Flex>
          <Box mx={[6]}>
            {/* this will wrap based on the current lang, which means that on paths without a lang it will still have the default locale wrapped */}
            <Link to={enLngUrl}>{wrapIfCurrent(i18n.language, 'en')}</Link> /{' '}
            <Link to={ptBrLngUrl}>{wrapIfCurrent(i18n.language, 'pt-br')}</Link>
          </Box>
          <Box>
            <Space mx={2}>
              <Link to="/" lng variant="linkHeader">
                HOME
              </Link>
              <Link to="/blog/" lng variant="linkHeader">
                BLOG
              </Link>
            </Space>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
