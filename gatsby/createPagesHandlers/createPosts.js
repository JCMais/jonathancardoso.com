const path = require('path')

const { convertLangKeyFromEnum } = require('../utils')

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node

    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.slug,
      // This component will wrap our MDX content
      component: path.resolve(__dirname, '../../src/templates/Post.tsx'),
      // We can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        langKey: node.langKey,
        langKeySlug: convertLangKeyFromEnum(node.langKey),
        prev,
        next,
      },
    })
  })
}

module.exports = { createPosts }
