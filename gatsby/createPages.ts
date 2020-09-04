/* eslint-disable @typescript-eslint/unbound-method */
import { GatsbyNode } from 'gatsby'

import {
  createBlog,
  createPosts,
  createCategoryPages,
  createTagsPages,
} from './createPagesHandlers'
import { GatsbyCreatePagesQuery } from './generated/graphql'

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const result = await graphql<GatsbyCreatePagesQuery>(`
    query GatsbyCreatePagesQuery {
      allBlogPost(sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            description
            date(formatString: "YYYY-MM-DD")
            hasNonDefaultSocialImageUrl
            title
            slug
            isDraft
            langKey
            category
            categorySlug
            globalBlogPostId
            tags
            body
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { edges } = result.data!.allBlogPost

  await createPosts(actions.createPage, edges)

  // if on production we need to filter only the published posts for the next pages

  const filteredEdges = edges.filter(
    ({ node }) => process.env.NODE_ENV !== 'production' || !node.isDraft,
  )

  createBlog(actions.createPage, filteredEdges)
  createCategoryPages(actions.createPage, filteredEdges)
  createTagsPages(actions.createPage, filteredEdges)
}
