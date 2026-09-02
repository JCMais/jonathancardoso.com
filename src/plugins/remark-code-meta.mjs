import { visit } from 'unist-util-visit'

// Normalizes the Gatsby-era fence syntax into Expressive Code meta:
//   ```yaml:title=~/path/file.yml   ->  ```yaml title="~/path/file.yml"
//   ```typescript{numberLines: true} ->  ```typescript showLineNumbers
// Also maps languages Shiki does not ship.
const LANG_ALIASES = {
  flow: 'ts',
  javascript: 'js',
  typescript: 'ts',
  Dockerfile: 'docker',
  dockerfile: 'docker',
  gitignore: 'txt',
}

export function remarkCodeMeta() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (!node.lang) return
      let lang = node.lang
      let rest = node.meta ? ` ${node.meta}` : ''
      const meta = []

      // language may carry a `{...}` suffix that remark split across lang/meta
      const brace = lang.indexOf('{')
      if (brace !== -1) {
        rest = lang.slice(brace) + rest
        lang = lang.slice(0, brace)
      }

      const titleMatch = lang.match(/^([A-Za-z0-9_+#-]+):title=(.+)$/)
      if (titleMatch) {
        lang = titleMatch[1]
        const title = titleMatch[2].replace(/⁓/g, '~').replace(/"/g, '')
        meta.push(`title="${title}"`)
      }

      if (/numberLines/.test(rest)) meta.push('showLineNumbers')
      const keep = rest.replace(/\{[^}]*\}/g, '').trim()
      if (keep) meta.push(keep)

      node.lang = LANG_ALIASES[lang] ?? lang
      node.meta = meta.length ? meta.join(' ') : null
    })
  }
}
