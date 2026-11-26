import { site, pageMetadata } from '../data/site'
import { projects } from '../data/projects'

export function getMetadata(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/'
  const project = projects.find(item => path === `/projects/${item.slug}`)
  const known = pageMetadata[path]
  const found = Boolean(known || project)
  return {
    title: project ? `${project.title} — Abdikarim` : known?.title || 'Page not found — Abdikarim',
    description: project?.summary || known?.description || 'Explore Abdikarim’s professional experience and independent technology projects.',
    canonical: `${site.url}${path === '/' ? '/' : path}`,
    found,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': path === '/' || path === '/about' ? 'ProfilePage' : 'WebPage',
      url: `${site.url}${path === '/' ? '/' : path}`,
      name: project?.title || known?.title || 'Page not found',
      mainEntity: { '@type': 'Person', '@id': `${site.url}/#person`, name: site.fullName, givenName: site.name, url: site.url, jobTitle: 'RSC IT Support Engineer — Second Line', sameAs: [site.github, site.linkedin].filter(Boolean) },
    },
  }
}
