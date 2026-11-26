import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import App from './App'
import { projects } from './data/projects'
import { pageMetadata } from './data/site'
import { getMetadata } from './lib/metadata'

export const routes = [...Object.keys(pageMetadata), ...projects.map(project => `/projects/${project.slug}`)]
export { getMetadata }
export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(<StaticRouter location={url}><App /></StaticRouter>)
  let html = ''
  for await (const chunk of prelude) html += chunk.toString()
  return html
}
