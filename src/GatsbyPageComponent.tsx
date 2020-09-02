import React, { useEffect } from 'react'
import { useTranslation, useSSR } from 'react-i18next'
import { GatsbyBrowser, WrapPageElementBrowserArgs } from 'gatsby'
import moment from 'moment'

// need to import all languages we are going to support with moment
import 'moment/locale/pt-br'

import { convertLangKeyToISO } from '@shared/utils'

type GatsbyPageComponentProps = WrapPageElementBrowserArgs<
  Record<string, unknown>,
  {
    langKeySlug: string
  }
> & {
  element: React.ReactElement
}

type GatsbyPageComponentWrapperProps = {
  children: GatsbyPageComponentProps['element']
  pageContext: GatsbyPageComponentProps['props']['pageContext']
}

// we need this wrapper to not break the rules of react hooks (calling them outside a component)
const GatsbyPageComponentWrapper = ({
  children,
  pageContext,
}: GatsbyPageComponentWrapperProps) => {
  // @ts-ignore
  useSSR(window.initialI18nStore, convertLangKeyToISO(window.initialLanguage))
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  // This seems like a hack
  // Other option would be to use navigate on the Link component
  //  instead of letting Gatsby handle the linking, that way we can check
  //  if the next route has a different language than the current one, and change according.
  useEffect(() => {
    const langKeyISO = convertLangKeyToISO(pageContext.langKeySlug)
    if (pageContext.langKeySlug && currentLanguage !== langKeyISO) {
      void i18n.changeLanguage(langKeyISO)
      moment.locale(langKeyISO)
    }
  }, [pageContext.langKeySlug, currentLanguage])

  return children
}

export const GatsbyPageComponent: GatsbyBrowser['wrapPageElement'] = ({
  props: { pageContext },
  element,
}: GatsbyPageComponentProps) => {
  return (
    <GatsbyPageComponentWrapper pageContext={pageContext}>
      {element}
    </GatsbyPageComponentWrapper>
  )
}
