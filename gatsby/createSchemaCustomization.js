/**
 * This would be great to create separated graphql types for multiple types, example:
 *  - Blog Posts
 *  - Experiments
 *  - Etc
 *
 * Using extensions from https://github.com/rogermparent/gatsby-plugin-parent-resolvers
 *
 * See:
 *  https://www.gatsbyjs.org/docs/node-apis/#createSchemaCustomization
 *  https://www.christopherbiscardi.com/post/sourcing-data-from-multiple-locations-in-gatsby/
 *  https://www.gatsbyjs.org/docs/schema-customization/#queryable-interfaces-with-the-nodeinterface-extension
 * Inspiration taken from https://github.com/gatsbyjs/gatsby/blob/f0724e8d6e6/packages/gatsby-theme-blog-core/gatsby-node.js
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions

  // https://www.gatsbyjs.org/docs/actions/#createFieldExtension
  createFieldExtension({
    name: `defaultArgValueNumber`,
    args: {
      argName: 'String!',
      defaultValue: 'Int!',
    },
    extend(options, prevFieldConfig) {
      if (!prevFieldConfig.args[options.argName]) {
        throw new Error(
          `Argument with name ${options.argName} not found on field configs`,
        )
      }

      return {
        args: {
          [options.argName]: {
            ...prevFieldConfig.args[options.argName],
            defaultValue: options.defaultValue,
          },
        },
      }
    },
  })

  // @TODO Add author and contributors later
  const typeDefs = `
  enum LangKey {
    EN
    PT_BR
  }

  interface BlogPost @nodeInterface {
    id: ID!
    title: String!
    body: String!
    excerpt(pruneLength: Int): String!
    banner: File
    
    slug: String!
    langKey: LangKey!
    # Used to group translated content together
    globalBlogPostId: ID!

    date: Date! @dateformat
    tags: [String!]
    # @IDEA If we wanted to link blog posts 
    # category: BlogPostCategory!
    category: String!
    categorySlug: String!

    # SEO
    description: String
    keywords: [String!]
  }

  type MdxBlogPost implements BlogPost & Node {
    id: ID!
    title: String!
    banner: File
    
    slug: String!
    langKey: LangKey!
    # Used to group translated content together
    globalBlogPostId: ID!

    date: Date! @dateformat
    tags: [String!]
    # @IDEA If we wanted to link blog posts 
    # category: BlogPostCategory!
    category: String!
    categorySlug: String!

    # SEO
    description: String
    keywords: [String!]

    # not really needed to specify the default value here, since it is already done on remark resolver
    # doing it just to test the extension defaultArgValueNumber extension above
    excerpt(pruneLength: Int): String! @parentResolverPassthrough(field: "excerpt") @defaultArgValueNumber(argName: "pruneLength", defaultValue: 140)
    body: String! @parentResolverPassthrough(field: "body")
  }

  # @IDEA If we wanted to link blog posts 
  # type BlogPostCategory implements Node {
  #   name: String!
  #   slug: String!
  #   blogPosts: [BlogPost] @link(by: "category.name", from: "name")
  # }
  `

  createTypes(typeDefs)
}
