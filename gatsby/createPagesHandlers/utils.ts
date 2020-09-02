import { Actions } from 'gatsby'

const PAGINATION_OFFSET = 2

type EdgesIDNode = Array<{ node: { id: string } }>
type CategoryNode = { category: string; categorySlug: string }
type EdgesCategoryNode = Array<{ node: CategoryNode }>
type EdgesTagsNode = Array<{ node: { tags: string[] } }>

export const createPaginatedPages = (
  createPage: Actions['createPage'],
  edges: EdgesIDNode,
  pathPrefix: string,
  componentPath: string,
  context: Record<string, any>,
) => {
  // @TODO CHECK THIS TO MAKE SURE THE DATA IS LOADED ON THE COMPONENT, AND NOT PASSED VIA CONTEXT
  const pages = edges.reduce<string[][]>((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET)

    if (!acc[pageIndex]) {
      acc[pageIndex] = []
    }

    acc[pageIndex].push(value.node.id)

    return acc
  }, [])

  pages.forEach((pageEntries, index) => {
    const previousPagePath = `${pathPrefix}/${index + 1}`
    const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`

    createPage({
      path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
      component: componentPath,
      context: {
        pageEntries,
        pagination: {
          pageEntries,
          currentPageIndex: index,
          nextPagePath: index === 0 ? null : nextPagePath,
          previousPagePath: index === pages.length - 1 ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
          totalCount: edges.length,
        },
        ...context,
      },
    })
  })
}

export const pluckCategories = (edges: EdgesCategoryNode) =>
  Object.values(
    edges.reduce<Record<string, CategoryNode>>((acc, edge) => {
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

export const pluckTags = (edges: EdgesTagsNode) => [
  ...new Set(
    edges.reduce<string[]>((acc, edge) => {
      const { tags } = edge.node

      return [...acc, ...tags]
    }, []),
  ),
]
