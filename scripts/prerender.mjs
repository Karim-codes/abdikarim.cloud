import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { render, routes, getMetadata } from '../.prerender/entry-server.js'

const template = await readFile('dist/index.html', 'utf8')
const escape = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
for (const route of [...routes, '/404']) {
  const meta = getMetadata(route)
  const markup = await render(route)
  let html = template.replace('<!--app-html-->', markup)
  html = html.replace('id="root" data-route="/"', `id="root" data-route="${escape(route)}"`)
  html = html.replace(/<title>.*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(meta.description)}`)
    .replace(/(<meta name="robots" content=")[^"]*/, `$1${meta.found ? 'index, follow' : 'noindex, follow'}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(meta.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(meta.description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${escape(meta.canonical)}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${escape(meta.title)}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${escape(meta.description)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${escape(meta.canonical)}`)
    .replace('<!--structured-data-->', JSON.stringify(meta.structuredData).replace(/</g, '\\u003c'))
  const file = route === '/404' ? 'dist/404.html' : route === '/' ? 'dist/index.html' : `dist${route}/index.html`
  await mkdir(dirname(resolve(file)), { recursive: true })
  await writeFile(file, html)
}
const urls = routes.map(route => `<url><loc>${escape(getMetadata(route).canonical)}</loc></url>`).join('')
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`)
await rm('.prerender', { recursive: true, force: true })
console.log(`Prerendered ${routes.length} public routes and a custom 404. Generated sitemap.xml.`)
