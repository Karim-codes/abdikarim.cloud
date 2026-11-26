import { PageIntro } from '../components/Shared'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { ContactStrip } from '../components/Layout'

export default function Experience() {
  return <><PageIntro eyebrow="Professional experience" title="Technology, in the real world."><p>Enterprise IT operations, workplace systems and software engineering experience. The roles and environments that have shaped how I work.</p></PageIntro><ExperienceTimeline detailed /><ContactStrip /></>
}
