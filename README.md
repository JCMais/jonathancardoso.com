# Gatsby.js MDX Blog Starter Project

With ideas from:
- https://github.com/erikdstock/gatsby-starter-ts-mdx
- https://github.com/rwieruch/gatsby-mdx-blog-starter-project

---
@TODO i18n:
- gatsby-plugin-i18n with react-i18next: https://github.com/angeloocana/gatsby-plugin-i18n/blob/master/packages/gatsby-starter-default-i18n/src/layouts/index.js
- https://github.com/wiziple/gatsby-plugin-intl
- gatsby-theme-localization

## Where is gatsby-plugin-typescript?
https://github.com/gatsbyjs/gatsby/pull/23547

## Frontmatter Fields
If new frontmatter fields are added, they also must be added to the following places:

- [gatsby/onCreateNode.js](./gatsby/onCreateNode.js) - Search for `blogFields`
- [gatsby/createSchemaCustomization.js](./gatsby/createSchemaCustomization.js) - Add to the type definitions of the BlogPost interface and the MdxBlogPost type.
