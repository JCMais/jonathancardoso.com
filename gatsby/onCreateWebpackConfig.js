const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '..', 'src'), 'node_modules'],
      alias: {
        $r: path.resolve(__dirname, '..', 'src/'),
      },
    },
  })
}
