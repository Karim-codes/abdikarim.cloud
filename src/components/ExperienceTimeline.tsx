import { Code2 } from 'lucide-react'
import { experience } from '../data/site'

export function ExperienceTimeline({ detailed = false }: { detailed?: boolean }) {
  return <div className={`experience-list ${detailed ? 'detailed' : ''}`}>{experience.map(job => <article className="experience-entry" key={job.company}>
    <div className={`company-mark ${job.current ? 'kfc-mark' : ''}`} aria-hidden="true">{job.mark}</div>
    <div className="experience-content"><div className="experience-top"><div><h3>{job.company} <span className="company-parent">/ {job.parent}</span></h3><p className="job-title">{job.title}</p></div><span className="row-date">{job.dates}</span></div>
      <p className="experience-summary">{job.summary}</p>
      {detailed && <div className="responsibility-groups">{job.groups.map(group => <div key={group.title}><h4>{group.title}</h4><p>{group.body}</p></div>)}</div>}
      {'secondment' in job && <aside className="secondment"><div className="secondment-title"><Code2 size={17} aria-hidden="true" /><h4>{job.secondment.title}</h4><span>{job.secondment.label}</span></div><p>{detailed ? job.secondment.body : 'React, TypeScript and enterprise software development within my existing role.'}</p>{detailed && <ul className="plain-list">{job.secondment.practices.map(item => <li key={item}>{item}</li>)}</ul>}</aside>}
    </div>
  </article>)}</div>
}
