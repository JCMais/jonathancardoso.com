import { locale, siteUrl } from './config'

export function trim(str: string, c: string) {
  let char = c
  if (char === ']') {
    char = '\\]'
  } else if (char === '\\') {
    char = '\\\\'
  }
  return str.replace(new RegExp(`^[${char}]+|[${char}]+$`, 'g'), '')
}

export const convertLangKeyToGraphQLEnum = (langKey: string) =>
  langKey && langKey.toUpperCase().replace('-', '_')
export const convertLangKeyFromGraphQLEnum = (langKey: string) =>
  langKey && langKey.toLowerCase().replace('_', '-')
// ISO format is basically lower-UPPER
export const convertLangKeyToISO = (langKey: string) =>
  langKey &&
  langKey
    .toLowerCase()
    .split('-')
    .map((t, idx) => (idx ? t.toUpperCase() : t))
    .join('-')

export const getLanguageName = (langKey: string): string =>
  // @ts-expect-error
  locale.supportedLanguages[langKey] || 'Unknown'

export const getLangKeyFromPath = (
  path: string,
  // @TODO use values from gatsby-config or some other central place
  availableLangs = Object.keys(locale.supportedLanguages),
  defaultLangKey = locale.defaultLangKey,
) => {
  if (!path) return defaultLangKey

  const firstPartOfPath = trim(path, '/').split('/')[0]

  return availableLangs.includes(firstPartOfPath) ? firstPartOfPath : defaultLangKey
}

export const getSiteUrl = (path?: string) => `${siteUrl}${trim(path || '', '/')}/`
