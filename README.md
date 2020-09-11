# https://jonathancardoso.com

With ideas from:
- https://github.com/erikdstock/gatsby-starter-ts-mdx
- https://github.com/rwieruch/gatsby-mdx-blog-starter-project

## Frontmatter Fields
If new frontmatter fields are added, they also must be added to the following places:

- [gatsby/onCreateNode.ts](./gatsby/onCreateNode.ts) - Search for `blogFields`
- [gatsby/createSchemaCustomization.ts](./gatsby/createSchemaCustomization.ts) - Add to the type definitions of the BlogPost interface and the MdxBlogPost type.

## Development

Development is as easy as running `yarn d:w`, this will basically start `gatsby develop` with `nodemon`, so that changes to the files inside `./gatsby` correctly reloads the dev server.
