import type { APIRoute, GetStaticPaths } from 'astro'

import { LOCALES, useTranslations, type Locale } from '@/i18n/ui'
import { getAllPosts, formatDate } from '@/lib/posts'
import { renderOg, type OgCard } from '@/lib/og'

// Keeps the historical /og-images/blog/<slug>.png URLs that external services already reference.
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts()
  const seen = new Set<string>()
  const paths: { params: { path: string }; props: { card: OgCard } }[] = []

  for (const p of posts) {
    // one card per slug; English wins when both locales share it
    if (seen.has(p.slug)) continue
    seen.add(p.slug)
    const t = useTranslations(p.locale)
    paths.push({
      params: { path: `blog/${p.slug}` },
      props: {
        card: {
          title: p.entry.data.title,
          kicker: 'jonathancardoso.com',
          footer: `${formatDate(p.entry.data.date, p.locale)}  ·  ${t('blog.readingTime', { n: p.readingMinutes })}`,
          chip: p.entry.data.category,
        },
      },
    })
  }

  for (const locale of LOCALES as readonly Locale[]) {
    const t = useTranslations(locale)
    paths.push({
      params: { path: `home-${locale}` },
      props: {
        card: {
          title: t('home.hello'),
          kicker: 'jonathancardoso.com',
          footer: t('home.status'),
        },
      },
    })
  }
  return paths
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg((props as { card: OgCard }).card)
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  })
}
