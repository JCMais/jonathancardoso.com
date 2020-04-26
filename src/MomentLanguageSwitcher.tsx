import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import * as moment from 'moment'
// need to import all languages we are going to support
import 'moment/locale/pt-br'

// @TODO Check if this is really necessary
export const MomentLanguageSwitcher = ({ children }) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  // could use i18n events instead https://www.i18next.com/overview/api#onlanguagechanged
  useEffect(() => {
    moment.locale(currentLanguage)
  }, [currentLanguage])

  return <>{children}</>
}
