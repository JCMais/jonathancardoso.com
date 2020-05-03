// inspired on https://github.com/obahareth/awesome-mena-conferences-and-meetups/blob/711aee4f40e2952a5483d31820e7e0a809ef8e3a/src/components/i18n.js
//

import _i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { locale } from '@shared/config'
import { convertLangKeyToISO } from '@shared/utils'

// for all options read: https://www.i18next.com/overview/configuration-options
export const i18nConfig = {
  fallbackLng: 'en',
  ns: ['common', 'footer'],
  defaultNS: 'common',
  whitelist: Object.keys(locale.supportedLanguages).map((langKey) =>
    convertLangKeyToISO(langKey),
  ),
  interpolation: {
    // not needed for react as it escapes by default
    escapeValue: false,
  },
  // debug: process.env.NODE_ENV && process.env.NODE_ENV === 'development',
  debug: true,
  react: {
    wait: true,
  },
}

_i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)

export const i18n = _i18n
