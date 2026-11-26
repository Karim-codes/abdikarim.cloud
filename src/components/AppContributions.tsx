import { appContributions } from '../data/contributions'
import { SectionHeader } from './Shared'

export function AppContributions() {
  return <section className="home-section app-contributions" aria-label="App development and collaboration">
    <SectionHeader title="App development & collaboration" subtitle="Building and developing shared products together." />
    <div className="contribution-list">{appContributions.map(app => <article className="contribution-entry" key={app.name}>
      <div className="contribution-heading"><h3>{app.name}</h3><p>{app.role}</p></div>
      <div className="contribution-detail"><p>{app.summary}</p><ul aria-label={`${app.name} focus areas`}>{app.focus.map(item => <li key={item}>{item}</li>)}</ul></div>
      <a className="text-link" href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${app.name} on the App Store (opens in a new tab)`}>App Store</a>
    </article>)}</div>
  </section>
}
