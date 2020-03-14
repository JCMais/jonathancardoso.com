/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export const Link: React.FunctionComponent<{ to: string }> = ({
  children,
  to,
  ...props
}) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} {...props}>
      {children}
    </a>
  )
}
