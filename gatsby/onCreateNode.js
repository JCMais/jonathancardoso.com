const path = require('path')

const slugify = require('@sindresorhus/slugify')
const { createFilePath } = require('gatsby-source-filesystem')

const { trim } = require('./utils')

// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = async ({
  createContentDigest,
  createNodeId,
  node,
  getNode,
  actions,
}) => {
  const { createNode, createParentChildLink } = actions

  // We only care for Mdx nodes here.
  if (node.internal.type !== `Mdx`) {
    return
  }

  const fileNode = getNode(node.parent)
  const { fileAbsolutePath } = node
  const { sourceInstanceName } = fileNode

  // ***************************
  // * AUTOMATIC SLUG HANDLING
  // ***************************
  // We can specify on the file directly if we want to, otherwise one is going to be generated
  //  based on the relative path of the file.
  const relativePath = path.relative(
    path.resolve(__dirname, '..', 'content'),
    path.dirname(fileAbsolutePath),
  )

  // Using the source instance name (we have multiple filesystem sources)
  const pageLocation = sourceInstanceName === 'pages' ? '/' : `/${sourceInstanceName}/`

  let filePath = trim(
    createFilePath({
      node,
      getNode,
      basePath: `content/${relativePath}`, // for now all content is coming from here
      trailingSlash: false,
    }),
    '/',
  )
  // remove date from filePath
  filePath = filePath.replace(/^[0-9]{4}-[0-9]{2}-[0-9]{2}_/, '')
  const nodePath = `${pageLocation}${filePath}`
  const slug = node.frontmatter.slug
    ? `${pageLocation}${trim(node.frontmatter.slug, '/')}`
    : nodePath

  // ***************************
  // * i18n handling
  // ***************************
  // This is heavily inspired on the https://github.com/angeloocana/gatsby-plugin-i18n plugin
  // const

  // ***************************
  // End of special handling
  // ***************************

  const blogFields = {
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    slug,
    date: node.frontmatter.date || '',
    banner: node.frontmatter.banner,
    // @IDEA If we wanted to link blog posts
    // category: {
    //   name: node.frontmatter.category,
    //   slug: slugify(node.frontmatter.category),
    // },
    category: node.frontmatter.category,
    categorySlug: slugify(node.frontmatter.category),
    tags: node.frontmatter.tags || [],
    keywords: node.frontmatter.keywords || [],
  }

  // https://www.gatsbyjs.org/docs/actions/#createNode
  const mdxBlogPostId = createNodeId(`MdxBlogPost:${node.id}`)
  await createNode({
    ...blogFields,
    // Required fields.
    id: mdxBlogPostId,
    parent: node.id,
    children: [],
    internal: {
      type: `MdxBlogPost`,
      contentDigest: createContentDigest(blogFields),
      // content: JSON.stringify(fieldData),
      description: 'Mdx implementation of the BlogPost interface',
    },
  })
  createParentChildLink({ parent: node, child: getNode(mdxBlogPostId) })
}
