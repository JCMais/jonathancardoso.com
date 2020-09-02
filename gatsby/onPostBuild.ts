import { GatsbyNode } from 'gatsby'

import fs from 'fs'

export const onPostBuild: GatsbyNode['onPostBuild'] = ({ reporter }) => {
  // The gatsby-plugin-netlify by default creates the matchPath: * rewrites as 200 redirects
  //  with no option to change that, this will fix the status code for localized 404 pages
  const filePath = 'public/_redirects'
  if (!fs.existsSync(`${filePath}`)) {
    reporter.info(`${filePath} file not found - this may happen during development`)
    return
  }

  const content = fs.readFileSync(filePath, { encoding: 'utf8' })
  const regExp = /^(?<rule>\/[a-z]{2}(?:-[a-z]{2})?\/\*\s+\/[a-z]{2}(?:-[a-z]{2})?\/404\/\s+)(200)/gm

  fs.writeFileSync(filePath, content.replace(regExp, '$<rule>404'))
}
