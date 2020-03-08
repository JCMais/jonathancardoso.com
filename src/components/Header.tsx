import React from 'react'

export const Header: React.FunctionComponent<{ siteTitle: string }> = ({ siteTitle }) => (
  <>
    <div>{siteTitle}</div>
  </>
)
