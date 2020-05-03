/* eslint-disable global-require */
module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://jonathancardoso.dev/',
    githubRepoUrl: 'https://github.com/JCMais/jonathancardoso.com/',
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
    locale: {
      defaultLangKey: 'en',
      supportedLanguages: {
        en: 'English',
        'pt-br': 'Português do Brasil',
      },
    },
  },
  plugins: [
    'gatsby-plugin-parent-resolvers',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
        //  ignore: ['**/.tsx*'],
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content/experiments`,
    //     name: 'experiments',
    //     //  ignore: ['**/.tsx*'],
    //   },
    // },
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
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {},
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
          // @TODO Investigate using prism-react-renderer instead
          //        See https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#gatsby-remark-plugins
          //  Or use https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
          // https://mdxjs.com/guides/syntax-highlighting#build-a-codeblock-component
          // https://astexplorer.net/#/gist/192c72d2e03cb6875ec4de12f7bf0028/latest
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
              destinationDir: (f) => `downloads/${f.hash}/${f.name}`,
            },
          },
        ],
        remarkPlugins: [
          require('./remarkPlugins/definitionLists'),
          [
            require('remark-captions'),
            {
              external: {
                table: 'Table:',
                code: 'Code:',
              },

              internal: {
                blockquote: 'Source:',
                image: 'Figure:',
              },
            },
          ],
        ],
        rehypePlugins: [
          require('rehype-accessible-emojis').rehypeAccessibleEmojis,
          require('rehype-slug'),
          [
            // using this instead of gatsby-remark-autolink-headers
            require('rehype-autolink-headings'),
            {
              behavior: 'prepend',
              content: {
                type: 'element',
                tagName: 'span',
                properties: { className: ['link-icon'] },
                children: [],
              },
            },
          ],
          // [require('rehype-autolink-headings'), { behavior: 'prepend' }],
          // require('rehype-toc'),
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-emotion',
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
    'gatsby-plugin-preload-fonts',
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {
    //     test: /\.js$|\.jsx$\.ts$|\.tsx$|/,
    //     exclude: /(node_modules|.cache|public)/,
    //     stages: ['develop'],
    //     options: {
    //       emitWarning: true,
    //       failOnError: false,
    //     },
    //   },
    // },
    // @TODO add https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed
    // 'gatsby-plugin-offline',
  ],
}
