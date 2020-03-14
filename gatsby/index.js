const { createPages } = require('./createPages')
const { createSchemaCustomization } = require('./createSchemaCustomization')
const { onCreateNode } = require('./onCreateNode')
const { onCreatePage } = require('./onCreatePage')
const { onCreateWebpackConfig } = require('./onCreateWebpackConfig')
const { onPostBootstrap } = require('./onPostBootstrap')

module.exports = {
  createPages,
  createSchemaCustomization,
  onCreateNode,
  onCreatePage,
  onCreateWebpackConfig,
  onPostBootstrap,
}
