import path from 'path'

import { Actions } from 'gatsby'

import { convertLangKeyFromGraphQLEnum } from '../utils'
import { GatsbyCreatePagesQuery, LangKey } from '../generated/graphql'

const hasSameLangKey = (langKey: LangKey) => (
  edge: GatsbyCreatePagesQuery['allBlogPost']['edges'][0],
) => edge.node.langKey === langKey

const getPrevOrNext = (
  edges: GatsbyCreatePagesQuery['allBlogPost']['edges'],
  dir: 1 | -1,
  currIteration = 1,
): GatsbyCreatePagesQuery['allBlogPost']['edges'][0]['node'] | null => {
  const allowDraft = !process.env.NODE_ENV || process.env.NODE_ENV !== 'production'

  const index = (dir > 0 ? 0 : edges.length) + currIteration * dir

  const node = edges.length && edges[index] ? edges[index].node : null

  return !node || !node.isDraft || allowDraft
    ? node
    : getPrevOrNext(edges, dir, currIteration + 1)
}

export const createPosts = (
  createPage: Actions['createPage'],
  edges: GatsbyCreatePagesQuery['allBlogPost']['edges'],
) => {
  edges.forEach(({ node }, i) => {
    const prevEdges =
      i !== 0 ? edges.slice(0, i).filter(hasSameLangKey(node.langKey)) : []
    const nextEdges =
      i !== edges.length - 1
        ? edges.slice(i + 1).filter(hasSameLangKey(node.langKey))
        : []

    const prev = getPrevOrNext(prevEdges, -1)
    const next = getPrevOrNext(nextEdges, 1, 0)

    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.isDraft ? node.slug.replace('/blog/', '/blog/draft/') : node.slug,
      // This component will wrap our MDX content
      component: path.resolve(__dirname, '../../src/templates/Post.tsx'),
      // We can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        langKey: node.langKey,
        globalBlogPostId: node.globalBlogPostId,
        langKeySlug: convertLangKeyFromGraphQLEnum(node.langKey),
        prev: prev && {
          title: prev.title,
          slug: prev.slug,
        },
        next: next && {
          title: next.title,
          slug: next.slug,
        },
      },
    })
  })
}
