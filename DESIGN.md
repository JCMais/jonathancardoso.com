---
name: jonathancardoso.com
description: One person, one dated ledger of writing, on a near-black hairlined ground with a single periwinkle accent.
colors:
  # Dark is the :root scene. Every key below has a light twin, redefined in full
  # under :root[data-theme='light'] (see the Colors section).
  bg: "#0f1014"
  bg-elev: "#131418"
  surface: "#16181d"
  surface-2: "#1c1e25"
  surface-3: "#23262f"
  line: "rgba(255, 255, 255, 0.08)"
  line-strong: "rgba(255, 255, 255, 0.14)"
  line-top: "rgba(255, 255, 255, 0.05)"
  text: "#ececf1"
  text-2: "#9a9da8"
  text-3: "#8b8e9a"
  accent: "#7c8cff"
  accent-strong: "#9ba7ff"
  accent-ink: "#0b0d1c"
  accent-soft: "rgba(124, 140, 255, 0.14)"
  accent-line: "rgba(124, 140, 255, 0.45)"
  glow: "rgba(124, 140, 255, 0.32)"
  glow-2: "rgba(124, 140, 255, 0.1)"
  ok: "#4ade80"
  code-bg: "#121317"
  selection: "rgba(124, 140, 255, 0.35)"
  header-bg: "rgba(15, 16, 20, 0.72)"
  # Light twin
  bg-light: "#fafafa"
  bg-elev-light: "#ffffff"
  surface-light: "#ffffff"
  surface-2-light: "#f3f3f5"
  surface-3-light: "#ebebef"
  line-light: "rgba(20, 21, 24, 0.08)"
  line-strong-light: "rgba(20, 21, 24, 0.14)"
  line-top-light: "rgba(255, 255, 255, 0.9)"
  text-light: "#141518"
  text-2-light: "#5c5f6b"
  text-3-light: "#6b6e7a"
  accent-light: "#4f5fe8"
  accent-strong-light: "#3d4ddb"
  accent-ink-light: "#ffffff"
  accent-soft-light: "rgba(79, 95, 232, 0.1)"
  accent-line-light: "rgba(79, 95, 232, 0.4)"
  glow-light: "rgba(91, 108, 255, 0.28)"
  glow-2-light: "rgba(91, 108, 255, 0.08)"
  ok-light: "#16a34a"
  code-bg-light: "#f6f6f8"
  selection-light: "rgba(79, 95, 232, 0.22)"
  header-bg-light: "rgba(250, 250, 250, 0.78)"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  section:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body-prose:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  body-ui:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  micro:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
  mono:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0"
  code:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  kbd: "4px"
  s: "6px"
  md: "10px"
  code: "12px"
  l: "14px"
  pill: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "12": "3rem"
  "14": "3.5rem"
  gutter: "1.25rem"
  header-h: "3.5rem"
  content-w: "44rem"
  page-w: "72rem"
  measure: "68ch"
components:
  button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.md}"
    padding: "0 0.875rem"
    height: "2.25rem"
  button-hover:
    backgroundColor: "{colors.surface-2}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.md}"
    padding: "0 0.875rem"
    height: "2.25rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "0 0.875rem"
    height: "2.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.surface-2}"
  button-sm:
    padding: "0 0.75rem"
    height: "2rem"
  button-icon:
    padding: "0"
    width: "2.25rem"
    height: "2.25rem"
  chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text-2}"
    typography: "{typography.micro}"
    rounded: "{rounded.s}"
    padding: "0 0.5rem"
    height: "1.5rem"
  chip-hover:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.text}"
  chip-accent:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-strong}"
  kbd:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text-2}"
    typography: "{typography.mono}"
    rounded: "{rounded.kbd}"
    padding: "0 0.3rem"
    height: "1.25rem"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.l}"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.md}"
    padding: "0 0.75rem 0 2.25rem"
    height: "2.25rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.s}"
    padding: "0 0.7rem"
    height: "2rem"
  nav-link-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
  timeline-entry:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.l}"
    padding: "1.1rem 1.25rem"
  timeline-entry-hover:
    backgroundColor: "{colors.surface-2}"
  command-palette:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.l}"
    width: "min(100% - 2rem, 36rem)"
  notice:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-2}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1rem"
---

# Design System: jonathancardoso.com

## Overview

**Creative North Star: "The Evening Ledger"**

A personal home in the Linear school: one person, one dated ledger of what he wrote. The ground is a cool near-black; everything that sits on it is a hairline panel with a one-pixel lighter top edge, as if lit from above. There is one accent, a periwinkle, and it is spent carefully: the dot beside the JCM mark, the underline under the active nav item, the rail beside the active table-of-contents entry, the focus ring, link underlines in prose, and a single filled button. On the home page only, one warm near-white lantern light (the accent stays in links and the mark) follows the pointer across the whole page: every panel, card, and button catches it on the edge facing it, brightens as it approaches, and casts a shadow away from it; the headline carries its sheen. Articles are clean and still: no light, no motion beyond hover colour, a quiet table of contents to the right.

Density is comfortable rather than tight. Type is Geist with tight negative tracking at display sizes, and Geist Mono reserved for metadata that reads like data: dates, reading times, year labels, keyboard caps, and code. The light theme is a fully designed twin, not a derived inversion: every token is redefined, the top-edge highlight becomes a near-white line, and the glow keeps its hue at a lower alpha. Code blocks switch from the Poimandres theme to GitHub Light with the same frame.

Confirmed rejections from the build: no hero-plus-card-grid landing, no eyebrow or kicker labels above headings (the approved comp carried one; the build dropped it), no hard offset shadows, no icon fonts, no system display face.

**Key Characteristics:**
- Cool near-black ground (`bg`) with three surface steps above it, all separated by 8% and 14% white hairlines
- Every raised panel carries an inset one-pixel top highlight (`line-top`); depth is tonal plus that edge, with diffuse shadows only on hover and overlays
- One periwinkle accent used as a status dot, an active indicator, a focus ring, a link underline, and one filled button
- Geist display at weight 600 and negative tracking; Geist Mono for dates, times, years, kbd, and code
- Pointer light on the whole home page only; articles are still
- Light theme as an authored twin with its own token set and its own code theme

## Colors

A monochrome cool-gray ladder with one periwinkle accent and one green, both present in both themes.

### Primary
- **Periwinkle** (`accent`, dark #7c8cff / light #4f5fe8): the header mark dot, the active nav underline, the active table-of-contents rail, the `:focus-visible` outline, the caret and form `accent-color`, the newsletter input focus border, the Expressive Code active-tab indicator, and the filled primary button. On light the hue shifts deeper and more saturated to hold contrast on white.
- **Periwinkle, lit** (`accent-strong`, dark #9ba7ff / light #3d4ddb): text-coloured uses of the accent: prose links, the open-source fact link, the reveal arrows on timeline entries and term cards, the icon of the selected command-palette row, the 404 code, the notice icon. In dark it is lighter than the base accent; in light it is darker. Both directions increase contrast against the ground.
- **Accent ink** (`accent-ink`, dark #0b0d1c / light #ffffff): text on the filled primary button.
- **Accent soft** (`accent-soft`, 14% / 10% alpha periwinkle): the halo ring around the mark dot (3px, growing to 5px on hover), the newsletter input focus ring (3px), and the `chip-accent` fill used on the Draft chip.
- **Accent line** (`accent-line`, 45% / 40% alpha periwinkle): the border colour of the accent chip and the pointer-driven edge highlight on every lit element (`[data-spot]`) on the home.
- **Glow** (`glow`, `glow-2`): the two radial gradients of the hero light (32% and 10% alpha in dark; 28% and 8% in light, from a slightly bluer base). `glow-2` also fills the hover wash inside lit timeline entries.

### Secondary
- **Open green** (`ok`, dark #4ade80 / light #16a34a): the pulsing availability dot beside "Open to conversations". It is the only green and appears only there.

### Neutral
- **Ground** (`bg`): the page and the newsletter input field, which sits sunk into the ground rather than raised.
- **Ground, elevated** (`bg-elev`): the footer band, one step above the ground.
- **Surface** (`surface`): panels, buttons, timeline entries, the search field, the language switch, the command palette box, the notice, the post-nav cards, image backgrounds.
- **Surface 2** (`surface-2`): hover state of surfaces, chip fill, kbd fill, inline code fill, the command palette footer, the code-block tab bar.
- **Surface 3** (`surface-3`): the pressed and selected step: the active language option, the selected command-palette row, chip hover, and the scrollbar thumb.
- **Hairline** (`line`, 8% white / 8% ink): default border on every panel, the header bottom edge, prose `h2` top rules, table row rules, blockquote rules, image borders, the timeline year line.
- **Hairline, strong** (`line-strong`, 14%): borders on the default button, the command palette box, the newsletter input, kbd caps, the skip link; hover border on panels; the underline under text links that are not prose.
- **Top edge** (`line-top`, 5% white / 90% white): the inset one-pixel highlight on the top of every raised surface.
- **Text** (`text`): headings, body prose, values, button labels.
- **Text 2** (`text-2`): secondary copy: the lead, excerpts, nav links, labels, meta, table headers, blockquotes, footer.
- **Text 3** (`text-3`): tertiary: icons beside labels, placeholders, list markers, counts, group titles.
- **Code ground** (`code-bg`): the code block body and the active tab.
- **Header ground** (`header-bg`): the translucent sticky header, blurred and saturated behind.

### Named Rules
**The One Accent Rule.** Periwinkle marks state and one action: a dot, an underline, a rail, a ring, a link, one filled button. It never fills a panel and never colours a heading.

**The Twin Rule.** The light theme is authored, not inverted. Every token is redefined under `:root[data-theme='light']`, including the top-edge highlight, the glow base, the selection colour, and the code theme. Adding a token means adding it twice.

**The Surface Ladder Rule.** Rest is `surface`, hover is `surface-2`, pressed or selected is `surface-3`. No component skips a rung.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Geist Variable (same stack)
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SFMono-Regular, Menlo, monospace)

**Character:** One family for everything readable, set tight at display size and loosened to normal for body. Geist is loaded through `@fontsource-variable` and rendered with `ss01` and `cv11` on. Mono is not decorative; it appears only where the content is data.

### Hierarchy
- **Display** (600, `clamp(2.6rem, 6vw, 4.5rem)`, 1.02, -0.035em): the home greeting only. Balanced wrapping.
- **Headline** (600, `clamp(1.9rem, 4vw, 2.75rem)`, 1.1, -0.03em): article titles and the 404 title.
- **Title** (600, `clamp(1.75rem, 3vw, 2.25rem)`, 1.2, -0.025em): list-page headings (`PageHeading`).
- **Section** (600, 1.5rem, 1.2, -0.02em): "Writing" on the home, and prose `h2` with a hairline rule above and 1.2em of padding. Prose `h3` is 1.1875rem, `h4` is 1rem; all headings default to 600, 1.2, -0.02em, `text-wrap: balance`.
- **Lead** (400, `clamp(1.0625rem, 1.5vw, 1.25rem)`, 1.55, `text-2`): the home bio, max 44ch.
- **Body, prose** (400, 1.0625rem, 1.7): article text, measure 68ch, `overflow-wrap: anywhere`. Newsletter title is 1.125rem; timeline entry titles are 1.0625rem at 500 and -0.01em.
- **Body, UI** (400, 0.9375rem): buttons, nav, values, excerpts, notices, command-palette rows.
- **Small** (400, 0.875rem): footer, crumb, reviewers, search field, small buttons.
- **Label** (500, 0.8125rem, +0.01em): section titles, fact labels, TOC entries, meta, counts, table headers.
- **Micro** (500, 0.75rem): chips, language options, group titles, post-nav labels, fine print. Kbd caps are 0.6875rem.
- **Mono** (400, 0.75rem to 0.875rem, tabular numerals): dates, reading time, year labels, palette dates, the 404 code, inline code at 0.875em. Code blocks are 0.875rem at 1.7.

### Named Rules
**The Mono Is Data Rule.** Geist Mono is used for dates, durations, years, keyboard caps, and code. Never for labels, headings, or eyebrows.

**The Tighter As It Grows Rule.** Tracking scales with size: -0.035em at display, -0.03em at headline, -0.025em at title, -0.02em at section, -0.01em at entry titles, normal at body.

## Layout

Two container widths. `.wrap` is `min(100% - 2.5rem, 72rem)`, used by the header, home, lists, and footer. `.wrap-content` is `min(100% - 2.5rem, 44rem)`, used by article headers, article bodies, the 404 page, and the post footer. Wide banners use 56rem. The gutter is therefore 1.25rem per side at every width.

The sticky header is 3.5rem tall, a three-column grid (mark, nav, tools) that collapses to two columns under 760px, hiding the nav and reducing search to an icon button. Content below scrolls under a blurred header; `scroll-padding-top` and heading `scroll-margin-top` are `header-h + 1.5rem`.

The home hero is top-anchored and short, padded 4.5rem above and 3rem below (3rem both under 900px) so the first ledger entries sit inside a 900px viewport, with a two-column grid of `minmax(0, 1.15fr) minmax(18rem, 0.85fr)` and a 4rem column gap. Under 900px it stacks. The facts panel is capped at 24rem and right-aligned; the Writing section follows 1.5rem below.

The timeline is a `4.5rem 1fr` grid per year: a sticky mono year label and a fading 1px vertical line on the left, entries 0.75rem apart on the right, 2rem of padding below each year. Under 640px the rail turns horizontal, a label followed by a rightward-fading rule.

Articles are a single 44rem column. On viewports of 1240px and above a 15rem table of contents is absolutely positioned at `50% + 22rem + 3rem` and sticks below the header. The post footer stacks tags, actions, a two-column older/newer nav (one column under 600px), and the newsletter.

Spacing rhythm is quarter-rem based: 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5rem. Component internals use the small end (chips 0.5rem, buttons 0.875rem, entries 1.1rem by 1.25rem, panels 1.5rem by 1.75rem); page sections use the large end (heading blocks 3rem top, post head 2.5rem, hero 4.5rem top, main bottom 5rem).

Breakpoints as used: 1240 (TOC appears), 900 (hero stacks; heading anchors move inline), 760 (nav hides), 720 (newsletter stacks), 640 (timeline rail horizontal; footer and page heading stack), 600 (post nav single column), 480 (GitHub and LinkedIn buttons drop to icon squares, the "X / Twitter" button keeps its label; facts single column).

## Elevation & Depth

Depth is tonal first and edge-lit second. Each layer is a step up the surface ladder with a hairline border, and every raised surface carries `inset 0 1px 0 var(--line-top)`, a one-pixel highlight on its top edge. Diffuse drop shadows exist but are reserved: `shadow-1` appears at rest only on `.panel` (the facts panel, the newsletter) and on hover of timeline entries; `shadow-2` appears only on the command palette. Nothing at rest in an article casts a shadow; code frames explicitly set their shadow to none.

### Shadow Vocabulary
- **Top edge** (`box-shadow: inset 0 1px 0 var(--line-top)`): on buttons, the search field, language switch, theme button, panels, timeline entries, term cards, post-nav cards, code frames. The signature of the world.
- **Shadow 1** (`0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -12px rgba(0,0,0,0.6)`; light `0 1px 2px rgba(20,21,24,0.06), 0 8px 24px -12px rgba(20,21,24,0.16)`): panels at rest, entries on hover.
- **Shadow 2** (`0 2px 6px rgba(0,0,0,0.45), 0 24px 48px -16px rgba(0,0,0,0.7)`; light `0 2px 6px rgba(20,21,24,0.08), 0 24px 48px -16px rgba(20,21,24,0.22)`): the command palette only.
- **Primary button** (`inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 2px rgba(0,0,0,0.3)`): a brighter top edge and a tight drop under the one filled button.
- **Rings** (`0 0 0 3px`): the accent-soft ring on the mark dot and the focused input; the green ring on the status dot, pulsing from 3px at 22% to 6px at 8% over 2.4s.

Backdrops: the header is `saturate(160%) blur(14px)` over `header-bg`; the palette backdrop is `rgba(8, 9, 12, 0.55)` (light `rgba(20, 21, 24, 0.28)`) with a 6px blur.

### Named Rules
**The Lit Edge Rule.** A surface is raised by a hairline border and a one-pixel lighter top edge, never by a drop shadow alone.

**The Shadow On Approach Rule.** Drop shadows appear on overlays and on hover. Article surfaces cast none.

## Shapes

Softly rounded rectangles with a radius that grows with the box. 4px for kbd caps, 6px for chips, nav links, inline code, crumbs, and the focus outline; 7px for the inner language option; 10px for buttons, inputs, the search field, notices, term cards, and prose images; 12px for code frames; 14px for panels, timeline entries, post-nav cards, the command palette, and banners; a 999px pill only for the scrollbar thumb. Dots are circles: the 0.5rem mark and status dots, the 12px OG dot. Borders are always 1px. The favicon is the same language: a 16-unit-radius square on the ground, a 12% white hairline inset, a J stroke in `text`, and a periwinkle dot.

Icons come from one system (`Icon.astro`): a 24-unit grid, 1.5px stroke, round caps and joins, Lucide conventions, sized 12 to 16px inline. Glyph icons and icon fonts are not used.

## Components

### Buttons
Quiet, edge-lit, and fast. All variants share height 2.25rem, 0.875rem horizontal padding, 10px radius, 0.9375rem at weight 500, 0.5rem gap, 1rem icons, and 140ms `ease-out` transitions on background, border, transform, and shadow. Active presses `translateY(1px)`.
- **Shape:** softly rounded (10px)
- **Default** (`.btn`): `surface` fill, `line-strong` border, top-edge highlight. Hover to `surface-2`. Used for Email, GitHub, LinkedIn, X, "All posts", the 404 "Writing", pagination.
- **Primary** (`.btn-primary`): `accent` fill, `accent-ink` text, transparent border, brighter inset edge and a 1px drop. Hover to `accent-strong`. Used once per page at most: the newsletter submit and the 404 home button.
- **Ghost** (`.btn-ghost`): transparent, no border, no shadow; hover `surface-2`. Used for RSS, "Edit on GitHub", "Discuss on Dev.to".
- **Small** (`.btn-sm`): 2rem tall, 0.75rem padding, 0.875rem text. **Icon** (`.btn-icon`): 2.25rem square. GitHub and LinkedIn drop their labels and become 2.25rem squares under 480px; the "X / Twitter" button keeps its label.

### Chips
- **Style:** 1.5rem tall, 0.5rem padding, 6px radius, `surface-2` fill, `line` border, `text-2` at 0.75rem weight 500.
- **State:** as links, hover lifts to `text`, `line-strong`, `surface-3`. `chip-accent` (Draft) uses `accent-soft` fill, `accent-line` border, `accent-strong` text, 1.25rem tall at 0.6875rem inside timeline entries.

### Kbd
1.25rem tall, 4px radius, `surface-2` fill, `line-strong` border, Geist Mono at 0.6875rem in `text-2`. Used in the header search hint (⌘ K, swapped to Ctrl off-Mac) and the palette footer.

### Cards / Containers
- **Panel** (`.panel`): `surface`, `line` border, 14px radius, top edge plus `shadow-1`. The facts panel is a lit element on the home (see Pointer Light); the newsletter uses it with a `1.1fr 1fr` grid and 1.5rem by 1.75rem padding.
- **Timeline entry**: `surface`, `line` border, 14px radius, top edge, padding 1.1rem by 1.25rem, column gap 0.75rem. Hover: `line-strong`, `surface-2`, `translateY(-1px)`, `shadow-1`, and a periwinkle arrow sliding in from -4px beside the title, all at 240ms. The whole card is the link (`::after` covers it); tags sit above it. On the home every entry is a lit element (see Pointer Light).
- **Term card**: 10px radius, 0.8rem by 1rem padding, `surface` and `line`, hover `surface-2` and `line-strong`, arrow reveal at 140ms. Grid of `minmax(16rem, 1fr)`.
- **Post nav card**: 14px radius, 0.9rem by 1rem padding, same hover as term cards; the "newer" card is right-aligned.
- **Notice**: 10px radius, 0.875rem by 1rem padding, `surface`, `line`, `text-2`, an `accent-strong` icon, links underlined in `line-strong`.

### Inputs / Fields
- **Style:** 2.25rem tall, 10px radius, `bg` fill (sunk into the ground), `line-strong` border, 0.9375rem, 2.25rem left padding for a `text-3` mail icon, `text-3` placeholder.
- **Focus:** border to `accent` and a 3px `accent-soft` ring, 140ms.
- **Error:** `:user-invalid` border turns red (#f87171, a one-off, not a token).
- **Command palette input:** borderless, transparent, 1rem, inside a 3.25rem head with a hairline below.

### Navigation
- **Header:** sticky, 3.5rem, `header-bg` with `saturate(160%) blur(14px)`, hairline bottom. The mark is "JCM" at 1.0625rem weight 600 -0.02em with a 0.5rem periwinkle dot and a 3px `accent-soft` ring that grows to 5px on hover (240ms).
- **Nav links:** 2rem tall, 0.7rem padding, 6px radius, 0.9375rem `text-2`; hover `text` on `surface-2`; active is `text` with a 2px accent bar 0.72rem below, inset 0.7rem from each side.
- **Search field:** 2rem, 10px radius, `surface`, `line`, top edge, 0.875rem `text-2`, kbd hint. Hover to `text`, `line-strong`, `surface-2`.
- **Language switch:** a 2rem, 10px pill container with 0.2rem padding; options are 7px radius, 0.75rem 500 +0.02em; the active one is `surface-3` with a top edge.
- **Theme button:** 2rem square, sun and moon crossfade (opacity 240ms, transform 480ms, rotate ±90° and scale 0.6 when hidden).
- **Table of contents:** 15rem, 0.8125rem, a `line` left rule; items 0.28rem by 0.85rem, `text-2`, depth-3 indented to 1.6rem at 0.78rem; active is `text` with an `accent` left rule, driven by an IntersectionObserver with `-80px 0px -70%` margins.
- **Footer:** `bg-elev` band, hairline top, 0.875rem `text-2`, links as 1.9rem 6px-radius pills that hover to `text` on `surface-2`.
- **Mobile:** nav hides under 760px; search and language remain; the command palette carries the pages.

### Command Palette (signature)
A native `<dialog>` opened by ⌘K, Ctrl+K, or `/`, centred 18vh from the top, `min(100% - 2rem, 36rem)` wide, `surface` with a `line-strong` border, 14px radius, top edge and `shadow-2`, entering over 240ms from `translateY(-6px) scale(0.985)`. Rows are 2.4rem, 6px radius, 0.9375rem, with `text-2` icons and mono dates in `text-3`; the selected row is `surface-3` with an `accent-strong` icon. Groups are titled in 0.75rem `text-3`. The footer is `surface-2` with kbd hints. Backdrop is blurred and dimmed.

### Lights Out (third theme state, `data-theme="noir"`)
Dark tokens plus a fixed pitch-black sheet (`.blackout`, `#000`, z 35) over the home only. The sheet is masked by a radial gradient centered on the lantern (`--mx`/`--my` on `<html>`): fully open to 42% of `--hole`, 50% dark at 68%, 92% at 88%, solid black at `--hole` (460px, breathing to 490px over 5.2s via a registered `@property`; static under reduced motion; 760px on coarse pointers). Because it is a mask, everything underneath keeps reacting to the light. The beam warms and tightens (`rgba(255,214,140,.42)`, 520px). The header keeps a solid black ground with nav, mark, search, and language at 28% opacity until hovered; the footer sits at 35%. The toggle cycles light, dark, lights out and shows an amber lamp glyph in this state; Shift+F flips lights out on and off and restores the previous theme (`theme-prev` in localStorage) when turning it off. Off the home, the state renders as plain dark.

### Pointer Light (signature, home only, lights-out mode only)
Exists only while `data-theme="noir"`; in light and dark the home is still (the `.page-light` layer is `display: none` and every lit-element rule is scoped to `:root[data-theme='noir']`). Enabled only on `(hover: hover) and (pointer: fine)` and not under reduced motion. One follower eases toward the pointer at 0.12 per frame and drives a fixed, full-viewport `.page-light` layer behind the page (a warm 620px beam `rgba(255,226,170,.34)` fading at 62% and a 1400px halo at .09 fading at 72%; amber `rgba(255,196,96,.3)` on the light theme) at viewport coordinates `--mx`/`--my`. On every frame each lit element (`[data-spot]`: the facts panel, the hero buttons, every timeline entry, the newsletter panel; `[data-shine]`: the display headline) receives the light in its own coordinates (`--sx`/`--sy`), the unit direction from the light to its center (`--dx`/`--dy`), and a proximity `--near` from 0 to 1 that reaches 0 at 720px from its edge. The CSS turns those into physics: a masked 1px warm edge highlight (`rgba(255,236,200,.85)` into .2, 460px) whose opacity runs from 0.35 to 1 with `--near`; a warm wash inside the surface at up to 0.9; the surface itself mixed toward white by up to 9% (toward a pale amber by 6% in light); and a cast shadow offset `--dx`/`--dy` by up to 40px, blurred 20 to 50px, at up to 0.9 black (0.32 in light). The headline is clipped to a radial gradient from a warm white `#fff1d6` through a 45% mix into `text` (amber-led in light) centered on the light, with a text shadow thrown the same way. Scroll and resize re-run the pass so the light stays correct while the page moves.

### Code Blocks
Expressive Code with Poimandres in dark and GitHub Light in light, selected by `[data-theme]`. Geist Mono at 0.875rem and 1.7, 12px radius, `line` border, `code-bg` body, 1rem by 1.25rem padding, `surface-2` tab bar with an `accent` top indicator on the active tab, no frame shadow, a top-edge highlight from the prose styles. Inline code is 0.875em on `surface-2` with a `line` border and 6px radius.

### OG Card
1200 by 630, the same world in hard values: `#0f1014` ground, a `#16181d` panel with a 24px radius and a 10% white hairline, a periwinkle glow at top-left, a 12px periwinkle dot beside "JCM" at 26px/600, a mono kicker and footer in `#9a9da8`, a 500 to 600 Geist title from 68px down to 44px by length, and an optional accent chip.

## Do's and Don'ts

### Do:
- **Do** raise a surface with a `line` border and `inset 0 1px 0 var(--line-top)`; step hover to `surface-2` and pressed to `surface-3`.
- **Do** define every new colour token twice, once on `:root` and once under `:root[data-theme='light']`.
- **Do** set dates, durations, years, and keyboard caps in Geist Mono with tabular numerals via `.mono` or `.tabular`.
- **Do** use `--t-fast` (140ms) with `--ease-out` for colour and border changes, `--t-base` (240ms) for transforms and reveals, `--t-slow` (480ms) for the theme icon and the hero light.
- **Do** keep the accent to indicators and one filled button per page.
- **Do** use `.wrap` (72rem) for lists and the home and `.wrap-content` (44rem) for anything read.
- **Do** draw icons through `Icon.astro` on the 24-unit, 1.5px-stroke grid at 12 to 16px.
- **Do** honour `prefers-reduced-motion`: the global rule zeroes every animation and transition, and the pointer light does not initialise.

### Don't:
- **Don't** put the pointer light or lit-element physics on any page but the home. Articles and list pages are still.
- **Don't** add drop shadows to surfaces at rest inside an article; `shadow-1` is for panels and hover, `shadow-2` for the palette.
- **Don't** add an eyebrow or kicker above a heading; the comp's uppercase mono eyebrow was dropped in the build.
- **Don't** use Geist Mono for labels, headings, or nav.
- **Don't** fill a panel, chip, or heading with the accent; `chip-accent` at 14% alpha is the ceiling for accent fills.
- **Don't** introduce a second accent hue. The green `ok` is the availability dot and nothing else.
- **Don't** hard-code a colour outside the OG renderer; use the tokens so the light twin stays whole.
