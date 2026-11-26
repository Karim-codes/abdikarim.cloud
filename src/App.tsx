import { useEffect, useRef } from 'react'
import { Link, Route, Routes, useLocation, useNavigationType } from 'react-router'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react'
import { Header, Footer } from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { getMetadata } from './lib/metadata'

import ProjectCaseStudy from './pages/ProjectCaseStudy'

function RouteEffects() {
  const { pathname, search, hash } = useLocation()
  const navigationType = useNavigationType()
  const scrollPositions = useRef(new Map<string, number>())
  useEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = previous }
  }, [])
  useEffect(() => {
    const metadata = getMetadata(pathname)
    document.title = metadata.title
    const setMeta = (selector: string, value: string) => document.querySelector(selector)?.setAttribute('content', value)
    setMeta('meta[name="description"]', metadata.description)
    setMeta('meta[property="og:title"]', metadata.title)
    setMeta('meta[property="og:description"]', metadata.description)
    setMeta('meta[property="og:url"]', metadata.canonical)
    setMeta('meta[name="twitter:title"]', metadata.title)
    setMeta('meta[name="twitter:description"]', metadata.description)
    setMeta('meta[name="robots"]', metadata.found ? 'index, follow' : 'noindex, follow')
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', metadata.canonical)
    const structured = document.querySelector('#structured-data')
    if (structured) structured.textContent = JSON.stringify(metadata.structuredData)
  }, [pathname])
  useEffect(() => {
    const save = () => scrollPositions.current.set(pathname, window.scrollY)
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let anchor = hash.slice(1)
        try { anchor = decodeURIComponent(anchor) } catch { /* An invalid fragment is simply unmatched. */ }
        const element = document.getElementById(anchor === 'roadmap' ? 'work' : anchor)
        element?.scrollIntoView()
        if (anchor === 'main-content') element?.focus({ preventScroll: true })
      } else {
        window.scrollTo({ top: navigationType === 'POP' ? scrollPositions.current.get(pathname) || 0 : 0, behavior: 'instant' })
        if (navigationType !== 'POP') document.getElementById('main-content')?.focus({ preventScroll: true })
      }
    })
    window.addEventListener('scroll', save, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', save) }
  }, [pathname, hash, navigationType])
  useEffect(() => {
    // Search filters deliberately preserve scroll position.
    document.querySelectorAll('details[open]').forEach(node => node.removeAttribute('open'))
  }, [pathname, search])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const reduced = useReducedMotion()
  const opacity = reduced ? 1 : [0.86, 1]
  return <LazyMotion features={domAnimation} strict><Link className="skip-link" to={`${pathname}#main-content`}>Skip to content</Link><RouteEffects /><Header /><m.main className="shell main-content" id="main-content" tabIndex={-1} key={pathname} initial={false} animate={{ opacity }} transition={{ duration: reduced ? 0 : 0.16 }}><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/experience" element={<Experience />} /><Route path="/projects" element={<Projects />} /><Route path="/projects/:slug" element={<ProjectCaseStudy />} /><Route path="/certifications" element={<Certifications />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} />
  </Routes></m.main><Footer /></LazyMotion>
}
