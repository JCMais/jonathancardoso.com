const { createBlog, createPosts, createCategoryPages } = require('./createPagesHandlers')

const createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
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
  // createTagsPages(actions.createPage, edges)
}

module.exports = {
  createPages,
}
