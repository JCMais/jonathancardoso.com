// MDX elements- see https://gatsby-mdx.netlify.com/guides/customizing-components
import React from 'react'
import YouTube from 'react-youtube'
import { Box, Text } from 'rebass'

import { BlockQuote } from './ui/BlockQuote'
import { Button } from './ui/Button'
// import { CodeBlock } from './ui/CodeBlock'
import { H1 } from './ui/H1'
import { H2 } from './ui/H2'
import { H3 } from './ui/H3'
import { H4 } from './ui/H4'
import { Link } from './ui/Link'
import { Paragraph } from './ui/Paragraph'
import { ListItem } from './ui/ListItem'
import { ListOrdered } from './ui/ListOrdered'
import { ListUnordered } from './ui/ListUnordered'

// https://mdxjs.com/table-of-components
export const MDXLayoutComponents = {
  // @TODO use this instead of gatsby-remark-prismjs and rework plugins styles
  // pre: CodeBlock,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  ul: ListUnordered,
  ol: ListOrdered,
  figcaption: (props) => (
    <Text variant="postBody" fontSize={[3]} sx={{ textAlign: 'center' }} {...props} />
  ),
  li: (props) => <ListItem variant="postBody" my={[2, 3]} {...props} />,
  p: (props) => <Paragraph variant="postBody" my={[4, 5]} {...props} />,
  blockquote: BlockQuote,
  table: (props) => (
    <Text
      as="table"
      variant="postBody"
      sx={{
        borderCollapse: 'collapse',
      }}
      {...props}
    />
  ),
  thead: (props) => <Box as="thead" {...props} />,
  tbody: (props) => <Box as="thead" {...props} />,
  tr: (props) => (
    <Box
      as="tr"
      sx={{
        borderBottom: '2px dashed transparent',
        borderBottomColor: 'gray.4',
        ':last-child': {
          borderBottom: 'none',
        },
      }}
      {...props}
    />
  ),
  td: (props) => (
    <Box
      as="td"
      py={[1]}
      px={[2]}
      sx={{
        borderRight: '2px dashed transparent',
        borderRightColor: 'gray.4',
        ':last-child': {
          borderRight: 'none',
        },
      }}
      {...props}
    />
  ),
  th: (props) => (
    <Box
      as="th"
      py={[1]}
      px={[2]}
      sx={{
        borderBottom: '2px solid transparent',
        borderRight: '2px solid transparent',
        borderBottomColor: 'gray.1',
        borderRightColor: 'gray.1',
        ':last-child': {
          borderRight: 'none',
        },
      }}
      {...props}
    />
  ),
}

export const MDXGlobalComponents = {
  Link,
  YouTube,
  Button,
}
