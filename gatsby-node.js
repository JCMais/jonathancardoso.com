/* eslint-disable import/no-extraneous-dependencies */
/**
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('ts-node').register()
require('tsconfig-paths/register')

const {
  createPages,
  createSchemaCustomization,
  onCreateNode,
  onCreatePage,
  onCreateWebpackConfig,
  onPreExtractQueries,
  onPostBootstrap,
  onPostBuild,
} = require('./gatsby/index.ts')

exports.createPages = createPages
exports.onCreateWebpackConfig = onCreateWebpackConfig
exports.createSchemaCustomization = createSchemaCustomization
exports.onCreateNode = onCreateNode
exports.onCreatePage = onCreatePage
exports.onPostBootstrap = onPostBootstrap
exports.onPreExtractQueries = onPreExtractQueries
exports.onPostBuild = onPostBuild
