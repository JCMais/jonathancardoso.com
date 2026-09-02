---
version: 1
slug: "src-pages-lang-index-astro"
primary_target: "src/pages/[lang]/index.astro"
related_targets: []
---

# Home surface brief

Scope: `/en/` and `/pt-br/` home. Mode: Experience first viewport (the person), then Read (the ledger).

Audience and job: developers arriving to read, recruiters and collaborators checking who Jonathan is. Job: know who he is and how to reach him in one glance, then scroll into the writing.

Action: Email / GitHub / LinkedIn / X buttons under the bio; status "Open to conversations". Newsletter after the ledger.

Content: real bio facts only (engineer since 2011, DevOps + DX focus, topics he writes about, node-libcurl on npm, English + Portuguese). No testimonials, no metrics, no client list.

Chosen direction: comp B (Changelog) with comp A's identity column. Approved comp: `.impeccable/mocks/home-b.png` (sidecar approved: true, with the steer). First viewport = identity left (headline, bio, status, buttons) + facts panel right; the year-railed timeline starts at the fold.

Memorable moment: the light follows the pointer across the hero and lights the borders of the facts panel and timeline entries. Home only; article and list pages have no pointer light.

Not to literalize from comps: invented dates, blurbs, categories and tag names in comps B/B2/B3/B4. Real frontmatter drives everything.

Implementation inventory:
| Ingredient | Medium |
| Pointer light + card border spotlight | CSS radial gradients driven by a small pointer script |
| Icons | authored inline SVG set (Icon.astro), 1.5px stroke |
| Facts panel | semantic list in a panel |
| Timeline | ordered list with year rail, panels per entry |
| OG images | satori + resvg at build |
| Wordmark | text "JCM" with accent dot; favicon.svg authored |

Unresolved: bio copy refresh ("Open to conversations", current interests) is the user's to confirm; analytics undecided (none shipped).
