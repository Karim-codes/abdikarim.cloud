export type ProjectStatus = 'live' | 'building' | 'planned'

export type Project = {
  id: string
  title: string
  summary: string
  status: ProjectStatus
  category: string
  services: string[]
  accent: 'azure' | 'violet' | 'mint'
  links?: Array<{
    label: string
    href: string
  }>
}

// Add completed Azure builds here. The UI handles an empty list intentionally,
// so the portfolio never needs fake placeholder case studies.
export const projects: Project[] = [
  {
    id: '001',
    title: 'Azure Containerized Web Architecture',
    summary: 'A production-oriented web stack in Azure UK South using Terraform for the network and VM, Docker Compose for container orchestration, Nginx as the reverse proxy, and FastAPI for the application dashboard.',
    status: 'live',
    category: 'Container platform',
    services: ['Azure VM', 'VNet', 'NSG', 'Terraform', 'Docker Compose', 'Nginx', 'FastAPI', 'Let\'s Encrypt'],
    accent: 'azure',
    links: [
      { label: 'Live demo', href: 'https://cloudProject.coderaxa.com' },
      { label: 'GitHub repo', href: 'https://github.com/Karim-codes/azure-container-architecture' },
    ],
  },
]

export const roadmap = [
  {
    id: '01',
    title: 'Containerized Azure web stack',
    detail: 'Provisioned Azure infrastructure with Terraform, deployed a Dockerized FastAPI app behind Nginx, and documented the production path.',
    status: 'Published',
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
