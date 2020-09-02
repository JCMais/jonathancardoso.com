/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import { Link as RebassLink, LinkProps as RebassLinkProps } from 'rebass'
import { useTranslation } from 'react-i18next'

export type LinkProps = { to: string; lng?: string | boolean } & RebassLinkProps &
  GatsbyLinkProps<{}>

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
      <RebassLink to={urlFinal} {...props} as={GatsbyLink}>
        {children}
      </RebassLink>
    )
  }

  return (
    <RebassLink href={urlFinal} {...props}>
      {children}
    </RebassLink>
  )
}
