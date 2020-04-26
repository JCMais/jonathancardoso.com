/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as RebassLink } from 'rebass'
import { useTranslation } from 'react-i18next'

export const Link: React.FunctionComponent<{ to: string; lng?: string | boolean }> = ({
  children,
  to,
  lng = false,
  ...props
}) => {
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
