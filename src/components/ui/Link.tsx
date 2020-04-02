/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as RebassLink } from 'rebass'

export const Link: React.FunctionComponent<{ to: string }> = ({
  children,
  to,
  ...props
}) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <RebassLink to={to} {...props} as={GatsbyLink}>
        {children}
      </RebassLink>
    )
  }

  return (
    <RebassLink href={to} {...props}>
      {children}
    </RebassLink>
  )
}
