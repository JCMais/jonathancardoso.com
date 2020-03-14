const { printSchema } = require('graphql')

const schemaJson = require('./graphql/schema.json')
// Based on:
//  https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
//  https://github.com/gatsbyjs/gatsby/blob/1513f352140de1352d79a070712526190a043c4c/packages/gatsby/src/utils/eslint-config.js#L1
module.exports = {
  root: true,
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
    __BASE_PATH__: true, // this will rarely, if ever, be used by consumers
  },
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        schemaJson,
        tagName: 'graphql',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint',
      plugins: ['graphql'],
      extends: ['airbnb', 'plugin:prettier/recommended'],
      rules: {
        'no-restricted-syntax': 'off',
      },
    },
    {
      files: ['*.tsx', '*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint', 'graphql'],
      extends: [
        // 'eslint:recommended',
        // 'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-restricted-syntax': 'off',
        'import/prefer-default-export': 'off',
        // gatsby requires the comp to have a default export
        // 'import/no-default-export': 'warn',
        'react/prop-types': 'off',
      },
    },
  ],
}
