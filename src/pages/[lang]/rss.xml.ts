import rss from '@astrojs/rss'
import type { APIRoute, GetStaticPaths } from 'astro'

import { LOCALES, useTranslations, isLocale, type Locale } from '@/i18n/ui'
import { getPublishedPostsForLocale } from '@/lib/posts'

export const getStaticPaths: GetStaticPaths = () => LOCALES.map((lang) => ({ params: { lang } }))

export const GET: APIRoute = async ({ params, site }) => {
  const lang = params.lang
  if (!isLocale(lang)) return new Response(null, { status: 404 })
  const locale: Locale = lang
  const t = useTranslations(locale)
  const posts = await getPublishedPostsForLocale(locale)

  return rss({
    title: `${t('site.title')} · ${t('blog.title')}`,
    description: t('site.description'),
    site: site!,
    trailingSlash: true,
    items: posts.map((p) => ({
      title: p.entry.data.title,
      link: p.url,
      pubDate: p.entry.data.date,
      description: p.entry.data.description,
      categories: [p.entry.data.category, ...p.entry.data.tags],
    })),
    customData: `<language>${locale === 'pt-br' ? 'pt-BR' : 'en'}</language>`,
  })
}
