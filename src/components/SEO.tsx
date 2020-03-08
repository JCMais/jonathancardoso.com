import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {
  description?: string
  lang?: string
  meta?: any[]
  keywords?: string[]
  title: string
}

const emptyKeywords = []

export const SEO: React.FunctionComponent<Props> = ({
  description = null,
  lang = 'en',
  meta = [],
  keywords = emptyKeywords,
  title,
}) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          keywords
        }
      }
    }
  `)

  const keywordsFinal =
    keywords === emptyKeywords ? data.site.siteMetadata.keywords : keywords

  const metaDescription = description || data.site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywordsFinal && keywordsFinal.length > 0
            ? {
                name: `keywords`,
                content: keywordsFinal.join(`, `),
              }
            : [],
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
// }
