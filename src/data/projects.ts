export type ProjectStatus = 'published' | 'building' | 'planned'

export type Project = {
  id: string
  title: string
  summary: string
  status: ProjectStatus
  category: string
  services: string[]
  accent: 'azure' | 'violet' | 'mint'
  repository: string
  caseStudy: {
    overview: string
    architecture: Array<{
      title: string
      detail: string
    }>
    highlights: Array<{
      title: string
      detail: string
    }>
    operatingNote: string
  }
}

// Add completed Azure builds here. The UI handles an empty list intentionally,
// so the portfolio never needs fake placeholder case studies.
export const projects: Project[] = [
  {
    id: '001',
    title: 'Azure Containerized Web Architecture',
    summary: 'A production-oriented web stack in Azure UK South using Terraform for the network and VM, Docker Compose for container orchestration, Nginx as the reverse proxy, and FastAPI for the application dashboard.',
    status: 'published',
    category: 'Container platform',
    services: ['Azure VM', 'VNet', 'NSG', 'Terraform', 'Docker Compose', 'Nginx', 'FastAPI', 'Let\'s Encrypt'],
    accent: 'azure',
    repository: 'https://github.com/Karim-codes/azure-container-architecture',
    caseStudy: {
      overview: 'This project documents a practical path from Azure infrastructure to a running containerized web application. Terraform defines the Azure environment, Docker Compose runs the application stack, and Nginx provides the public reverse-proxy layer in front of a FastAPI dashboard.',
      architecture: [
        { title: 'Azure foundation', detail: 'A resource group in UK South contains a virtual network, subnet, static public IP address, network security group, network interface, and Ubuntu virtual machine.' },
        { title: 'Network boundary', detail: 'The NSG permits public HTTP and HTTPS traffic for the application while SSH access is scoped to the configured administrator IP address.' },
        { title: 'Container runtime', detail: 'Docker Compose coordinates the FastAPI API, Nginx reverse proxy, and Certbot services on the virtual machine.' },
        { title: 'Application delivery', detail: 'Nginx receives web traffic and proxies the application routes to FastAPI. Certbot uses the webroot flow to obtain and renew TLS certificates.' },
      ],
      highlights: [
        { title: 'Infrastructure as code', detail: 'The Azure resources are expressed in Terraform so the foundation is reviewable, repeatable, and version controlled.' },
        { title: 'Production-minded security', detail: 'The build separates public web access from administration and keeps Terraform state out of source control, with a remote encrypted backend recommended for team or production use.' },
        { title: 'Cost awareness', detail: 'The project includes a small monthly Azure budget and alert thresholds, with the virtual machine deallocated outside of demonstration periods.' },
      ],
      operatingNote: 'The public demo was intentionally taken offline when the virtual machine was powered down. The source, deployment configuration, and documentation remain available in the repository.',
    },
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
