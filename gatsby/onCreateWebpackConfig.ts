import path from 'path'

import { GatsbyNode } from 'gatsby'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '..', 'src'), 'node_modules'],
      // must also be added to tsconfig.json
      alias: {
        '@r': path.resolve(__dirname, '..', 'src/'),
        '@shared': path.resolve(__dirname, '..', 'shared/'),
      },
    },
  })
}
