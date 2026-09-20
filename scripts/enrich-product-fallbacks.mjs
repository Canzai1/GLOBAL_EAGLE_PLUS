import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const facts = JSON.parse(readFileSync(new URL('./product-facts.json', import.meta.url), 'utf8'))
const sitemapPath = join(root, 'sitemap.xml')
const today = new Date().toISOString().slice(0, 10)
let sitemap = readFileSync(sitemapPath, 'utf8')
const updates = []

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

const fallbackStyle = `    <style id="seo-fallback-details-style">
      .seo-fallback__details{max-width:760px;margin:42px 0;padding-top:28px;border-top:1px solid #c7b99e}
      .seo-fallback__details h2{font:500 clamp(28px,4vw,38px)/1.1 'Playfair Display',Georgia,serif}
      .seo-fallback__details>p{color:#546a64;font-size:17px;line-height:1.7}
      .seo-fallback__details dl{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0 28px}
      .seo-fallback__details dl>div{padding:14px 0;border-bottom:1px solid #c7b99e}
      .seo-fallback__details dt{color:#546a64;font-size:13px}
      .seo-fallback__details dd{margin:6px 0 0;font-weight:700}
    </style>
`

for (const [slug, productFacts] of Object.entries(facts)) {
  if (!Array.isArray(productFacts) || productFacts.length < 3 || productFacts.some((pair) => !Array.isArray(pair) || pair.length !== 2)) {
    throw new Error(`Invalid product facts for ${slug}`)
  }

  const file = join(root, 'products', slug, 'index.html')
  const original = readFileSync(file, 'utf8')
  const heading = original.match(/<h1>([^<]+)<\/h1>/)?.[1]
  if (!heading || !original.includes('<main class="seo-fallback">')) {
    throw new Error(`Missing expected product fallback in ${file}`)
  }

  let html = original
  if (!html.includes('id="seo-fallback-details-style"')) {
    html = html.replace('</head>', `${fallbackStyle}  </head>`)
  }
  if (!html.includes('class="seo-fallback__details"')) {
    const section = [
      '  <section class="seo-fallback__details" aria-label="Product specifications">',
      '    <h2>Key specifications</h2>',
      '    <dl>',
      ...productFacts.map(([label, value]) => `      <div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`),
      '    </dl>',
      '  </section>',
    ].join('\n')
    const nav = '  <nav aria-label="Quick links">'
    if (!html.includes(nav)) throw new Error(`Missing quick links in ${file}`)
    html = html.replace(nav, `${section}\n${nav}`)
  }
  html = html.replace(/<meta property="og:image:alt" content="[^"]*"\s*\/>/, `<meta property="og:image:alt" content="${heading}" />`)

  if (html !== original) {
    const loc = `<loc>https://tjwuav.com/products/${slug}/</loc>`
    const locStart = sitemap.indexOf(loc)
    if (locStart < 0) throw new Error(`Missing sitemap URL for ${slug}`)
    const afterLoc = locStart + loc.length
    const match = sitemap.slice(afterLoc).match(/<lastmod>[^<]+<\/lastmod>/)
    if (!match || match.index > 80) throw new Error(`Missing sitemap lastmod for ${slug}`)
    const dateStart = afterLoc + match.index
    sitemap = `${sitemap.slice(0, dateStart)}<lastmod>${today}</lastmod>${sitemap.slice(dateStart + match[0].length)}`
    updates.push({ file, html })
  }
}

for (const { file, html } of updates) writeFileSync(file, html)
if (updates.length) writeFileSync(sitemapPath, sitemap)
console.log(`Enriched ${updates.length} product pages; ${Object.keys(facts).length} checked.`)
