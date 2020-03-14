// inspired on https://github.com/obahareth/awesome-mena-conferences-and-meetups/blob/711aee4f40e2952a5483d31820e7e0a809ef8e3a/src/components/i18n.js
//

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'

const i18nConfig = {
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: true,

  interpolation: {
    // not needed for react as it escapes by default
    escapeValue: false,
  },

  react: {
    wait: true,
  },

  detection: {
    lookupFromPathIndex: 0,
    order: ['path'],
  },
}

i18n
  // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(i18nConfig)

export default i18n
