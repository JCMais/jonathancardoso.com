/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import { Link as RebassLink } from 'rebass'
import { useTranslation } from 'react-i18next'
import { getLangKeyFromPath } from '../../../gatsby/utils'

export const Link: React.FunctionComponent<
  { to: string; lng?: string | boolean } & GatsbyLinkProps
> = ({ children, to, lng = false, ...props }) => {
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
