import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Mail, Menu } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { site } from '../data/site'
import { ThemePicker } from './ThemePicker'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog'

export function SocialLinks({ labels = false }: { labels?: boolean }) {
  return <div className={`social-links ${labels ? 'with-labels' : ''}`}>
    {site.linkedin && <a className="icon-link" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={18} aria-hidden="true" />{labels && <span>LinkedIn</span>}</a>}
    {site.github && <a className="icon-link" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={18} aria-hidden="true" />{labels && <span>GitHub</span>}</a>}
  </div>
}
export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header" id="top"><div className="shell header-inner">
    <Link className="wordmark" to="/" aria-label="Abdikarim, home">Abdikarim<span>.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{site.navigation.map(item => <NavLink key={item.href} to={item.href}>{item.label}</NavLink>)}</nav>
    <div className="header-tools"><ThemePicker /><span className="header-divider" /><Link to="/contact" className="header-contact">Let’s connect</Link>
      <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><Button className="mobile-menu-trigger" variant="ghost" size="icon" aria-label="Open navigation"><Menu size={21} aria-hidden="true" /></Button></DialogTrigger>
        <DialogContent className="mobile-sheet"><DialogTitle className="wordmark">Abdikarim<span>.</span></DialogTitle><DialogDescription className="muted">Enterprise IT, cloud & software.</DialogDescription>
          <nav aria-label="Mobile navigation"><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>{site.navigation.map(item => <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)}>{item.label}</NavLink>)}<NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></nav>
          <SocialLinks labels />
        </DialogContent>
      </Dialog>
    </div>
  </div></header>
}
export function ContactStrip() {
  return <section className="contact-strip" id="contact"><div><p className="eyebrow">A conversation starts here</p><h2>Let’s talk technology.</h2><p>Find me on LinkedIn, explore my code, or say hello.</p></div><Button variant="outline" asChild><Link to="/contact"><Mail size={16} aria-hidden="true" />Get in touch</Link></Button></section>
}
export function Footer() {
  return <footer className="site-footer shell"><div><Link to="/" className="footer-name">Abdikarim.</Link><span>© {new Date().getFullYear()} Abdikarim Ahmed</span></div><div className="footer-links"><Link to="/contact">Contact</Link><SocialLinks /></div></footer>
}
