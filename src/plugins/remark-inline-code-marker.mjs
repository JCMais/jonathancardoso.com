import { visit } from 'unist-util-visit'

// Strips the gatsby-remark-prismjs inline language marker: `ruby|>require 'x'` -> `require 'x'`
export function remarkInlineCodeMarker() {
  return (tree) => {
    visit(tree, 'inlineCode', (node) => {
      const m = node.value.match(/^[a-z0-9]+\|>(.*)$/s)
      if (m) node.value = m[1]
    })
  }
}
