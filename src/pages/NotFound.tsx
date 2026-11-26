import { Link } from 'react-router'
import { Button } from '../components/ui/button'
import { PageIntro } from '../components/Shared'

export default function NotFound() {
  return <div className="not-found"><PageIntro eyebrow="404 · Page not found" title="A path that doesn’t lead anywhere."><p>This page may have moved, or the address may be incomplete. My work is still here to explore.</p></PageIntro><div className="hero-actions"><Button asChild><Link to="/">Back to home</Link></Button><Button variant="outline" asChild><Link to="/projects">Explore projects</Link></Button></div></div>
}
