import { useSearchParams } from 'react-router'
import { projects, categories } from '../data/projects'
import { PageIntro } from '../components/Shared'
import { ProjectShowcase } from '../components/ProjectShowcase'
import { ContactStrip } from '../components/Layout'
import { AppContributions } from '../components/AppContributions'

export default function Projects() {
  const [params, setParams] = useSearchParams()
  const requested = params.get('category')
  const category = categories.find(item => item === requested) || 'All projects'
  const filtered = category === 'All projects' ? projects : projects.filter(project => project.category === category)
  return <><PageIntro eyebrow="Engineering portfolio" title="Built to learn. Made to work."><p>A closer look at the apps I’ve built, my infrastructure labs and the products I’ve developed with others. The work, the decisions behind it, and where each project stands.</p></PageIntro><div className="project-filters" role="group" aria-label="Filter projects by category">{['All projects', ...categories].map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setParams(item === 'All projects' ? {} : { category: item }, { preventScrollReset: true })}>{item}</button>)}</div><p className="sr-only" role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'} shown</p><ProjectShowcase projects={filtered} /><p className="projects-footnote">Personal projects are separate from my professional employment. Development status is shown for each build.</p><AppContributions /><ContactStrip /></>
}
