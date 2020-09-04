/* eslint-disable @typescript-eslint/unbound-method */
import { CreateSchemaCustomizationArgs } from 'gatsby'
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLFieldConfig, GraphQLFieldConfigArgumentMap } from 'graphql'

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
export const createSchemaCustomization = async ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createFieldExtension, createTypes } = actions

  // https://www.gatsbyjs.org/docs/actions/#createFieldExtension
  createFieldExtension({
    name: `defaultArgValueNumber`,
    args: {
      argName: 'String!',
      defaultValue: 'Int!',
    },
    extend(
      options: GraphQLFieldConfigArgumentMap,
      prevFieldConfig: GraphQLFieldConfig<any, any>,
    ) {
      const argName = (options.argName as unknown) as string
      if (!prevFieldConfig.args || !prevFieldConfig.args[argName]) {
        throw new Error(
          `Argument with name ${options.argName} not found on field configs`,
        )
      }

      return {
        args: {
          [argName]: {
            ...prevFieldConfig.args[argName],
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

  enum BannerStyle {
    FULL_WIDTH
    NORMAL
  }

  type ExternalLinks {
    devto: String
    canonical: String
    github: String!
  }

  # TODO: should use @nodeInterface?
  type Publisher {
    id: ID!
    url: String!
    name: String!
  }

  interface BlogPost @nodeInterface {
    id: ID!
    # Used to group translated content together
    globalBlogPostId: ID!

    title: String!
    body: String!
    excerpt(pruneLength: Int): String!
    banner: File
    bannerStyle: BannerStyle

    hasNonDefaultSocialImageUrl: Boolean!
    socialImageUrl: String!

    isDraft: Boolean!

    externalLinks: ExternalLinks!
    
    slug: String!
    langKey: LangKey!

    publisher: Publisher

    date: Date! @dateformat
    dateModified: Date! @dateformat
    tags: [String!]!
    # @IDEA If we wanted to link blog posts 
    # category: BlogPostCategory!
    category: String!
    categorySlug: String!

    tableOfContents(maxDepth: Int): JSON!

    # SEO
    description: String
    keywords: [String!]
  }

  type MdxBlogPost implements BlogPost & Node {
    id: ID!
    # Used to group translated content together
    globalBlogPostId: ID!

    title: String!
    banner: File
    bannerStyle: BannerStyle

    hasNonDefaultSocialImageUrl: Boolean!
    socialImageUrl: String!

    isDraft: Boolean!
    
    externalLinks: ExternalLinks!
    
    slug: String!
    langKey: LangKey!

    publisher: Publisher

    date: Date! @dateformat
    dateModified: Date! @dateformat
    tags: [String!]!
    # @IDEA If we wanted to link blog posts 
    # category: BlogPostCategory!
    category: String!
    categorySlug: String!

    # SEO
    description: String
    keywords: [String!]!

    tableOfContents(maxDepth: Int): JSON! @parentResolverPassthrough(field: "tableOfContents") @defaultArgValueNumber(argName: "maxDepth", defaultValue: 2)

    # not really needed to specify the default value here, since it is already done on remark resolver
    # doing it just to test the extension defaultArgValueNumber extension above
    excerpt(pruneLength: Int): String! @parentResolverPassthrough(field: "excerpt") @defaultArgValueNumber(argName: "pruneLength", defaultValue: 140)
    body: String! @parentResolverPassthrough(field: "body")
  }

  # IDEA: If we wanted to link blog posts 
  # type BlogPostCategory implements Node {
  #   name: String!
  #   slug: String!
  #   blogPosts: [BlogPost] @link(by: "category.name", from: "name")
  # }
  `

  createTypes(typeDefs)
}
