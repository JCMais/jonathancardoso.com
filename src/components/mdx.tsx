// MDX elements- see https://gatsby-mdx.netlify.com/guides/customizing-components
import YouTube from 'react-youtube'

import { BlockQuote } from './ui/BlockQuote'
import { Button } from './ui/Button'
import { H1 } from './ui/H1'
import { H2 } from './ui/H2'
import { H3 } from './ui/H3'
import { H4 } from './ui/H4'
import { Link } from './ui/Link'
import { Paragraph } from './ui/Paragraph'

export const MDXLayoutComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  blockquote: BlockQuote,
}

export const MDXGlobalComponents = {
  Link,
  YouTube,
  Button,
}
