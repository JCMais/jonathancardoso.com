# jonathancardoso.com

Personal site and blog. Astro 7, static output, deployed on Netlify.

## Develop

```bash
nvm use            # Node 26 (see .nvmrc)
pnpm install
pnpm dev           # http://localhost:4321
pnpm build         # writes dist/
pnpm preview       # serves dist/
```

## Content

Posts live in `content/blog/<YYYY-MM-DD>_<slug>/index.<locale>.md` with images in a sibling `images/` folder. The folder name (minus the date) is the URL slug; the file suffix is the locale (`en` or `pt-br`). A post that exists only in English is also served under `/pt-br/` with a "not translated" notice.

Frontmatter is validated by `src/content.config.ts`. Fields: `title`, `date`, `description`, `category`, `tags`, `banner`, `bannerStyle`, `reviewers`, `externalLinks` (`canonical`, `devto`), `publisher`, `isDraft`, `dateModified`, `socialImageUrl`, `slug`.

Markdown extras handled by the plugins in `src/plugins/`:

- `Figure:` / `Code:` / `Table:` / `Source:` caption lines after an image, code block, table, or quote.
- `*[ABBR]: definition` abbreviation blocks.
- Definition lists (`term` / `: definition`).
- Gatsby-era code fences (` ```yaml:title=path `, `{numberLines: true}`) are normalized for Expressive Code.

Use `.mdx` only when a post needs a component. Drafts (`isDraft: true`) build in dev under `/blog/draft/` and are excluded in production.

## Site pieces

- `src/pages/[lang]/` routes for both locales; UI strings in `src/i18n/ui.ts`.
- OG images are rendered at build time with satori from `src/lib/og.ts` to `/og-images/blog/<slug>.png`.
- RSS at `/<lang>/rss.xml`, sitemap at `/sitemap-index.xml`.
- `netlify.toml` carries the language redirects for `/` and legacy paths.

## Design

`PRODUCT.md` holds product truth. `DESIGN.md` documents the visual system. Approved comps live in `.impeccable/mocks/`.
