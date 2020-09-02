import React from 'react'
import { Helmet, HelmetProps } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import { DefaultSeoQuery } from '@r/generated/graphql'

type JSONLDData = {
  [key: string]: JSONLDData | string | string[] | undefined | null
}

type SEOProps = {
  description?: string
  lang?: string
  canonical?: string
  meta?: HelmetProps['meta']
  link?: HelmetProps['link']
  keywords?: string[]
  title: string
  jsonLd?: JSONLDData[]
}

const emptyKeywords: string[] = []

export const SEO: React.FC<SEOProps> = ({
  description = null,
  canonical,
  lang = 'en',
  meta = [],
  link = [],
  keywords = emptyKeywords,
  title,
  jsonLd = [],
}) => {
  const data = useStaticQuery<DefaultSeoQuery>(graphql`
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

  const jsonLdData = [
    {
      '@context': 'http://schema.org',
      '@type': 'Person',
      id: 'jonathancardoso',
      image: '/assets/images/jc-1.jpg',
      jobTitle: 'Software Developer and DevOps Specialist',
      email: 'mailto:me@jonathancardoso.com',
      name: 'Jonathan Cardoso Machado',
      gender: 'male',
      nationality: 'Brazil',
      url: 'https://jonathancardoso.com',
      sameAs: [
        'https://www.linkedin.com/in/jonathancardoso',
        'https://twitter.com/_jonathancardos',
        'https://github.com/JCMais',
      ],
    },
    ...jsonLd,
  ]

  const keywordsFinal =
    keywords === emptyKeywords ? data!.site!.siteMetadata!.keywords : keywords

  const linkCanonical: HelmetProps['link'] = canonical
    ? [
        {
          rel: 'canonical',
          href: canonical,
        },
      ]
    : []

  const metaDescription = description || data?.site?.siteMetadata?.description || ''

  const metaSeo: HelmetProps['meta'] = [
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
      content: data?.site?.siteMetadata?.author || '',
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(
    keywordsFinal && keywordsFinal.length > 0
      ? {
          name: `keywords`,
          content: keywordsFinal.join(`, `),
        }
      : [],
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data?.site?.siteMetadata?.title || 'Blog'}`}
      // see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet#titles-dont-appear-when-opening-in-the-background-while-using-gatsby-plugin-offline
      defer={false}
      script={[
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLdData),
        },
      ]}
      link={linkCanonical.concat(link)}
      meta={metaSeo.concat(meta)}
    />
  )
}
