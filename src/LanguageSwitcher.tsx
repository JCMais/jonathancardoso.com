import { useEffect } from 'react'
import { useTranslation, useSSR } from 'react-i18next'
import * as moment from 'moment'

// need to import all languages we are going to support with moment
import 'moment/locale/pt-br'

import { convertLangKeyToISO } from '@shared/utils'

// @TODO Check if this is really necessary
export const LanguageSwitcher = ({ pageContext, children }) => {
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
      i18n.changeLanguage(langKeyISO)
      moment.locale(langKeyISO)
    }
  }, [pageContext.langKeySlug, currentLanguage])

  return children
}
