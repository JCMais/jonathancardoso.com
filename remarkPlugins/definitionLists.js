const visit = require('unist-util-visit')

// @TODO If two dl are sequential, create a single dl with all dt/dd elements inside.
module.exports = (_options) => {
  const isDefinitionNode = (node) => {
    const pattern = new RegExp(/^(.+?[\r\n]+)+?:/gm)

    return (
      node.type === 'paragraph' &&
      node.children &&
      node.children.length === 1 &&
      node.children[0].type === 'text' &&
      pattern.test(node.children[0].value)
    )
  }

  return (tree) => {
    visit(tree, isDefinitionNode, (node, _index, _parent) => {
      const [definitionTermNode] = node.children
      const lines = definitionTermNode.value.split(/\r?\n/)

      const parentNode = {
        type: 'dl',
        children: [],
        data: {
          hName: 'dl',
        },
      }

      let foundPreviousDt = false
      let isInvalid = false
      for (const line of lines) {
        const startsWithColon = line.startsWith(':')

        if (!foundPreviousDt && startsWithColon) {
          isInvalid = true
          break
        }
        foundPreviousDt = foundPreviousDt || !startsWithColon

        const tag = startsWithColon ? 'dd' : 'dt'
        let content = startsWithColon ? line.slice(1) : line

        content = content && content.trim()
        if (startsWithColon && !content) {
          isInvalid = true
          break
        }

        parentNode.children = [
          ...parentNode.children,
          {
            type: tag,
            data: {
              hName: tag,
            },
            children: [
              {
                type: 'text',
                value: content,
              },
            ],
          },
        ]
      }

      if (isInvalid) {
        // eslint-disable-next-line no-console
        console.warn(
          '[remark-plugin][definition-list]: Found invalid definition list while parsing Node',
          node,
        )
      } else {
        // eslint-disable-next-line no-param-reassign
        node.children = [parentNode]
      }
    })
  }
}
