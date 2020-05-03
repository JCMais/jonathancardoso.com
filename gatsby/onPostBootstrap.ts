/* eslint-disable no-console,import/no-extraneous-dependencies */
import { GatsbyNode } from 'gatsby'
import { introspectionQuery, graphql, printSchema } from 'gatsby/graphql'
import write from 'write'

/**
 * Generate GraphQL schema.json file to be read by tslint
 * Thanks: https://gist.github.com/kkemple/6169e8dc16369b7c01ad7408fc7917a9
 */
export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = async ({ store }) => {
  try {
    const { schema } = store.getState()
    const jsonSchema = await graphql(schema, introspectionQuery)
    const sdlSchema = printSchema(schema)

    write.sync('graphql/schema.json', JSON.stringify(jsonSchema.data), {})
    write.sync('graphql/schema.graphql', sdlSchema, {})

    console.log('\n\n[gatsby-plugin-extract-schema] Wrote schema\n') // eslint-disable-line
  } catch (error) {
    console.error(
      '\n\n[gatsby-plugin-extract-schema] Failed to write schema: ',
      error,
      '\n',
    )
  }
}
