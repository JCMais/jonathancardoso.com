/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

const {
  createSchemaCustomization,
  onCreateNode,
  onCreateWebpackConfig,
  onPostBootstrap,
} = require('./gatsby')

const PAGINATION_OFFSET = 2

const pluckCategories = edges =>
  Object.values(
    edges.reduce((acc, edge) => {
      const { category, categorySlug } = edge.node.fields
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

const groupByCategory = edges =>
  edges.reduce(
    (acc, edge) => ({
      ...acc,
      [edge.node.fields.categorySlug]: [
        ...(acc[edge.node.fields.categorySlug] || []),
        edge,
      ],
    }),
    {},
  )

const createCategoryPages = (createPage, edges) => {
  const categories = pluckCategories(edges)
  const categoriesByCategorySlug = categories.reduce(
    (acc, c) => ({
      ...acc,
      [c.categorySlug]: c,
    }),
    {},
  )

  const postsByCategories = groupByCategory(edges)

  Object.keys(postsByCategories).forEach(categorySlug => {
    createPaginatedPages(
      createPage,
      postsByCategories[categorySlug],
      `/blog/categories/${categorySlug}`,
      'src/templates/Categories.tsx',
      {
        activeCategory: categoriesByCategorySlug[categorySlug],
        postsByCategory: postsByCategories[categorySlug].map(edge => edge.node),
        categories,
        categoriesByCategorySlug,
      },
    )
  })

  createPage({
    path: '/blog/categories',
    component: path.resolve('./src/templates/Categories.tsx'),
    // We can use the values in this context in
    // our page layout component
    context: {
      postsByCategories,
      categories,
      categoriesByCategorySlug,
    },
  })
}

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node

    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/templates/Post.tsx'),
      // We can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        prev,
        next,
      },
    })
  })
}

const createBlog = (createPage, edges) => {
  const categories = pluckCategories(edges)

  createPaginatedPages(createPage, edges, '/blog', 'src/templates/Blog.tsx', {
    categories,
  })
}

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
      component: path.resolve(componentPath),
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

exports.createPages = async ({ actions, graphql }) => {
  const data = await graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              category
              categorySlug
              tags
            }
            body
          }
        }
      }
    }
  `)

  if (data.errors) {
    reporter.panic(result.errors)
  }

  const { edges } = data.allMdx

  createBlog(actions.createPage, edges)
  createPosts(actions.createPage, edges)
  createCategoryPages(actions.createPage, edges)
  // createTagsPages(actions.createPage, edges)
}

exports.onCreateWebpackConfig = onCreateWebpackConfig

exports.createSchemaCustomization = createSchemaCustomization

exports.onCreateNode = onCreateNode

exports.onPostBootstrap = onPostBootstrap
