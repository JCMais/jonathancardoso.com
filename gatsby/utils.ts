import path from 'path'

import { locale } from '@shared/config'

export * from '@shared/utils'

export const getLangKeyFromFilePath = (
  filePath: string,
  defaultLangKey = locale.defaultLangKey,
) => {
  const fileName = path.posix.basename(filePath)
  const fileNamePieces = fileName.split('.')
  // example pieces with lang key: index, [lang], ext
  // otherwise it's going to contain just index, ext
  return fileNamePieces.length === 3 ? fileNamePieces[1] : defaultLangKey
}
