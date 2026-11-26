import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

const routes = ['/', '/about', '/experience', '/projects', '/certifications', '/contact', '/projects/azure-infrastructure-lab', '/projects/qasd', '/projects/shaanis', '/projects/polyglotpdf', '/projects/itinyri']
test('every public route contains prerendered content and unique static metadata', async () => {
  const titles = new Set()
  for (const route of routes) {
    const html = await readFile(route === '/' ? 'dist/index.html' : `dist${route}/index.html`, 'utf8')
    const title = html.match(/<title>(.*?)<\/title>/)?.[1]
    assert.ok(title, route)
    assert.ok(!titles.has(title), `Duplicate title: ${title}`)
    titles.add(title)
    assert.match(html, /<h1[^>]*>.+?<\/h1>/s)
    assert.ok(html.includes(`href="https://abdikarim.cloud${route}"`), `Canonical missing: ${route}`)
    assert.match(html, /<meta property="og:image" content="https:\/\/abdikarim.cloud\/social-preview.png"/)
    const structured = JSON.parse(html.match(/<script id="structured-data" type="application\/ld\+json">(.*?)<\/script>/s)[1])
    assert.equal(structured.mainEntity.name, 'Abdikarim Ahmed')
    assert.ok(!html.includes('<!--app-html-->'))
    assert.ok(!html.includes('Loading case study'))
  }
})
async function files(dir) {
  const result=[]
  for (const name of await readdir(dir)) {
    const path=join(dir,name)
    if ((await stat(path)).isDirectory()) result.push(...await files(path)); else result.push(path)
  }
  return result
}
test('unpublished projects and excluded associations do not reach any public output', async () => {
  const text = (await Promise.all((await files('dist')).filter(path => /\.(html|js|json|xml|css|txt|svg)$/.test(path)).map(path => readFile(path, 'utf8')))).join('\n').toLowerCase()
  for (const marker of ['cloudtutor', 'somali chess hub', 'somali-chess-hub', 'coderaxa', 'meatery', 'zakifx', 'syncsupport']) assert.ok(!text.includes(marker), `Unpublished/excluded content leaked: ${marker}`)
  assert.ok(!text.includes('open to opportunities'), 'Disabled availability copy leaked')
})
test('sitemap, 404 and assets are present and valid', async () => {
  const sitemap=await readFile('dist/sitemap.xml','utf8')
  assert.equal((sitemap.match(/<url>/g)||[]).length,routes.length)
  const missing=await readFile('dist/404.html','utf8')
  assert.match(missing, /noindex, follow/)
  assert.match(missing, /Page not found/)
  for (const path of ['dist/favicon.svg','dist/robots.txt','dist/social-preview.png','dist/projects/qasd-home.webp','dist/projects/qasd-counter.webp']) assert.ok((await stat(path)).size > 0,path)
})
