import { Link, useParams } from 'react-router'
import { Check, Plus, Expand } from 'lucide-react'
import { Github } from '../components/BrandIcons'
import { projects } from '../data/projects'
import { Button } from '../components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { ExpandableArchitecture } from '../components/ArchitectureDiagram'
import { SafeImage, Status } from '../components/Shared'
import { ProjectShowcase } from '../components/ProjectShowcase'
import NotFound from './NotFound'

export default function ProjectCaseStudy() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <NotFound />
  const related = projects.filter(item => item.slug !== slug).slice(0, 1)
  return <article className="case-study">
    <header className="case-intro"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/projects">Projects</Link><span>/</span><span aria-current="page">{project.title}</span></nav><div className="case-category"><p className="eyebrow">{project.category} · Personal project</p><Status status={project.status} /></div><h1>{project.title}</h1><p className="case-subtitle">{project.subtitle}</p><div className="case-top-meta"><ul className="project-stack" aria-label="Technology stack">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>{project.repository && <a className="repository-link" href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" />View repository</a>}{project.appStoreUrl && <a className="text-link" href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">View on the App Store</a>}{project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit live app</a>}</div></header>
    {project.preview === 'azure' && <ExpandableArchitecture />}
    {project.screenshots.length > 0 && <div className={`screenshot-gallery ${project.preview === 'web' ? 'wide-gallery' : ''}`}>{project.screenshots.map((shot, index) => <figure key={shot.src}><Dialog><DialogTrigger asChild><button className="screenshot-trigger" aria-label={`Expand screenshot: ${shot.alt}`}><SafeImage src={shot.src} srcSet={shot.srcSet} sizes={project.preview === 'web' ? '(max-width: 1100px) calc(100vw - 40px), 1064px' : '(max-width: 650px) 150px, 220px'} alt={shot.alt} width={shot.width || 390} height={shot.height || 844} loading={index === 0 ? 'eager' : 'lazy'} /><span><Expand size={15} aria-hidden="true" />Expand screenshot</span></button></DialogTrigger><DialogContent className={`screenshot-dialog ${project.preview === 'web' ? 'wide-screenshot-dialog' : ''}`}><DialogTitle className="sr-only">{project.title} application screenshot</DialogTitle><DialogDescription>{shot.caption}</DialogDescription><SafeImage src={shot.src} alt={shot.alt} width={shot.width || 390} height={shot.height || 844} /></DialogContent></Dialog><figcaption>{shot.caption}</figcaption></figure>)}</div>}
    <div className="case-body"><aside className="case-contents"><p className="eyebrow">In this case study</p><nav aria-label="Case study contents"><a href="#overview">Overview</a><a href="#approach">Technical approach</a><a href="#implementation">Implementation</a><a href="#decisions">Engineering decisions</a><a href="#challenges">Challenges & lessons</a><a href="#status">Current status</a></nav></aside><div className="case-prose">
      <section id="overview"><p className="eyebrow">The context</p><h2>Project overview</h2><p>{project.overview}</p><h3>The problem</h3><p>{project.problem}</p></section>
      <section id="approach"><p className="eyebrow">How it comes together</p><h2>Technical approach</h2><p>{project.approach}</p></section>
      <section id="implementation"><h2>Implementation & scope</h2><div className="scope-list"><h3><Check size={17} aria-hidden="true" />Implemented</h3><ul>{project.implemented.map(item => <li key={item}>{item}</li>)}</ul></div>{project.planned.length > 0 && <div className="scope-list planned-scope"><h3><Plus size={17} aria-hidden="true" />Planned · not implemented</h3><ul>{project.planned.map(item => <li key={item}>{item}</li>)}</ul></div>}</section>
      <section id="decisions"><h2>Engineering decisions</h2>{project.decisions.map(item => <div className="decision" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>)}</section>
      <section id="challenges"><h2>Challenges & lessons</h2>{project.challenges.map(item => <div className="decision" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>)}<div className="lesson-note"><h3>What I’m taking forward</h3><p>{project.lessons}</p></div></section>
      <section id="status"><h2>Where it stands</h2><p>{project.statusNote}</p><p className="case-update">Case study last reviewed {new Date(project.lastUpdated + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' })}</p>{project.liveUrl && <Button variant="outline" asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit live app</a></Button>}{project.appStoreUrl && <Button variant="outline" asChild><a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">View on the App Store</a></Button>}{project.repository && <Button variant="outline" asChild><a href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" />Explore the source</a></Button>}</section>
    </div></div>
    {related.length > 0 && <section className="related-projects"><h2>Another project to explore</h2><ProjectShowcase projects={related} /></section>}
  </article>
}
