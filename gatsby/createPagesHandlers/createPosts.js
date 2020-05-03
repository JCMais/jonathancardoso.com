const path = require('path')

const { convertLangKeyFromEnum } = require('../utils')

const hasSameLangKey = (langKey) => (edge) => edge.node.langKey === langKey

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const prevEdges =
      i !== 0 ? edges.slice(0, i - 1).filter(hasSameLangKey(node.langKey)) : []
    const nextEdges =
      i !== edges.length - 1
        ? edges.slice(i + 1).filter(hasSameLangKey(node.langKey))
        : []

    const prev = prevEdges.length ? prevEdges[prevEdges.length - 1].node : null
    const next = nextEdges.length ? nextEdges[0].node : null

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
