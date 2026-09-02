# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (static output, no adapter) deployed to Netlify. Chosen by the user on 2026-09-01 after a research pass comparing Astro, Next.js, Eleventy, and Hugo. Replaces the Gatsby 2 + MDX 1 + Emotion 10 implementation, which is retired rather than upgraded.

## Users

- Primary: developers arriving from search, Dev.to, or social links to read one specific technical article (GraphQL, fastlane, CI/CD, React Native, Kubernetes). They want the answer, working code, and a way to trust the author.
- Secondary: recruiters, potential clients, and collaborators checking who Jonathan is, what he works on now, and how to reach him.
- Jonathan himself as the author: writes in Markdown/MDX in the repo, publishes by pushing to master.

## Product Purpose

Personal site and blog of Jonathan Cardoso Machado, a software developer since 2011 with a DevOps and developer-experience focus. Success is a reader finishing an article and either subscribing, reaching out, or returning; and a professional visitor understanding within seconds who Jonathan is and how to contact him. The site's job is "both, balanced" (user decision, 2026-09-01): home introduces Jonathan in a few lines, then the writing takes over. Contact is easy but not a pitch. No availability or "open to" status line on the site (user decision, 2026-09-01).

## Positioning

First-person, hands-on engineering writing from someone who runs the pipelines he writes about. Articles are long-form and step-by-step, with screenshots and full code. Posts list named reviewers and link to the GitHub source of the article and the Dev.to cross-post. Bilingual by design (English default, Brazilian Portuguese secondary).

## Operating Context

- Content lives in `content/blog/<YYYY-MM-DD>_<slug>/index.<lang>.mdx` with co-located `images/`. 11 published English posts from 2017 to 2020, one bilingual draft used as a component testing ground.
- Frontmatter fields in use: `date`, `title`, `description`, `category`, `tags`, `reviewers` (name + url), `externalLinks` (devto, github), `banner`, `bannerStyle`, `socialImageUrl`, `isDraft`, `dateModified`, `slug`, `publisher`.
- Prose conventions: `Figure:` / `Table:` / `Source:` caption lines after images, tables, and blockquotes; `*[ABBR]: definition` abbreviation blocks; definition lists in one draft; code fences with titles and inline code.
- Existing public URLs must survive: `/en/blog/<slug>/`, `/pt-br/...`, `/en/blog/category/<cat>/`, `/en/blog/tag/<tag>/`, `/en/`, `/en/blog/`, `/en/privacy/`. Root `/` redirects by Accept-Language, defaulting to `/en/`.
- Newsletter signups post to a Mailchimp list (form action on `dev.us10.list-manage.com`).
- Social identities: GitHub `JCMais`, Twitter/X `_jonathancardos`, StackOverflow `jonathancardoso`, LinkedIn `jonathancardoso`, Instagram `jcm_dev`. Email `me@jonathancardoso.com`.

## Capabilities and Constraints

- Keep: en + pt-BR locales and UI strings; Mailchimp newsletter form; social links; categories and tags; reviewers and external links on posts; RSS and sitemap; OG images per post.
- Drop (user decision 2026-09-01): the resume PDF (outdated), Google Analytics and the cookie notice, the Gatsby GraphQL layer, Emotion/Rebass styling, the react-spring transitions.
- Undecided: whether to add a replacement privacy-friendly analytics tool. Until decided, no tracking and no cookie banner.
- Undecided: the "about" page. It was a stub in the old site; home carries the bio for now.
- Custom remark behavior (captions, abbreviations, definition lists) must be reimplemented for MDX 3 / remark 15.
- Hosting: Netlify static publish. Node pinned via `.nvmrc`.

## Brand Commitments

- Name: Jonathan Cardoso Machado. Short mark: JCM. Domain jonathancardoso.com.
- Voice: direct, first person, practical, lightly informal ("Hey!"), one dry aside per page. No marketing copy. The full voice guide is the user-level skill `write-as-jonathan` (~/.claude/skills/write-as-jonathan/SKILL.md).
- Home intro emphasis (user, 2026-09-02): AI agents and agent frameworks first, then product engineering and platform engineering; infrastructure is part of the story, not the headline.
- Binding visual reference (user, 2026-09-01): the Linear school of product design, alongside Raycast, Amie, Craft, and Arc. Their craft level is the bar. The old Quicksand/Karma look is retired.
- Standing preference (user, 2026-09-01, refined 2026-09-02): light effects that react to the mouse are welcome on the home page only, and only in the "lights out" theme state; the regular light and dark themes are still. Article and list pages stay clean and free of distraction. Shift+F toggles lights out and restores the previous theme.
- The home is a personal page, not a product landing page: it is about Jonathan first, with the writing starting right at the fold.
- Experiment kept (user, 2026-09-02): a third theme state, "lights out", where the home is black and only the lantern reveals content. Other pages render it as plain dark.

## Evidence on Hand

- 11 real published articles with images under `content/blog/`.
- Real reviewer credits and Dev.to cross-post links in frontmatter.
- OG images are rendered at build time to `/og-images/blog/<slug>.png`; the old committed PNGs, the old logo raster, and the old Figma file were deleted (user decision, 2026-09-01). The only mark is the text "JCM" with an accent dot and `public/favicon.svg`.
- Bio facts come from the user's Obsidian vault (Work Experience & Resume, About Me one-pager, self CRM page), 2026-09-01: Staff Software Engineer at Lindy since 2023 (founding engineer of the platform), Teamflow 2021–2025, Croz 2020–2021, HelloMD 2018–2019, Feedback House 2018, Entria 2017–2018 (Gol Linhas Aéreas app), freelance 2012–2017; DigitalOcean and CircleCI tutorials; node-libcurl maintainer since 2016; from Teresina, based in Foz do Iguaçu. No testimonials, metrics, or client list are shown on the site; compensation, contract, and contact details from the vault are private and never published.

## Product Principles

- The article is the product. Every design decision serves reading long technical posts with code.
- Zero client JavaScript unless a widget genuinely needs it.
- Every existing URL keeps working. Migration is invisible to search engines and old links.
- Portuguese is a first-class citizen in routing and UI, even while translated content is sparse.
- Authoring stays Markdown in the repo, one folder per post, images beside the text.
