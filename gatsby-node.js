/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const {
  createPages,
  createSchemaCustomization,
  onCreateNode,
  onCreatePage,
  onCreateWebpackConfig,
  onPostBootstrap,
} = require('./gatsby')

exports.createPages = createPages
exports.onCreateWebpackConfig = onCreateWebpackConfig
exports.createSchemaCustomization = createSchemaCustomization
exports.onCreateNode = onCreateNode
exports.onCreatePage = onCreatePage
exports.onPostBootstrap = onPostBootstrap

// need this?
// https://github.com/obahareth/awesome-mena-conferences-and-meetups/blob/711aee4f40e2952a5483d31820e7e0a809ef8e3a/gatsby-node.js
// https://www.gatsbyjs.org/blog/2017-10-17-building-i18n-with-gatsby/#tip-using-the-locales-folder-with-gatsby
