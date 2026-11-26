import { Copy, Check, Mail, MapPin, FileDown } from 'lucide-react'
import { Github, Linkedin } from '../components/BrandIcons'
import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { PageIntro } from '../components/Shared'
import { Button } from '../components/ui/button'

export default function Contact() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])
  const copy = async () => {
    try { await navigator.clipboard.writeText(site.email); setCopyState('copied') } catch { setCopyState('failed') }
    clearTimeout(timer.current); timer.current = setTimeout(() => setCopyState('idle'), 4000)
  }
  return <><PageIntro eyebrow="Contact" title="Good conversations go a long way."><p>For professional connections, recruitment conversations, or a shared interest in technology. Here’s where to find me.</p></PageIntro><div className="contact-layout"><div className="contact-methods">
    {site.email && <div className="contact-method"><Mail size={22} aria-hidden="true" /><div><p className="eyebrow">Email</p><a href={`mailto:${site.email}`}>{site.email}</a></div><Button variant="ghost" size="icon" aria-label="Copy email address" onClick={copy}>{copyState === 'copied' ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}</Button></div>}
    {site.linkedin && <a className="contact-method" href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={22} aria-hidden="true" /><div><p className="eyebrow">LinkedIn</p><span>Connect professionally</span></div><span className="external-note">Opens in a new tab</span></a>}
    {site.github && <a className="contact-method" href={site.github} target="_blank" rel="noopener noreferrer"><Github size={22} aria-hidden="true" /><div><p className="eyebrow">GitHub</p><span>Explore the source</span></div><span className="external-note">Opens in a new tab</span></a>}
    <p className="copy-status" role="status">{copyState === 'copied' ? 'Email address copied.' : copyState === 'failed' ? 'Copy unavailable. You can select the email address above.' : ''}</p>
  </div><aside className="contact-aside"><MapPin size={21} aria-hidden="true" /><h2>{site.location}</h2><p>Currently supporting enterprise technology at KFC UK & Ireland / Yum! Brands.</p>{site.availability.enabled && <p className="availability">{site.availability.label}</p>}{site.cv && <Button variant="outline" asChild><a href={site.cv} download><FileDown size={16} aria-hidden="true" />Download CV</a></Button>}</aside></div></>
}
