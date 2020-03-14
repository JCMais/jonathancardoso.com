const path = require('path')

const {
  siteMetadata: { locale },
} = require('../gatsby-config')

const convertLangKeyToEnum = langKey => langKey.toUpperCase().replace('-', '_')
const convertLangKeyFromEnum = langKey => langKey.toLowerCase().replace('_', '-')
const getLangKeyFromFilePath = (filePath, defaultLangKey = locale.defaultLangKey) => {
  const fileName = path.basename(filePath)
  const fileNamePieces = fileName.split('.')
  // example pieces with lang key: index, [lang], ext
  // otherwise it's going to contain just index, ext
  return fileNamePieces.length === 3 ? fileNamePieces[1] : defaultLangKey
}

function trim(str, c) {
  let char = c
  if (char === ']') {
    char = '\\]'
  } else if (char === '\\') {
    char = '\\\\'
  }
  return str.replace(new RegExp(`^[${char}]+|[${char}]+$`, 'g'), '')
}

module.exports = {
  convertLangKeyToEnum,
  convertLangKeyFromEnum,
  getLangKeyFromFilePath,
  trim,
}
