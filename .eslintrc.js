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
    'import/named': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      env: {
        node: true,
      },
      plugins: ['graphql'],
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/react',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'no-restricted-syntax': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': 'off',
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
      extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:mdx/recommended',
      ],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          modules: true,
        },
      },
      globals: {
        YouTube: true,
      },
      settings: {
        'import/resolver': {
          'custom-alias': {
            alias: { '@r': './src', '@shared': './shared' },
            extensions: ['.ts', '.tsx'],
          },
        },
        react: {
          version: 'detect',
        },
      },
      rules: {
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
      },
    },
    {
      files: ['*.tsx', '*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      plugins: ['graphql'],
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
      ],
      settings: {
        'import/resolver': {
          'custom-alias': {
            alias: { '@r': './src', '@shared': './shared' },
            extensions: ['.ts', '.tsx'],
          },
        },
        react: {
          version: 'detect',
        },
      },
      rules: {
        'import/named': 'off',
        'no-nested-ternary': 'off',
        'no-restricted-syntax': 'off',
        'import/prefer-default-export': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-pascal-case': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { ignoreRestSiblings: true, varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
      },
    },
  ],
}
