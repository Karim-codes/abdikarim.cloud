import { Link } from 'react-router'
import { Github } from './BrandIcons'
import type { Project } from '../types'
import { ArchitectureDiagram, AzureMark } from './ArchitectureDiagram'
import { SafeImage, Status } from './Shared'

export function ProjectPreview({ project }: { project: Project }) {
  if (project.preview === 'azure') return <div className="project-preview azure-preview"><div className="preview-label"><AzureMark size={18} /><span>Microsoft Azure</span><span className="preview-kind">Infrastructure lab</span></div><ArchitectureDiagram compact /></div>
  if (project.preview === 'qasd' || project.preview === 'shaanis' || project.preview === 'itinyri') {
    const details = {
      qasd: { tagline: 'A journey with intention.', caption: 'Actual application screens', className: '' },
      shaanis: { tagline: 'Play on web & iOS.', caption: 'Actual Flutter renders', className: 'shaanis-preview' },
      itinyri: { tagline: 'Travel plans & essentials.', caption: 'App Store screenshots', className: 'itinyri-preview' },
    }[project.preview]
    return <div className={`project-preview qasd-preview ${details.className}`}><div className="qasd-wordmark">{project.title}<span>{details.tagline}</span></div><div className="qasd-phones">{project.screenshots.slice(0, 2).map(shot => <SafeImage key={shot.src} src={shot.src} srcSet={shot.srcSet} sizes="(max-width: 650px) 130px, (max-width: 850px) 121px, 154px" alt={shot.alt} loading="lazy" width={shot.width || 390} height={shot.height || 844} />)}</div><span className="qasd-preview-caption">{details.caption}</span></div>
  }
  if (project.preview === 'web') {
    const shot = project.screenshots[0]
    return <div className="project-preview web-preview"><div className="web-preview-label"><span>{project.title}</span><span>Live web app</span></div>{shot && <SafeImage src={shot.src} srcSet={shot.srcSet} sizes="(max-width: 650px) calc(100vw - 74px), 500px" alt={shot.alt} loading="lazy" width={shot.width} height={shot.height} />}</div>
  }
  return null
}
export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return <div className="project-showcase">{projects.map(project => <article className="project-feature" key={project.slug}>
    <div className="preview-frame"><ProjectPreview project={project} /></div>
    <div className="project-copy"><div className="project-category-line"><span className="eyebrow">{project.latest && 'Latest work · '}{project.category}</span><Status status={project.status} /></div><h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><ul className="project-stack" aria-label="Technology stack">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul><div className="project-links"><Link className="text-link" to={`/projects/${project.slug}`}>Read case study</Link>{project.repository && <a href={project.repository} className="repository-link" target="_blank" rel="noopener noreferrer" aria-label={`Source code for ${project.title} on GitHub (opens in a new tab)`}><Github size={16} aria-hidden="true" />Source code</a>}{project.appStoreUrl && <a href={project.appStoreUrl} className="text-link" target="_blank" rel="noopener noreferrer">View on the App Store</a>}{project.liveUrl && <a href={project.liveUrl} className="text-link" target="_blank" rel="noopener noreferrer">{project.liveLabel || 'Visit live app'}</a>}</div></div>
  </article>)}</div>
}
