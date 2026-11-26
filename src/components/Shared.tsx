import { useState, type ImgHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router'
import { GraduationCap, ImageOff } from 'lucide-react'
import { education } from '../data/site'
import type { Project } from '../types'

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <header className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-description">{children}</div></header>
}
export function SectionHeader({ title, subtitle, link, href }: { title: string; subtitle?: string; link?: string; href?: string }) {
  return <div className="section-header"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{link && href && <Link className="text-link" to={href}>{link}</Link>}</div>
}
export function Status({ status }: { status: Project['status'] }) { return <span className={`project-status status-${status.toLowerCase().replaceAll(' ', '-')}`}>{status}</span> }
export function SafeImage({ alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false)
  return failed ? <div className="missing-image" role="img" aria-label={`${alt || 'Project image'} — preview unavailable`}><ImageOff aria-hidden="true" size={24} /><span>Preview unavailable</span></div> : <img {...props} alt={alt || ''} onError={() => setFailed(true)} />
}
export function Education() {
  return <div className="education-row"><div className="education-icon"><GraduationCap size={24} aria-hidden="true" /></div><div><h3>{education.university}</h3><p>{education.degree} <span className="dot-separator">·</span> {education.grade}</p><p className="education-detail">{education.detail}</p></div><span className="row-date">{education.dates}</span></div>
}
