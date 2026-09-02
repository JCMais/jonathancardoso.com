import { visit } from 'unist-util-visit'

// Reproduces the remark-captions conventions used in the posts:
//   ![](img)            (image paragraph, or image followed by a newline)
//   Figure: caption     -> <figure class="figure figure-image"><img/><figcaption>caption</figcaption></figure>
//   ```code``` + "Code: caption"     -> figure around the code block
//   | table | + "Table: caption"      -> figure around the table
//   > quote  + "Source: caption"      -> figure around the blockquote
const PREFIXES = {
  Figure: (n) => n.type === 'paragraph' && n.children.every((c) => c.type === 'image' || (c.type === 'text' && !c.value.trim())),
  Code: (n) => n.type === 'code',
  Table: (n) => n.type === 'table',
  Source: (n) => n.type === 'blockquote',
}
const RE = /^(Figure|Code|Table|Source):\s*/

function figure(kind, target, captionChildren) {
  return {
    type: 'figure',
    data: { hName: 'figure', hProperties: { className: ['figure', `figure-${kind.toLowerCase()}`] } },
    children: [
      target,
      {
        type: 'figcaption',
        data: { hName: 'figcaption' },
        children: captionChildren,
      },
    ],
  }
}

export function remarkCaptions() {
  return (tree) => {
    visit(tree, (node) => {
      if (!node.children) return
      const out = []
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i]

        // Case 1: image and caption inside the same paragraph, separated by a line break
        if (child.type === 'paragraph' && child.children.length >= 2) {
          const [first, ...rest] = child.children
          const textIdx = rest.findIndex((c) => c.type === 'text' && RE.test(c.value.replace(/^\n/, '')))
          if (first.type === 'image' && textIdx !== -1) {
            const kind = rest[textIdx].value.replace(/^\n/, '').match(RE)[1]
            if (kind === 'Figure') {
              const caption = rest.slice(textIdx)
              caption[0] = { ...caption[0], value: caption[0].value.replace(/^\n/, '').replace(RE, '') }
              out.push(figure(kind, { type: 'paragraph', children: [first] }, caption))
              continue
            }
          }
        }

        // Case 2: caption is the paragraph following the target
        const prev = out[out.length - 1]
        if (prev && child.type === 'paragraph' && child.children[0]?.type === 'text') {
          const m = child.children[0].value.match(RE)
          if (m && PREFIXES[m[1]]?.(prev)) {
            const caption = [...child.children]
            caption[0] = { ...caption[0], value: caption[0].value.replace(RE, '') }
            out[out.length - 1] = figure(m[1], prev, caption)
            continue
          }
        }
        out.push(child)
      }
      node.children = out
    })
  }
}
