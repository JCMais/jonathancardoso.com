const path = require('path')

const { createPaginatedPages, pluckCategories } = require('./utils')
const { convertLangKeyFromEnum } = require('../utils')

const groupByLangKeyAndCategory = edges =>
  edges.reduce((acc, edge) => {
    acc[edge.node.langKey] = acc[edge.node.langKey] || {}
    acc[edge.node.langKey][edge.node.categorySlug] =
      acc[edge.node.langKey][edge.node.categorySlug] || []

    return {
      ...acc,
      [edge.node.langKey]: {
        ...acc[edge.node.langKey],
        [edge.node.categorySlug]: [
          ...acc[edge.node.langKey][edge.node.categorySlug],
          edge,
        ],
      },
    }
  }, {})

const createCategoryPages = (createPage, edges) => {
  const postsByLangKeyAndCategory = groupByLangKeyAndCategory(edges)

  for (const [langKey, postsByCategory] of Object.entries(postsByLangKeyAndCategory)) {
    const langKeySlug = convertLangKeyFromEnum(langKey)
    const categories = pluckCategories(Object.values(postsByCategory).flat())
    const categoriesByCategorySlug = categories.reduce(
      (acc, c) => ({
        ...acc,
        [c.categorySlug]: c,
      }),
      {},
    )

    for (const [categorySlug, postsEdges] of Object.entries(postsByCategory)) {
      // group by lang now
      createPaginatedPages(
        createPage,
        postsEdges,
        `${langKeySlug}/blog/categories/${categorySlug}`,
        path.resolve(__dirname, '../../src/templates/Categories.tsx'),
        {
          activeCategory: categoriesByCategorySlug[categorySlug],
          postsOnCategory: postsEdges.map(edge => edge.node),
          categories,
          categoriesByCategorySlug,
          langKeySlug,
          langKey,
        },
      )
    }

    createPage({
      path: `${langKeySlug}/blog/categories`,
      component: path.resolve(__dirname, '../../src/templates/Categories.tsx'),
      // We can use the values in this context in
      // our page layout component
      context: {
        categories,
        categoriesByCategorySlug,
        langKey,
        langKeySlug,
      },
    })
  }
}

module.exports = { createCategoryPages }
