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
        'no-unused-vars': [
          'error',
          { ignoreRestSiblings: true, argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
      },
      overrides: [
        {
          files: ['gatsby-browser.js'],
          env: {
            browser: true,
          },
        },
      ],
    },
    {
      files: ['*.mdx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb-typescript',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:mdx/recommended',
        'plugin:mdx/overrides',
        'plugin:prettier/recommended',
      ],
      globals: {
        YouTube: true,
      },
      settings: {
        'import/resolver': {
          'custom-alias': {
            alias: { $r: './src' },
            extensions: ['.ts', '.tsx'],
          },
        },
      },
      rules: {
        // rule which requires parserServices to be generated.
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
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
        'airbnb-typescript',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-restricted-syntax': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-pascal-case': 'off',
        'no-unused-vars': [
          'error',
          { ignoreRestSiblings: true, varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { ignoreRestSiblings: true, varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
      },
    },
  ],
}
