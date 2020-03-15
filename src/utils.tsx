export const trim = (str: string, c: string) => {
  let char = c
  if (char === ']') {
    char = '\\]'
  } else if (char === '\\') {
    char = '\\\\'
  }
  return str.replace(new RegExp(`^[${char}]+|[${char}]+$`, 'g'), '')
}

export const getLangKeyFromPath = (
  path: string,
  availableLangs = ['en'],
  defaultLangKey = 'en',
) => {
  const firstPartOfPath = trim(path, '/').split('/')[0]

  return availableLangs.includes(firstPartOfPath) ? firstPartOfPath : defaultLangKey
}
