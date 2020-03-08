import React from 'react'

export const Footer: React.FunctionComponent = () => (
  <>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </>
)
