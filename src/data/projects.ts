export type ProjectStatus = 'live' | 'building' | 'planned'

export type Project = {
  id: string
  title: string
  summary: string
  status: ProjectStatus
  category: string
  services: string[]
  accent: 'azure' | 'violet' | 'mint'
  href?: string
}

// Add completed Azure builds here. The UI handles an empty list intentionally,
// so the portfolio never needs fake placeholder case studies.
export const projects: Project[] = []

export const roadmap = [
  {
    id: '01',
    title: 'Cloud portfolio platform',
    detail: 'Ship this portfolio through an automated Azure deployment pipeline.',
    status: 'Now',
  },
  {
    id: '02',
    title: 'Secure landing zone',
    detail: 'Design a governed multi-subscription foundation with policy as code.',
    status: 'Next',
  },
  {
    id: '03',
    title: 'Observable workload',
    detail: 'Build, monitor, load-test, and document a production-minded service.',
    status: 'Queued',
  },
]
