import { getCollection, type CollectionEntry } from 'astro:content'
import slugify from '@sindresorhus/slugify'
import readingTime from 'reading-time'

import { DEFAULT_LOCALE, isLocale, type Locale } from '@/i18n/ui'

export type BlogEntry = CollectionEntry<'blog'>

export const POSTS_PER_PAGE = 6

export interface Post {
  entry: BlogEntry
  /** Locale of this file (from index.<locale>.md) */
  locale: Locale
  /** Locale this page is rendered for; differs from `locale` when falling back to English */
  displayLocale: Locale
  /** Shared across translations, derived from the folder name */
  key: string
  slug: string
  url: string
  isDraft: boolean
  isFallback: boolean
  categorySlug: string
  tagSlugs: string[]
  readingMinutes: number
  /** Frontmatter description, or the first paragraph of the body */
  excerpt: string
  /** Locales this post is available in (real files, not fallbacks) */
  availableLocales: Locale[]
}

export function excerptFromBody(body: string, max = 260): string {
  const paragraphs = body
    .replace(/^---[\s\S]*?---/, '')
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p && !/^(<!--|!\[|#|```|\*\[|<[a-zA-Z]|import |export )/.test(p))
  const first = paragraphs[0] ?? ''
  const text = first
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  if (text.length <= max) return text
  // prefer ending on a full sentence; fall back to a word boundary with an ellipsis
  const window = text.slice(0, max + 40)
  const ends = [...window.matchAll(/[.!?](?=\s|$)/g)].map((m) => m.index! + 1).filter((i) => i >= 60)
  if (ends.length) return window.slice(0, ends[ends.length - 1]).trim()
  const cut = text.slice(0, max)
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), 80)).replace(/[,;:.]$/, '')}…`
}

const ID_RE = /^(?<dir>(?<date>\d{4}-\d{2}-\d{2})_(?<name>[^/]+))\/index\.(?<locale>[a-z]{2}(?:-[a-z]{2})?)$/

export function parseId(id: string) {
  const m = id.match(ID_RE)
  if (!m?.groups) throw new Error(`Unexpected blog entry id: ${id}`)
  const { dir, date, name, locale } = m.groups
  if (!isLocale(locale)) throw new Error(`Unsupported locale "${locale}" in ${id}`)
  return { dir, date, name, locale }
}

export function postUrl(locale: Locale, slug: string, isDraft: boolean) {
  return `/${locale}/blog/${isDraft ? 'draft/' : ''}${slug}/`
}

export function blogUrl(locale: Locale, page = 1) {
  return page > 1 ? `/${locale}/blog/${page - 1}/` : `/${locale}/blog/`
}

export function categoryUrl(locale: Locale, categorySlug: string, page = 1) {
  const base = `/${locale}/blog/categories/${categorySlug}/`
  return page > 1 ? `${base}${page - 1}/` : base
}

export function categoriesUrl(locale: Locale) {
  return `/${locale}/blog/categories/`
}

export function tagUrl(locale: Locale, tagSlug: string) {
  return `/${locale}/blog/tags/${tagSlug}/`
}

export function tagsUrl(locale: Locale) {
  return `/${locale}/blog/tags/`
}

export function tagSlug(tag: string) {
  // keep dots (node.js) to preserve the historical /tags/node.js/ URL
  return slugify(tag, { preserveCharacters: ['.'] })
}

const isProd = import.meta.env.PROD

let cache: Promise<Post[]> | null = null

/** Every real (non-fallback) post, in every locale, newest first. Drafts excluded in production. */
export async function getAllPosts(): Promise<Post[]> {
  if (cache) return cache
  cache = (async () => {
    const entries = await getCollection('blog')
    const byKey = new Map<string, Locale[]>()
    for (const e of entries) {
      const { dir, locale } = parseId(e.id)
      byKey.set(dir, [...(byKey.get(dir) ?? []), locale])
    }
    const posts: Post[] = entries
      .map((entry) => {
        const { dir, name, locale } = parseId(entry.id)
        const isDraft = entry.data.isDraft
        const slug = entry.data.slug ? slugify(entry.data.slug) : name
        return {
          entry,
          locale,
          displayLocale: locale,
          key: dir,
          slug,
          url: postUrl(locale, slug, isDraft),
          isDraft,
          isFallback: false,
          categorySlug: slugify(entry.data.category),
          tagSlugs: entry.data.tags.map(tagSlug),
          readingMinutes: Math.max(1, Math.round(readingTime(entry.body ?? '').minutes)),
          excerpt: entry.data.description?.trim() || excerptFromBody(entry.body ?? ''),
          availableLocales: byKey.get(dir) ?? [locale],
        }
      })
      .filter((p) => !(isProd && p.isDraft))
      .sort((a, b) => b.entry.data.date.getTime() - a.entry.data.date.getTime())
    return posts
  })()
  return cache
}

/**
 * Posts to show for a locale: real translations first, otherwise the English
 * version marked as a fallback so the page can say so.
 */
export async function getPostsForLocale(locale: Locale, { includeFallback = true } = {}) {
  const all = await getAllPosts()
  const own = all.filter((p) => p.locale === locale)
  if (locale === DEFAULT_LOCALE || !includeFallback) return own
  const ownKeys = new Set(own.map((p) => p.key))
  const fallbacks = all
    .filter((p) => p.locale === DEFAULT_LOCALE && !ownKeys.has(p.key))
    .map<Post>((p) => ({
      ...p,
      displayLocale: locale,
      isFallback: true,
      url: postUrl(locale, p.slug, p.isDraft),
    }))
  return [...own, ...fallbacks].sort(
    (a, b) => b.entry.data.date.getTime() - a.entry.data.date.getTime(),
  )
}

export async function getPublishedPostsForLocale(locale: Locale) {
  return (await getPostsForLocale(locale)).filter((p) => !p.isDraft)
}

export function paginate<T>(items: T[], perPage = POSTS_PER_PAGE) {
  const pages: T[][] = []
  for (let i = 0; i < items.length; i += perPage) pages.push(items.slice(i, i + perPage))
  return pages.length ? pages : [[]]
}

export interface Term {
  name: string
  slug: string
  count: number
}

export function collectCategories(posts: Post[]): Term[] {
  const map = new Map<string, Term>()
  for (const p of posts) {
    const t = map.get(p.categorySlug) ?? { name: p.entry.data.category, slug: p.categorySlug, count: 0 }
    t.count++
    map.set(p.categorySlug, t)
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
}

export function collectTags(posts: Post[]): Term[] {
  const map = new Map<string, Term>()
  for (const p of posts) {
    p.entry.data.tags.forEach((tag, i) => {
      const slug = p.tagSlugs[i]
      const t = map.get(slug) ?? { name: tag, slug, count: 0 }
      t.count++
      map.set(slug, t)
    })
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
}

export function formatDate(date: Date, locale: Locale, style: 'short' | 'long' = 'long') {
  const loc = locale === 'pt-br' ? 'pt-BR' : 'en-US'
  if (style === 'short') return date.toISOString().slice(0, 10)
  return new Intl.DateTimeFormat(loc, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(date)
}
