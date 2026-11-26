import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
await mkdir('public/projects', { recursive: true })
for (const image of ['qasd-home', 'qasd-counter', 'shaanis-home', 'shaanis-table']) {
  await sharp(`content/assets/${image}.png`).webp({quality:85}).toFile(`public/projects/${image}.webp`)
  await sharp(`content/assets/${image}.png`).resize({width:195}).webp({quality:85}).toFile(`public/projects/${image}-195.webp`)
}
for (const image of ['itinyri-trips', 'itinyri-phrases']) {
  await sharp(`content/assets/${image}.jpg`).webp({quality:85}).toFile(`public/projects/${image}.webp`)
  await sharp(`content/assets/${image}.jpg`).resize({width:195}).webp({quality:85}).toFile(`public/projects/${image}-195.webp`)
}
await sharp('content/assets/polyglotpdf-home.png').webp({quality:85}).toFile('public/projects/polyglotpdf-home.webp')
await sharp('content/assets/polyglotpdf-home.png').resize({width:720}).webp({quality:85}).toFile('public/projects/polyglotpdf-home-720.webp')
console.log('Generated full-size and 195px WebP previews from the genuine application screenshots.')
