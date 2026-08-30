import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react'
import { projects, roadmap, type Project } from './data/projects'

type IconName =
  | 'arrow'
  | 'azure'
  | 'braces'
  | 'check'
  | 'chevron'
  | 'cloud'
  | 'code'
  | 'copy'
  | 'database'
  | 'github'
  | 'layers'
  | 'lock'
  | 'mail'
  | 'menu'
  | 'network'
  | 'pulse'
  | 'server'
  | 'shield'
  | 'x'

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  azure: <><path d="M12.8 3 6.2 8.8 3 18h5.1l2.1-5.4 4.5 3.7H10L8.6 20h12.4L12.8 3Z"/></>,
  braces: <><path d="M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2"/><path d="M16 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  cloud: <path d="M17.5 19H7a5 5 0 1 1 1.3-9.8A6 6 0 0 1 20 11a4 4 0 0 1-2.5 8Z"/>,
  code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
  copy: <><rect width="12" height="12" x="9" y="9" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 3.7 5.1 5.1 0 0 0 19.2 0S18 0 15 1.5a13.4 13.4 0 0 0-7 0C5 0 3.8 0 3.8 0a5.1 5.1 0 0 0-.1 3.7 5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/>,
  layers: <><path d="m12 2-9 5 9 5 9-5-9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
  lock: <><rect width="16" height="12" x="4" y="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></>,
  menu: <><path d="M4 7h16"/><path d="M4 17h16"/></>,
  network: <><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-2h14v2"/></>,
  pulse: <path d="M3 12h4l2-7 4 14 2-7h6"/>,
  server: <><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01"/></>,
  shield: <><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/></>,
  x: <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name]}
    </svg>
  )
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Abdikarim Cloud, back to top">
      abdikarim<span>.cloud</span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <Brand />
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setOpen(false)}>Projects</a>
          <a href="#capabilities" onClick={() => setOpen(false)}>Capabilities</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Let&apos;s connect <Icon name="arrow" size={16} />
          </a>
        </div>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          <Icon name={open ? 'x' : 'menu'} />
        </button>
      </nav>
    </header>
  )
}

type NodeId = 'frontDoor' | 'appService' | 'identity' | 'database'
type NodePosition = { x: number; y: number }
type NodePositions = Record<NodeId, NodePosition>

const initialNodePositions: NodePositions = {
  frontDoor: { x: .5, y: .2 },
  appService: { x: .22, y: .52 },
  identity: { x: .78, y: .52 },
  database: { x: .5, y: .82 },
}

const getInitialNodePositions = (): NodePositions => window.innerWidth <= 680
  ? { ...initialNodePositions, appService: { x: .29, y: .52 }, identity: { x: .71, y: .52 } }
  : initialNodePositions

const architectureNodes: Array<{ id: NodeId; label: string; title: string; icon: IconName; tone: string }> = [
  { id: 'frontDoor', label: 'ENTRY POINT', title: 'Azure Front Door', icon: 'cloud', tone: '' },
  { id: 'appService', label: 'COMPUTE', title: 'App Service', icon: 'code', tone: 'violet' },
  { id: 'identity', label: 'IDENTITY', title: 'Zero Trust', icon: 'shield', tone: 'mint' },
  { id: 'database', label: 'DATA LAYER', title: 'Cosmos DB', icon: 'database', tone: 'blue' },
]

function ArchitectureVisual() {
  const [positions, setPositions] = useState<NodePositions>(getInitialNodePositions)
  const [dragging, setDragging] = useState<NodeId | null>(null)
  const architectureRef = useRef<HTMLDivElement>(null)
  const dragOffset = useRef({ x: 0, y: 0 })

  const moveNode = (id: NodeId, clientX: number, clientY: number) => {
    const rect = architectureRef.current?.getBoundingClientRect()
    if (!rect) return

    const node = architectureRef.current?.querySelector<HTMLElement>(`[data-node-id="${id}"]`)
    const halfWidth = Math.min(((node?.offsetWidth ?? 184) / 2 + 8) / rect.width, .3)
    const halfHeight = Math.min(((node?.offsetHeight ?? 63) / 2 + 8) / rect.height, .11)
    const x = (clientX - rect.left) / rect.width - dragOffset.current.x
    const y = (clientY - rect.top) / rect.height - dragOffset.current.y

    setPositions(current => ({
      ...current,
      [id]: {
        x: Math.max(halfWidth, Math.min(1 - halfWidth, x)),
        y: Math.max(.14 + halfHeight, Math.min(.91 - halfHeight, y)),
      },
    }))
  }

  const startDragging = (id: NodeId, event: PointerEvent<HTMLDivElement>) => {
    const rect = architectureRef.current?.getBoundingClientRect()
    if (!rect) return
    dragOffset.current = {
      x: (event.clientX - rect.left) / rect.width - positions[id].x,
      y: (event.clientY - rect.top) / rect.height - positions[id].y,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(id)
  }

  const moveWithKeyboard = (id: NodeId, event: KeyboardEvent<HTMLDivElement>) => {
    const direction = {
      ArrowLeft: [-.025, 0],
      ArrowRight: [.025, 0],
      ArrowUp: [0, -.025],
      ArrowDown: [0, .025],
    }[event.key]
    if (!direction) return
    event.preventDefault()
    const rect = architectureRef.current?.getBoundingClientRect()
    const node = architectureRef.current?.querySelector<HTMLElement>(`[data-node-id="${id}"]`)
    const halfWidth = rect ? Math.min(((node?.offsetWidth ?? 184) / 2 + 8) / rect.width, .3) : .18
    const halfHeight = rect ? Math.min(((node?.offsetHeight ?? 63) / 2 + 8) / rect.height, .11) : .08
    setPositions(current => ({
      ...current,
      [id]: {
        x: Math.max(halfWidth, Math.min(1 - halfWidth, current[id].x + direction[0])),
        y: Math.max(.14 + halfHeight, Math.min(.91 - halfHeight, current[id].y + direction[1])),
      },
    }))
  }

  const connectionPath = (from: NodeId, to: NodeId) => {
    const start = positions[from]
    const end = positions[to]
    const x1 = start.x * 1000
    const y1 = start.y * 1000
    const x2 = end.x * 1000
    const y2 = end.y * 1000
    const middle = (y1 + y2) / 2
    return `M ${x1} ${y1} C ${x1} ${middle}, ${x2} ${middle}, ${x2} ${y2}`
  }

  const connections: Array<[NodeId, NodeId]> = [
    ['frontDoor', 'appService'],
    ['frontDoor', 'identity'],
    ['appService', 'database'],
    ['identity', 'database'],
  ]

  return (
    <div className="architecture" ref={architectureRef} aria-label="Interactive cloud architecture topology. Drag the service nodes to rearrange it.">
      <div className="arch-grid" />
      <svg className="connections" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
        {connections.map(([from, to]) => <path key={`${from}-${to}`} d={connectionPath(from, to)} />)}
        {connections.map(([from, to], index) => <path className={`flow ${index % 2 ? 'flow-b' : ''}`} key={`flow-${from}-${to}`} d={connectionPath(from, to)} />)}
      </svg>
      <div className="arch-label arch-label-top"><span /> eu-west / production</div>
      <div className="arch-controls">
        <span>drag to rewire</span>
        <button type="button" onClick={() => setPositions(getInitialNodePositions())}>reset</button>
      </div>
      {architectureNodes.map(node => (
        <div
          className={`node ${dragging === node.id ? 'is-dragging' : ''}`}
          key={node.id}
          data-node-id={node.id}
          style={{ left: `${positions[node.id].x * 100}%`, top: `${positions[node.id].y * 100}%` }}
          role="button"
          tabIndex={0}
          aria-label={`${node.title}. Drag to reposition, or use the arrow keys.`}
          onPointerDown={event => startDragging(node.id, event)}
          onPointerMove={event => dragging === node.id && moveNode(node.id, event.clientX, event.clientY)}
          onPointerUp={() => setDragging(null)}
          onPointerCancel={() => setDragging(null)}
          onKeyDown={event => moveWithKeyboard(node.id, event)}
        >
          <span className={`node-icon ${node.tone}`}><Icon name={node.icon} size={22} /></span>
          <span><small>{node.label}</small>{node.title}</span>
          <i className="status-dot" />
        </div>
      ))}
      <div className="telemetry-pill"><Icon name="pulse" size={15} /> telemetry healthy</div>
    </div>
  )
}

function Hero() {
  return (
    <main id="top">
      <section className="hero shell">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="live-dot" /> Azure engineer · London, UK</div>
          <h1>Cloud systems,<br /><em>thoughtfully</em><br />architected.</h1>
          <p>I&apos;m Abdikarim. I design, build, and document secure Azure environments—turning architecture diagrams into reliable, repeatable infrastructure.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the builds <Icon name="arrow" size={17} /></a>
            <a className="button button-ghost" href="#about">My approach <Icon name="chevron" size={16} /></a>
          </div>
        </div>
        <div className="hero-visual reveal delay-1">
          <ArchitectureVisual />
        </div>
        <div className="hero-meta reveal delay-2">
          <div><span>FOCUS</span><strong>Azure architecture</strong></div>
          <div><span>METHOD</span><strong>Build · Measure · Learn</strong></div>
          <div><span>PORTFOLIO</span><strong>Growing in public</strong></div>
          <a href="#work" aria-label="Scroll to projects"><span>SCROLL TO EXPLORE</span><i><Icon name="chevron" size={15} /></i></a>
        </div>
      </section>

      <LogoTicker />
      <Projects />
      <Capabilities />
      <Principles />
      <Roadmap />
      <Contact />
    </main>
  )
}

function LogoTicker() {
  const items = ['AZURE', 'TERRAFORM', 'DOCKER COMPOSE', 'NGINX', 'FASTAPI', 'GITHUB ACTIONS', 'MONITOR']
  return (
    <div className="ticker" aria-label="Technologies">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}
      </div>
    </div>
  )
}

function SectionHeading({ number, label, title, body }: { number: string; label: string; title: ReactNode; body?: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{number}</span>{label}</div>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <button className="project-card-action" type="button" onClick={() => onOpen(project)} aria-label={`Read the ${project.title} case study`}>
        <div className="project-card-top"><span>{project.id}</span><span className={`project-status ${project.status}`}>{project.status}</span></div>
        <div className="project-icon"><Icon name="layers" size={28} /></div>
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="project-services">{project.services.map(service => <span key={service}>{service}</span>)}</div>
        <span className="project-read">Read case study <Icon name="arrow" size={16} /></span>
      </button>
    </article>
  )
}

function ProjectCaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => event.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <div className="project-dialog-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}>
      <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby={`project-title-${project.id}`}>
        <div className="project-dialog-header">
          <span className="project-dialog-id">CASE STUDY / {project.id}</span>
          <button className="project-close" type="button" onClick={onClose} ref={closeButtonRef} aria-label="Close case study"><Icon name="x" size={20} /></button>
        </div>
        <div className="project-dialog-content">
          <div className="project-dialog-intro">
            <span className={`project-status ${project.status}`}>{project.status}</span>
            <p className="project-category">{project.category}</p>
            <h2 id={`project-title-${project.id}`}>{project.title}</h2>
            <p>{project.caseStudy.overview}</p>
            <div className="project-services">{project.services.map(service => <span key={service}>{service}</span>)}</div>
          </div>

          <div className="case-study-section">
            <span className="case-study-label">Architecture flow</span>
            <div className="architecture-flow">
              {project.caseStudy.architecture.map((item, index) => (
                <div className="architecture-step" key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="case-study-section case-study-highlights">
            <span className="case-study-label">Key decisions</span>
            {project.caseStudy.highlights.map(item => (
              <article key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>
            ))}
          </div>

          <aside className="operating-note"><Icon name="pulse" size={18} /><p><strong>Current deployment state</strong>{project.caseStudy.operatingNote}</p></aside>
          <a className="button button-primary project-repository" href={project.repository} target="_blank" rel="noreferrer">View source on GitHub <Icon name="github" size={17} /></a>
        </div>
      </section>
    </div>
  )
}

type TerminalLine = { type: 'command' | 'response' | 'accent'; text: string }

const initialTerminalLines: TerminalLine[] = [
  { type: 'command', text: 'az portfolio list --status published' },
  { type: 'response', text: projects.length ? `Published builds: ${projects.map(project => project.title).join(' · ')}` : 'No published builds yet. Build 001 is in progress.' },
]

function InteractiveTerminal() {
  const [command, setCommand] = useState('')
  const [lines, setLines] = useState<TerminalLine[]>(initialTerminalLines)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [lines])

  const runCommand = () => {
    const value = command.trim()
    if (!value) return

    if (value.toLowerCase() === 'clear') {
      setLines([])
      setCommand('')
      return
    }

    const normalized = value.toLowerCase()
    let response = `Command not found: ${value}. Type "help" to see what works here.`
    let type: TerminalLine['type'] = 'response'

    if (normalized === 'help') {
      response = 'Commands: help · list · skills · roadmap · whoami · clear'
      type = 'accent'
    } else if (normalized === 'list' || normalized.includes('portfolio list')) {
      response = projects.length ? `Published builds: ${projects.map(project => project.title).join(' · ')}` : 'No published builds yet. Build 001 is currently in progress.'
    } else if (normalized === 'skills') {
      response = 'Azure · Terraform · Docker Compose · Nginx · FastAPI · Entra ID · Monitor'
      type = 'accent'
    } else if (normalized === 'roadmap') {
      response = '001 Containerized Azure web stack -> 002 Secure landing zone -> 003 Observable workload'
    } else if (normalized === 'whoami') {
      response = 'Abdikarim — Azure engineer, architecture thinker, documenting the climb.'
    } else if (normalized.includes('deploy')) {
      response = 'Deployment blocked here. Production changes travel through the secured pipeline.'
    }

    setLines(current => [...current, { type: 'command', text: value }, { type, text: response }])
    setCommand('')
  }

  return (
    <div className="empty-terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-bar"><i/><i/><i/><span>project-registry — interactive</span></div>
      <div className="terminal-body" ref={bodyRef} aria-live="polite">
        {lines.map((line, index) => (
          <p className={`terminal-line terminal-${line.type}`} key={`${line.text}-${index}`}>
            {line.type === 'command' && <span>~</span>}{line.text}
          </p>
        ))}
        <form className="terminal-prompt" onSubmit={event => { event.preventDefault(); runCommand() }}>
          <span>~</span>
          <input
            ref={inputRef}
            value={command}
            onChange={event => setCommand(event.target.value)}
            aria-label="Portfolio terminal command"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            maxLength={100}
            placeholder="type help and press enter"
          />
        </form>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="section projects shell" id="work">
      <SectionHeading number="01" label="Selected work" title={<>Built to be understood.<br /><em>Not just deployed.</em></>} body="Each project will unpack the architecture, infrastructure as code, security choices, observability, and the lessons learned along the way." />
      {projects.length > 0 ? (
        <div className="project-grid">{projects.map(project => <ProjectCard project={project} onOpen={setSelectedProject} key={project.id} />)}</div>
      ) : (
        <div className="empty-projects">
          <InteractiveTerminal />
          <div className="empty-copy">
            <span className="coming-badge">BUILD 001 · IN PROGRESS</span>
            <h3>The lab is booting up.</h3>
            <p>No filler case studies and no borrowed screenshots. The first real Azure build is being prepared, and this space will grow one documented deployment at a time.</p>
            <a href="#roadmap">See what&apos;s in the pipeline <Icon name="arrow" size={16} /></a>
          </div>
        </div>
      )}
      {selectedProject && <ProjectCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

const capabilities = [
  { icon: 'network' as IconName, code: '01', title: 'Cloud architecture', text: 'Translating requirements into clear, resilient Azure topologies with intentional boundaries.' },
  { icon: 'braces' as IconName, code: '02', title: 'Infrastructure as code', text: 'Repeatable environments expressed in Bicep or Terraform, reviewed and version controlled.' },
  { icon: 'shield' as IconName, code: '03', title: 'Security by design', text: 'Identity, least privilege, network controls, policy, and secrets considered from the first diagram.' },
  { icon: 'pulse' as IconName, code: '04', title: 'Operations & insight', text: 'Telemetry, alerts, dashboards, and runbooks that make systems understandable after deployment.' },
]

function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="shell">
        <SectionHeading number="02" label="Capabilities" title={<>From blank canvas<br />to <em>operational cloud.</em></>} />
        <div className="capability-grid">
          {capabilities.map(item => (
            <article className="capability-card" key={item.code}>
              <div className="capability-number">{item.code}</div>
              <div className="capability-icon"><Icon name={item.icon} size={25} /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="capability-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section className="section principles shell" id="about">
      <div className="principles-visual">
        <div className="orbit orbit-one"><span /></div>
        <div className="orbit orbit-two"><span /></div>
        <div className="orbit orbit-three"><span /></div>
        <div className="principle-core"><Icon name="azure" size={46} /><small>ENGINEERING<br />MINDSET</small></div>
        <span className="orbit-label label-secure"><Icon name="lock" size={14} /> SECURE</span>
        <span className="orbit-label label-repeat"><Icon name="copy" size={14} /> REPEATABLE</span>
        <span className="orbit-label label-observe"><Icon name="pulse" size={14} /> OBSERVABLE</span>
      </div>
      <div className="principles-copy">
        <SectionHeading number="03" label="How I think" title={<>Architecture is a<br /><em>set of decisions.</em></>} />
        <p className="lead">A good cloud diagram is only the start. I care about why a service belongs, how it fails, who can access it, what it costs, and whether another engineer can rebuild it.</p>
        <ul>
          <li><span><Icon name="check" size={16} /></span><div><strong>Start with the why</strong><p>Business and user needs shape the service choices—not the other way around.</p></div></li>
          <li><span><Icon name="check" size={16} /></span><div><strong>Automate the repeatable</strong><p>If it matters twice, it belongs in code, a pipeline, or a runbook.</p></div></li>
          <li><span><Icon name="check" size={16} /></span><div><strong>Document the trade-offs</strong><p>The thinking behind a build is as valuable as the final resource group.</p></div></li>
        </ul>
      </div>
    </section>
  )
}

function Roadmap() {
  return (
    <section className="section roadmap" id="roadmap">
      <div className="shell">
        <SectionHeading number="04" label="Build queue" title={<>What&apos;s entering<br />the <em>cloud lab.</em></>} body="A public roadmap keeps the momentum visible—and every finished build graduates into a full case study above." />
        <div className="roadmap-list">
          {roadmap.map((item, index) => (
            <article key={item.id}>
              <div className="roadmap-id">{item.id}</div>
              <div className="roadmap-marker"><span className={index === 0 ? 'active' : ''} /></div>
              <div className="roadmap-content"><h3>{item.title}</h3><p>{item.detail}</p></div>
              <div className={`roadmap-status ${index === 0 ? 'active' : ''}`}>{item.status}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact shell" id="contact">
      <div className="contact-card">
        <div className="contact-glow" />
        <div className="contact-top"><span className="live-dot" /> OPEN TO CLOUD CONVERSATIONS</div>
        <h2>Have an architecture<br />worth <em>thinking through?</em></h2>
        <p>I&apos;m always happy to talk Azure, compare approaches, and connect with people who enjoy building reliable systems.</p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:hello@abdikarim.cloud"><Icon name="mail" size={17} /> hello@abdikarim.cloud</a>
          <a className="button button-outline" href="https://github.com/abdikarimahmed" target="_blank" rel="noreferrer"><Icon name="github" size={17} /> GitHub</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer shell">
      <Brand />
      <p>Designed &amp; engineered in London · Built to evolve.</p>
      <a href="#top">Back to top <span>↑</span></a>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.section-heading, .project-card, .capability-card, .empty-projects, .principles-visual, .principles-copy, .roadmap-list article').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
