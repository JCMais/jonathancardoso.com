const languages = require('./gatsby-languages')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://jonathancardoso.dev/',
    author: 'Jonathan Cardoso Machado',
    title: 'JCM',
    description: "Jonathan Cardoso Developer's Thoughts",
    keywords: [
      'Software Developer',
      'Web Developer',
      'Back-end Developer',
      'Full-Stack Developer',
      'DevOps Specialist',
      'Consultant',
    ],
  },
  plugins: [
    'gatsby-plugin-parent-resolvers',
    // images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'srcImages',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/assets/images`,
      },
    },
    // pages / blog posts
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
        //  ignore: ['**/.tsx*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages',
        //  ignore: ['**/.tsx*'],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx'],
        // defaultLayouts: {
        //   posts: require.resolve("./src/components/posts-layout.js"),
        //   default: require.resolve("./src/components/default-page-layout.js"),
        // },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
            },
          },
          // @TODO Investigate using prism-react-renderer instead
          //        See https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#gatsby-remark-plugins
          //  Or use https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '|>',
              aliases: {},
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: f => `downloads/${f.hash}/${f.name}`,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Personal home page with some of my thoughts',
        short_name: 'JCM',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#525dce',
        display: 'standalone',
        icon: 'assets/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Code', 'Quicksand:400,700', 'Karma:400,700', 'Lato:400,700'],
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {
    //     langKeyForNull: 'any',
    //     langKeyDefault: languages.defaultLangKey,
    //     // use a different layout for each langKey (src/layouts/en.js, src/layouts/pt.js, ...)
    //     useLangKeyLayout: true,
    //     prefixDefault: false,
    //   },
    // },
    // @TODO add https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed
    'gatsby-plugin-offline',
  ],
}
