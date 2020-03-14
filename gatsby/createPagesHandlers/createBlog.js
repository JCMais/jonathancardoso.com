const path = require('path')

const { createPaginatedPages, pluckCategories } = require('./utils')
const { convertLangKeyFromEnum } = require('../utils')

const createBlog = (createPage, edges) => {
  const categories = pluckCategories(edges)

  const postsByLangKey = edges.reduce((acc, edge) => {
    const { langKey } = edge.node

    return {
      ...acc,
      [langKey]: [...(acc[langKey] || []), edge],
    }
  }, {})

  for (const [langKey, edges] of Object.entries(postsByLangKey)) {
    const langKeySlug = convertLangKeyFromEnum(langKey)
    createPaginatedPages(
      createPage,
      edges,
      `/${langKeySlug}/blog`,
      path.resolve(__dirname, '../../src/templates/Blog.tsx'),
      {
        categories,
        langKey,
        langKeySlug,
      },
    )
  }
}

module.exports = { createBlog }
