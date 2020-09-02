import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { LogoImageQuery } from '@r/generated/graphql'

/*
 * TODO: Remove this later
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export const LogoImage = () => (
  <StaticQuery<LogoImageQuery>
    query={graphql`
      query LogoImageQuery {
        logoImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    // @ts-ignore
    render={(data) => <Img fluid={data.logoImage.childImageSharp.fluid} />}
  />
)
