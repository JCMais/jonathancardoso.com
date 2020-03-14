const path = require('path')

const { config } = require('./config')

const convertLangKeyToEnum = langKey => langKey.toUpperCase().replace('-', '_')
const convertLangKeyFromEnum = langKey => langKey.toLowerCase().replace('_', '-')
const getLangKeyFromFilePath = (filePath, defaultLangKey = config.defaultLangKey) => {
  const fileName = path.basename(filePath)
  const fileNamePieces = fileName.split('.')
  // example pieces with lang key: index, [lang], ext
  // otherwise it's going to contain just index, ext
  return fileNamePieces.length === 3 ? fileNamePieces[1] : defaultLangKey
}

function trim(s, c) {
  if (c === ']') c = '\\]'
  if (c === '\\') c = '\\\\'
  return s.replace(new RegExp('^[' + c + ']+|[' + c + ']+$', 'g'), '')
}

module.exports = {
  convertLangKeyToEnum,
  convertLangKeyFromEnum,
  getLangKeyFromFilePath,
  trim,
}
