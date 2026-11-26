import { Link } from 'react-router'
import { Cloud, Code2, FileDown, MapPin, Server, ShieldCheck, BriefcaseBusiness } from 'lucide-react'
import { site, expertise } from '../data/site'
import { featuredProjects } from '../data/projects'
import { Button } from '../components/ui/button'
import { SectionHeader, Education, SafeImage } from '../components/Shared'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { CertificationsList } from '../components/CertificationsList'
import { ProjectShowcase } from '../components/ProjectShowcase'
import { SocialLinks, ContactStrip } from '../components/Layout'
import { AppContributions } from '../components/AppContributions'

const icons = { server: Server, cloud: Cloud, code: Code2, shield: ShieldCheck }
export default function Home() {
  return <>
    <section className="hero" id="about"><div className="hero-introduction"><p className="personal-intro">Hello, I’m <strong>{site.name}.</strong></p><p className="hero-location"><MapPin size={14} aria-hidden="true" />{site.location}</p></div>
      <div className="hero-main"><div className="hero-copy"><h1>Building technology.<br /><span>Solving real problems.</span></h1><p className="hero-description">IT infrastructure, cloud technologies and software engineering. Currently supporting enterprise technology at <strong>KFC / Yum! Brands.</strong></p><div className="hero-actions"><Button asChild><Link to="/projects">Explore my work</Link></Button>{site.cv && <Button asChild variant="ghost"><a href={site.cv} download><FileDown size={16} aria-hidden="true" />View CV</a></Button>}<SocialLinks /></div>{site.availability.enabled && <p className="availability"><span />{site.availability.label}</p>}</div>
        {site.portrait ? <SafeImage className="portrait" src={site.portrait} alt="Abdikarim Ahmed" width={220} height={260} /> : <aside className="hero-aside"><BriefcaseBusiness size={20} aria-hidden="true" /><p className="eyebrow">Currently</p><p className="current-company">KFC UK & Ireland</p><p>RSC IT Support Engineer<br />Second Line</p><div className="hero-aside-footer">Enterprise IT.<br />An engineering mindset.</div></aside>}
      </div>
    </section>
    <section className="home-section expertise-section" id="capabilities"><SectionHeader title="Areas of expertise" subtitle="A practical perspective across the technology stack." /><div className="expertise-grid">{expertise.map(item => { const Icon = icons[item.icon]; return <Link key={item.title} to={item.href} className="expertise-card"><div className="expertise-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></div><div><h3>{item.title}</h3><p>{item.description}</p><span>{item.detail}</span></div></Link> })}</div></section>
    <section className="home-section experience-section"><SectionHeader title="Professional experience" link="View experience" href="/experience" /><ExperienceTimeline /></section>
    <section className="home-section featured-section" id="work"><SectionHeader title="Selected personal projects" subtitle="Independent builds. Practical questions. Documented decisions." link="All projects" href="/projects" /><ProjectShowcase projects={featuredProjects} /></section>
    <AppContributions />
    <section className="home-section"><SectionHeader title="Certifications & learning" subtitle="A foundation to build on. Always something more to learn." link="All qualifications" href="/certifications" /><CertificationsList /><div className="learning-note"><span className="eyebrow">Currently studying</span><p>Azure Administrator Associate <span>AZ-104</span><i />CompTIA Security+ <span>SY0-701</span></p></div></section>
    <section className="home-section education-section"><SectionHeader title="Education" /><Education /></section>
    <ContactStrip />
  </>
}
