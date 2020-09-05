// MDX elements- see https://gatsby-mdx.netlify.com/guides/customizing-components
import React from 'react'
import { Box, Text } from 'rebass'
import { MDXProviderComponentsProp } from '@mdx-js/react'

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
export const MDXLayoutComponents: MDXProviderComponentsProp = {
  // @TODO use this instead of gatsby-remark-prismjs and rework plugins styles
  // pre: CodeBlock,
  h1: (props) => (
    <H1
      mt={7}
      mb={2}
      ml={'-30px'}
      pl={'30px'}
      sx={{
        '+ *:not(h2)': {
          marginTop: 0,
        },
      }}
      {...props}
    />
  ),
  h2: (props) => (
    <H2
      mt={7}
      mb={2}
      ml={'-30px'}
      pl={'30px'}
      sx={{
        '+ *:not(h3)': {
          marginTop: 0,
        },
      }}
      {...props}
    />
  ),
  h3: (props) => (
    <H3
      mt={6}
      mb={2}
      ml={'-30px'}
      pl={'30px'}
      sx={{
        '+ *': {
          marginTop: 0,
        },
      }}
      {...props}
    />
  ),
  h4: (props) => (
    <H4
      mt={5}
      mb={2}
      ml={'-30px'}
      pl={'30px'}
      sx={{
        '+ *': {
          marginTop: 0,
        },
      }}
      {...props}
    />
  ),
  ul: ListUnordered,
  ol: ListOrdered,
  figure: (props: any) => (
    <Box
      m={[0]}
      as="figure"
      sx={{
        '+ figure': {
          my: [4, 5],
        },
      }}
      {...props}
    />
  ),
  figcaption: (props: any) => (
    <Text
      variant="postBody"
      fontSize={[3]}
      as="figcaption"
      sx={{ textAlign: 'center' }}
      {...props}
    />
  ),
  li: (props) => <ListItem variant="postBody" my={[2, 3]} {...props} />,
  p: (props) => (
    <Paragraph
      variant="postBody"
      my={[4, 5]}
      sx={{
        // https://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container/
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        '-ms-word-break': 'break-all',
        wordBreak: 'break-word',
        '-ms-hyphens': 'auto',
        '-moz-hyphens': 'auto',
        '-webkit-hyphens': 'auto',
        hyphens: 'auto',
      }}
      {...props}
    />
  ),
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
  thead: (props: any) => <Box as="thead" {...props} />,
  tbody: (props: any) => <Box as="thead" {...props} />,
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
  img: (props) => (
    <Box
      className="mdx-img-wrapper"
      maxWidth="1035px"
      ml="auto"
      mr="auto"
      sx={{ position: 'relative', textAlign: 'center' }}
    >
      <Box as="img" maxWidth={'100%'} {...props} />
    </Box>
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
  Button,
}
