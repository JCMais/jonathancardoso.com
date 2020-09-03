import path from 'path'

import { Actions } from 'gatsby'

import { convertLangKeyFromGraphQLEnum } from '../utils'
import { GatsbyCreatePagesQuery } from '../generated/graphql'

import { createPaginatedPages, pluckCategories } from './utils'

type BlogPostEdges = GatsbyCreatePagesQuery['allBlogPost']['edges']
type BlogPostEdge = ArrayElement<BlogPostEdges>

export const createBlog = (createPage: Actions['createPage'], edges: BlogPostEdges) => {
  const categories = pluckCategories(edges)

  const postsByLangKey = edges.reduce<Record<string, BlogPostEdge[]>>((acc, edge) => {
    const { langKey } = edge.node

    return {
      ...acc,
      [langKey]: [...(acc[langKey] || []), edge],
    }
  }, {})

  for (const [langKey, postsEdges] of Object.entries(postsByLangKey)) {
    const langKeySlug = convertLangKeyFromGraphQLEnum(langKey)
    createPaginatedPages(
      createPage,
      postsEdges,
      `/${langKeySlug}/blog/`,
      path.resolve(__dirname, '../../src/templates/Blog.tsx'),
      {
        categories,
        langKey,
        langKeySlug,
      },
    )
  }
}
