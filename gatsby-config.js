/* eslint-disable global-require */

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://jonathancardoso.com/',
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
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              // see https://github.com/gatsbyjs/gatsby/pull/17154
              disableBgImageOnAlpha: true,
              quality: 70,
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
          // See https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#gatsby-remark-plugins
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
          require('remark-abbr'),
          require('./remarkPlugins/definitionLists'),
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
        background_color: '#f7f7f7',
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
    'gatsby-plugin-netlify',
    // @TODO add https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed
    // 'gatsby-plugin-offline',
  ],
}
