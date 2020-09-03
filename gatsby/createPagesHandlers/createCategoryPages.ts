import path from 'path'

import { Actions } from 'gatsby'

import { convertLangKeyFromGraphQLEnum } from '../utils'
import { GatsbyCreatePagesQuery, LangKey } from '../generated/graphql'

import { createPaginatedPages, pluckCategories } from './utils'

const groupByLangKeyAndCategory = (
  edges: GatsbyCreatePagesQuery['allBlogPost']['edges'],
) =>
  edges.reduce(
    (acc, edge) => {
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
    },
    {
      EN: {},
      PT_BR: {},
    } as {
      [langKey in LangKey]: {
        [key: string]: GatsbyCreatePagesQuery['allBlogPost']['edges']
      }
    },
  )

export const createCategoryPages = (
  createPage: Actions['createPage'],
  edges: GatsbyCreatePagesQuery['allBlogPost']['edges'],
) => {
  const postsByLangKeyAndCategory = groupByLangKeyAndCategory(edges)

  for (const [langKey, postsByCategory] of Object.entries(postsByLangKeyAndCategory)) {
    const langKeySlug = convertLangKeyFromGraphQLEnum(langKey)
    const categories = pluckCategories(Object.values(postsByCategory).flat())
    const categoriesByCategorySlug = categories.reduce(
      (acc, c) => ({
        ...acc,
        [c.categorySlug]: c,
      }),
      {} as {
        [key: string]: typeof categories[0]
      },
    )

    for (const [categorySlug, postsEdges] of Object.entries(postsByCategory)) {
      createPaginatedPages(
        createPage,
        postsEdges,
        `${langKeySlug}/blog/categories/${categorySlug}/`,
        path.resolve(__dirname, '../../src/templates/Category.tsx'),
        {
          activeCategory: categoriesByCategorySlug[categorySlug],
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
