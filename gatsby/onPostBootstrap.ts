/* eslint-disable no-console */
import fs from 'fs'

import { GatsbyNode } from 'gatsby'
// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql, printSchema, getIntrospectionQuery } from 'graphql'

/**
 * Generate GraphQL schema.json file to be read by tslint
 * Thanks: https://gist.github.com/kkemple/6169e8dc16369b7c01ad7408fc7917a9
 */
export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = async ({ store }) => {
  try {
    const { schema } = store.getState()
    const jsonSchema = await graphql(schema, getIntrospectionQuery())
    const sdlSchema = printSchema(schema)

    fs.writeFileSync('graphql/schema.json', JSON.stringify(jsonSchema.data))
    fs.writeFileSync('graphql/schema.graphql', sdlSchema)

    console.log('\n\n[gatsby-plugin-extract-schema] Wrote schema\n') // eslint-disable-line
  } catch (error) {
    console.error(
      '\n\n[gatsby-plugin-extract-schema] Failed to write schema: ',
      error,
      '\n',
    )
  }
}
