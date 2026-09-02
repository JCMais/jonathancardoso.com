// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import expressiveCode from 'astro-expressive-code'
import { unified } from '@astrojs/markdown-remark'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list'

import { remarkCodeMeta } from './src/plugins/remark-code-meta.mjs'
import { remarkInlineCodeMarker } from './src/plugins/remark-inline-code-marker.mjs'
import { remarkCaptions } from './src/plugins/remark-captions.mjs'
import { remarkAbbr } from './src/plugins/remark-abbr.mjs'

export default defineConfig({
  site: 'https://jonathancardoso.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    expressiveCode({
      themes: ['poimandres', 'github-light'],
      themeCssSelector: (theme) => `[data-theme="${theme.type}"]`,
      useDarkModeMediaQuery: false,
      useThemedScrollbars: false,
      useThemedSelectionColors: false,
      styleOverrides: {
        codeFontFamily: "'Geist Mono Variable', ui-monospace, SFMono-Regular, Menlo, monospace",
        uiFontFamily: "'Geist Variable', system-ui, sans-serif",
        codeFontSize: '0.875rem',
        codeLineHeight: '1.7',
        borderRadius: '0.75rem',
        borderColor: 'var(--line)',
        borderWidth: '1px',
        codeBackground: 'var(--code-bg)',
        codePaddingInline: '1.25rem',
        codePaddingBlock: '1rem',
        frames: {
          shadowColor: 'transparent',
          frameBoxShadowCssValue: 'none',
          editorTabBarBackground: 'var(--surface-2)',
          editorActiveTabBackground: 'var(--code-bg)',
          editorActiveTabIndicatorTopColor: 'var(--accent)',
          editorActiveTabIndicatorBottomColor: 'transparent',
          editorTabBarBorderBottomColor: 'var(--line)',
          terminalTitlebarBackground: 'var(--code-bg)',
          terminalTitlebarBorderBottomColor: 'transparent',
          terminalTitlebarDotsForeground: 'transparent',
          terminalTitlebarDotsOpacity: '0',
          terminalBackground: 'var(--code-bg)',
          tooltipSuccessBackground: 'var(--accent)',
          inlineButtonBackground: 'var(--surface-2)',
          inlineButtonBorder: 'var(--line)',
        },
      },
    }),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/draft/') && !page.includes('/privacy/') && !page.includes('/404/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', 'pt-br': 'pt-BR' },
      },
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkCodeMeta,
        remarkInlineCodeMarker,
        remarkAbbr,
        remarkCaptions,
        remarkDefinitionList,
      ],
      remarkRehype: { handlers: defListHastHandlers },
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: { className: ['heading-anchor'], ariaHidden: 'true', tabIndex: -1 },
            // empty element; the glyph is drawn in CSS so it never leaks into heading text
            content: { type: 'element', tagName: 'span', properties: { className: ['heading-anchor-glyph'] }, children: [] },
          },
        ],
      ],
    }),
  },
})
