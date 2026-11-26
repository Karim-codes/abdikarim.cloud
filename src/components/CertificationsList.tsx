import { Check, BookOpen, ShieldCheck } from 'lucide-react'
import { certifications, type Certification } from '../data/site'

export function CredentialMark({ mark }: { mark: Certification['mark'] }) {
  if (mark === 'microsoft') return <span className="microsoft-mark" aria-hidden="true"><i /><i /><i /><i /></span>
  if (mark === 'jamf') return <span className="jamf-mark" aria-hidden="true">jamf</span>
  return <ShieldCheck size={25} aria-hidden="true" />
}
export function CertificationsList({ pursuing = false }: { pursuing?: boolean }) {
  return <div className="credentials-list">{certifications.filter(item => pursuing ? item.status === 'In progress' : item.status === 'Achieved').map(item => <article className="credential-row" key={item.exam}>
    <div className={`credential-mark ${pursuing ? 'studying' : ''}`}><CredentialMark mark={item.mark} /></div>
    <div className="credential-info"><p className="credential-issuer">{item.issuer}</p><h3>{item.title}</h3><p className="credential-meta">{item.exam}{item.date && <> <span>·</span> {item.date}</>}</p>{item.verificationUrl && <a href={item.verificationUrl} className="text-link" target="_blank" rel="noopener noreferrer">Verify credential</a>}</div>
    <span className={`credential-state ${pursuing ? 'muted' : ''}`}>{pursuing ? <BookOpen size={14} aria-hidden="true" /> : <Check size={14} aria-hidden="true" />}{item.status}</span>
  </article>)}</div>
}
