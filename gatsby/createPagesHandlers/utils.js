const PAGINATION_OFFSET = 2

const createPaginatedPages = (createPage, edges, pathPrefix, componentPath, context) => {
  const pages = edges.reduce((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET)

    if (!acc[pageIndex]) {
      acc[pageIndex] = []
    }

    acc[pageIndex].push(value.node.id)

    return acc
  }, [])

  pages.forEach((page, index) => {
    const previousPagePath = `${pathPrefix}/${index + 1}`
    const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`

    createPage({
      path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
      component: componentPath,
      context: {
        pagination: {
          page,
          nextPagePath: index === 0 ? null : nextPagePath,
          previousPagePath: index === pages.length - 1 ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
        },
        ...context,
      },
    })
  })
}

const pluckCategories = edges =>
  Object.values(
    edges.reduce((acc, edge) => {
      const { category, categorySlug } = edge.node
      if (acc[categorySlug]) return acc
      return {
        ...acc,
        [categorySlug]: {
          category,
          categorySlug,
        },
      }
    }, {}),
  )

module.exports = { createPaginatedPages, pluckCategories }
