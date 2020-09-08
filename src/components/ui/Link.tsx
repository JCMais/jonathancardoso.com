/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import { Link as RebassLink, LinkProps as RebassLinkProps } from 'rebass'
import { useTranslation } from 'react-i18next'

import { styled } from '@r/styled'
import { Theme } from '@r/theme'
import { css } from '@emotion/core'

export type LinkProps = {
  to: string
  lng?: string | boolean
  noBg?: boolean
} & RebassLinkProps &
  GatsbyLinkProps<{}>

export const linkBackgroundEffectCss = (theme: Theme) => css`
  background: linear-gradient(
    to bottom,
    ${theme.colors.linkBg} 0%,
    ${theme.colors.linkBg} 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 4px;
  transition: background-size 0.2s;

  :hover {
    background-size: 4px 50px;
  }

  :active {
    background: linear-gradient(
      to bottom,
      ${theme.colors.linkBgActive} 0%,
      ${theme.colors.linkBgActive} 100%
    );
  }
`

const StyledLink = styled<typeof RebassLink, { noBg?: boolean }>(RebassLink)`
  ${(props) => !props.noBg && linkBackgroundEffectCss(props.theme)}

  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`

export const Link: React.FC<LinkProps> = ({ children, to, lng = false, ...props }) => {
  const { i18n } = useTranslation()
  const internal = /^\/(?!\/)/.test(to)

  const currentLanguage = i18n.language
  let urlFinal = to

  if (lng && internal) {
    // lng true means we should use the current language
    const langPrefix =
      lng === true ? `/${currentLanguage.toLowerCase()}` : `/${lng.toLowerCase()}`
    urlFinal = `${langPrefix}${urlFinal}`
  }

  if (internal) {
    // const languageLink = getLangKeyFromPath(to)
    // if (languageLink !== )
    return (
      // @ts-expect-error Property 'to' does not exist on type
      <StyledLink to={urlFinal} {...props} as={GatsbyLink}>
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledLink href={urlFinal} {...props}>
      {children}
    </StyledLink>
  )
}
