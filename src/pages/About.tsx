import { Link } from 'react-router'
import { MapPin } from 'lucide-react'
import { site, technicalSkills } from '../data/site'
import { PageIntro, SectionHeader, Education } from '../components/Shared'
import { ContactStrip } from '../components/Layout'

export default function About() {
  return <><PageIntro eyebrow="About" title="Curiosity, put into practice."><p>My background combines enterprise IT experience with a Computer Science education and a hands-on interest in cloud infrastructure and software engineering.</p></PageIntro>
    <div className="editorial-layout about-story"><aside><p className="eyebrow">A little background</p><p className="location-line"><MapPin size={15} aria-hidden="true" />{site.location}</p></aside><div className="prose"><p>I work in second-line IT support at KFC UK & Ireland / Yum! Brands, helping people work effectively with the systems they rely on. That means working with identity, workplace technology, endpoints and the practical details that keep enterprise IT running.</p><p>A software engineering secondment has also given me experience of React and TypeScript within a large engineering team: contributing through pull requests, learning from code reviews, testing changes and working through technical debt.</p><p>Alongside my professional work, I build personal applications and infrastructure labs. I like taking a system apart conceptually, understanding where its boundaries are, then building something I can explain and improve.</p><p>My <Link to="/projects">independent projects</Link> are where I explore that curiosity, from Azure networking and Terraform to a mobile pilgrimage companion. Cloud infrastructure is a direction I’m developing through practical work and continued study.</p><p>I built iTinyri, my own travel planning app. I also co-own Minaarly with a friend; we built it together from day one.</p></div></div>
    <section className="home-section" id="technical-expertise"><SectionHeader title="Technical expertise" subtitle="Where I use it matters as much as what I know." /><div className="skill-disciplines">{technicalSkills.map(group => <article key={group.title}><div><h3>{group.title}</h3><p className="eyebrow">{group.context}</p></div><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section>
    <section className="home-section"><SectionHeader title="Education" /><Education /></section><ContactStrip />
  </>
}
