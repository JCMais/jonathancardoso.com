/* eslint-disable @typescript-eslint/unbound-method */
import { GatsbyNode } from 'gatsby'

import {
  createBlog,
  createPosts,
  createCategoryPages,
  createTagsPages,
} from './createPagesHandlers'
import { GatsbyCreatePagesQuery } from './types/graphql'

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
            excerpt(pruneLength: 250)
            title
            slug
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

  const { edges } = result.data.allBlogPost

  createBlog(actions.createPage, edges)
  createPosts(actions.createPage, edges)
  createCategoryPages(actions.createPage, edges)
  createTagsPages(actions.createPage, edges)
}
