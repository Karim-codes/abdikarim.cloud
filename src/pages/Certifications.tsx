import { PageIntro, SectionHeader, Education } from '../components/Shared'
import { CertificationsList } from '../components/CertificationsList'
import { ContactStrip } from '../components/Layout'

export default function Certifications() {
  return <><PageIntro eyebrow="Certifications & education" title="Keep building your understanding."><p>Formal qualifications support the practical work. Here are the certifications I’ve achieved and the areas I’m currently studying.</p></PageIntro><section className="credentials-section"><SectionHeader title="Achieved certifications" /><CertificationsList /></section><section className="home-section"><SectionHeader title="Currently pursuing" subtitle="Professional development in progress." /><CertificationsList pursuing /></section><section className="home-section"><SectionHeader title="Education" /><Education /></section><ContactStrip /></>
}
