import path from 'path'
import { Actions } from 'gatsby'

import { convertLangKeyFromGraphQLEnum } from '../utils'
import { GatsbyCreatePagesQuery, LangKey } from '../generated/graphql'

import { createPaginatedPages } from './utils'

const groupByLangKeyAndTag = (edges: GatsbyCreatePagesQuery['allBlogPost']['edges']) =>
  edges.reduce((acc, edge) => {
    const { node } = edge
    let newAcc = { ...acc }
    newAcc[node.langKey] = newAcc[node.langKey] || {}

    for (const tag of node.tags) {
      newAcc[node.langKey][tag] = newAcc[node.langKey][tag] || []

      newAcc = {
        ...newAcc,
        [node.langKey]: {
          ...newAcc[node.langKey],
          [tag]: [...newAcc[node.langKey][tag], edge],
        },
      }
    }

    return newAcc
  }, {} as { [key in LangKey]: { [tag: string]: Array<GatsbyCreatePagesQuery['allBlogPost']['edges'][0]> } })

// We could have used group on allBlogPost like below:
// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#make-a-tags-index-page-tags-that-renders-a-list-of-all-tags
export const createTagsPages = (
  createPage: Actions['createPage'],
  edges: GatsbyCreatePagesQuery['allBlogPost']['edges'],
) => {
  const postsByLangKeyAndTag = groupByLangKeyAndTag(edges)
  for (const [langKey, postsByTag] of Object.entries(postsByLangKeyAndTag)) {
    const langKeySlug = convertLangKeyFromGraphQLEnum(langKey)

    const tags = Object.keys(postsByTag).reduce(
      (acc, tag) => [
        ...acc,
        {
          tag,
          langKey,
          postsCount: postsByTag[tag].length,
        },
      ],
      [] as Array<{ tag: string; langKey: string; postsCount: number }>,
    )

    for (const [tag, postsEdges] of Object.entries(postsByTag)) {
      createPaginatedPages(
        createPage,
        postsEdges,
        `${langKeySlug}/blog/tags/${tag}`,
        path.resolve(__dirname, '../../src/templates/Tag.tsx'),
        {
          tag,
          // posts: postsEdges.map((edge) => edge.node),
          langKeySlug,
          langKey,
        },
      )
    }

    createPage({
      path: `${langKeySlug}/blog/tags`,
      component: path.resolve(__dirname, '../../src/templates/Tags.tsx'),
      // We can use the values in this context in
      // our page layout component
      context: {
        tags,
        langKey,
        langKeySlug,
      },
    })
  }
}
