import fs from 'node:fs'
import path from 'node:path'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

// Build runs from the project root; bundled chunks move, so resolve from cwd.
const font = (file: string) => fs.readFileSync(path.resolve(process.cwd(), 'src/assets/fonts', file))

const fonts = [
  { name: 'Geist', data: font('Geist-500.ttf'), weight: 500 as const, style: 'normal' as const },
  { name: 'Geist', data: font('Geist-600.ttf'), weight: 600 as const, style: 'normal' as const },
  { name: 'Geist Mono', data: font('GeistMono-400.ttf'), weight: 400 as const, style: 'normal' as const },
]

const W = 1200
const H = 630

// Dark card, same world as the site: near-black ground, hairline panel, one accent glow.
const C = {
  bg: '#0f1014',
  surface: '#16181d',
  line: 'rgba(255,255,255,0.10)',
  text: '#ececf1',
  text2: '#9a9da8',
  accent: '#7c8cff',
}

export interface OgCard {
  title: string
  kicker: string
  footer: string
  chip?: string
}

function h(type: string, props: Record<string, unknown>, ...children: unknown[]) {
  // satori treats an empty children array as "many children"; omit the key instead
  if (children.length === 0) return { type, props }
  return { type, props: { ...props, children: children.length === 1 ? children[0] : children } }
}

function titleSize(title: string) {
  if (title.length > 90) return 44
  if (title.length > 60) return 52
  if (title.length > 36) return 60
  return 68
}

export function buildTree(card: OgCard) {
  const tree = h(
    'div',
    {
      style: {
        width: W,
        height: H,
        display: 'flex',
        background: C.bg,
        color: C.text,
        fontFamily: 'Geist',
        position: 'relative',
        padding: 40,
      },
    },
    // glow
    h('div', {
      style: {
        position: 'absolute',
        left: -120,
        top: -160,
        width: 640,
        height: 640,
        borderRadius: 640,
        background: `radial-gradient(circle, ${C.accent}55 0%, ${C.accent}18 40%, transparent 70%)`,
      },
    }),
    // panel
    h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '44px 52px',
          borderRadius: 24,
          border: `1px solid ${C.line}`,
          background: `linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0) 30%), ${C.surface}`,
          boxShadow: '0 24px 60px -20px rgba(0,0,0,0.7)',
        },
      },
      // header row
      h(
        'div',
        { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
        h(
          'div',
          { style: { display: 'flex', alignItems: 'center', gap: 14 } },
          h('div', {
            style: {
              width: 12,
              height: 12,
              borderRadius: 12,
              background: C.accent,
              boxShadow: `0 0 0 6px ${C.accent}33`,
            },
          }),
          h('div', { style: { fontSize: 26, fontWeight: 600, letterSpacing: -0.5 } }, 'JCM'),
        ),
        h(
          'div',
          { style: { fontFamily: 'Geist Mono', fontSize: 20, color: C.text2 } },
          card.kicker,
        ),
      ),
      // title
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontSize: titleSize(card.title),
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: -1.5,
            paddingRight: 40,
          },
        },
        card.title,
      ),
      // footer row
      h(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 24,
            borderTop: `1px solid ${C.line}`,
          },
        },
        h(
          'div',
          { style: { fontFamily: 'Geist Mono', fontSize: 20, color: C.text2 } },
          card.footer,
        ),
        card.chip
          ? h(
              'div',
              {
                style: {
                  display: 'flex',
                  padding: '8px 14px',
                  borderRadius: 8,
                  border: `1px solid ${C.accent}66`,
                  background: `${C.accent}22`,
                  color: '#b7c0ff',
                  fontSize: 20,
                  fontWeight: 500,
                },
              },
              card.chip,
            )
          : h('div', {}),
      ),
    ),
  )

  return tree
}

export async function renderOg(card: OgCard): Promise<Buffer> {
  const tree = buildTree(card)
  const svg = await satori(tree as never, { width: W, height: H, fonts })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng()
  return Buffer.from(png)
}
