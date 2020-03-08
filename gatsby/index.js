const { createSchemaCustomization } = require('./createSchemaCustomization')
const { onCreateNode } = require('./onCreateNode')
const { onCreateWebpackConfig } = require('./onCreateWebpackConfig')
const { onPostBootstrap } = require('./onPostBootstrap')

module.exports = {
  createSchemaCustomization,
  onCreateNode,
  onCreateWebpackConfig,
  onPostBootstrap,
}
