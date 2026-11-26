export const site = {
  name: 'Abdikarim',
  fullName: 'Abdikarim Ahmed',
  url: 'https://abdikarim.cloud',
  title: 'Abdikarim — IT, cloud & software engineering',
  description: 'Enterprise IT experience, hands-on Azure infrastructure and independent software projects. Abdikarim Ahmed, based in London.',
  location: 'London, United Kingdom',
  email: 'hello@abdikarim.cloud',
  github: 'https://github.com/Karim-codes',
  linkedin: 'https://www.linkedin.com/in/abdikarim-ahmed/',
  cv: undefined as string | undefined,
  portrait: undefined as string | undefined,
  availability: { enabled: false, label: '' },
  navigation: [
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certifications', href: '/certifications' },
  ],
} as const

export const experience = [
  {
    company: 'KFC UK & Ireland', parent: 'Yum! Brands', mark: 'KFC',
    title: 'RSC IT Support Engineer — Second Line', dates: 'November 2024 – Present', current: true,
    summary: 'Supporting the people and technology behind enterprise operations. Working across workplace systems, identity, endpoints and the day-to-day reliability of IT.',
    groups: [
      { title: 'Workplace & identity', body: 'Microsoft 365 and Microsoft Entra ID administration. Windows and macOS support, Jamf Pro, Apple Business Manager, employee onboarding and offboarding.' },
      { title: 'Operations & delivery', body: 'Second-line incident resolution through ServiceNow, endpoint and hardware lifecycle management, enterprise device deployment, and AV and meeting room technology.' },
      { title: 'People & process', body: 'Technical documentation, operational process improvement, stakeholder engagement and collaboration across technology teams.' },
    ],
    secondment: {
      title: 'Kiosk Engineering', label: 'Engineering secondment',
      body: 'Additional software engineering experience within KFC / Yum! Brands. Working with React and TypeScript in a large monorepo alongside experienced software engineers.',
      practices: ['Git workflows and pull requests', 'Code review and debugging', 'Unit and end-to-end testing', 'Technical debt improvements'],
    },
  },
  {
    company: 'Douglas & Gordon', parent: 'University industrial placement', mark: 'D&G',
    title: 'Information Technology Support Engineer', dates: 'Industrial placement', current: false,
    summary: 'A year in industry as part of my Computer Science degree, building practical experience in a professional IT support environment.',
    groups: [],
  },
] as const

export const expertise = [
  { icon: 'server', title: 'IT Infrastructure', description: 'Enterprise systems and IT operations.', detail: 'Microsoft 365 · Entra ID · Endpoint management', href: '/experience' },
  { icon: 'cloud', title: 'Cloud Engineering', description: 'Microsoft Azure and infrastructure as code.', detail: 'Azure · Terraform · Linux · Networking', href: '/projects?category=Cloud+%26+infrastructure' },
  { icon: 'code', title: 'Software Development', description: 'Web applications and software engineering.', detail: 'React · TypeScript · Git · Automated testing', href: '/projects?category=Applications' },
  { icon: 'shield', title: 'Cybersecurity', description: 'Identity, endpoint and infrastructure security.', detail: 'Access control · Endpoint security · Network security', href: '/about#technical-expertise' },
] as const

export const technicalSkills = [
  { title: 'IT infrastructure & operations', context: 'Professional experience', items: ['Enterprise IT support', 'Microsoft 365', 'Microsoft Entra ID', 'Active Directory', 'Windows & macOS', 'Jamf Pro', 'Apple Business Manager', 'Endpoint management', 'ServiceNow', 'Device lifecycle', 'Incident management', 'Technical documentation', 'AV & workplace technology'] },
  { title: 'Cloud & infrastructure', context: 'Hands-on personal projects', items: ['Microsoft Azure', 'Virtual Networks', 'Network Security Groups', 'Virtual machines', 'Terraform', 'Infrastructure as code', 'Linux', 'DNS', 'Nginx', 'Networking fundamentals'] },
  { title: 'Software engineering', context: 'Engineering secondment & personal projects', items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Git', 'REST APIs', 'Unit testing', 'End-to-end testing'] },
  { title: 'Security', context: 'Professional practice & ongoing study', items: ['Identity & access management', 'Endpoint security', 'Access control', 'Network security fundamentals', 'Cloud security fundamentals', 'CompTIA Security+ study'] },
] as const

export interface Certification { title: string; issuer: string; exam: string; status: 'Achieved' | 'In progress'; date?: string; verificationUrl?: string; mark: 'microsoft' | 'jamf' | 'comptia' }
export const certifications: Certification[] = [
  { title: 'Azure Fundamentals', issuer: 'Microsoft Certified', exam: 'AZ-900', status: 'Achieved', date: 'July 2026', mark: 'microsoft' },
  { title: 'Jamf Certified Associate', issuer: 'Jamf', exam: 'Jamf 100', status: 'Achieved', date: 'July 2026', mark: 'jamf' },
  { title: 'Azure Administrator Associate', issuer: 'Microsoft Certified', exam: 'AZ-104', status: 'In progress', mark: 'microsoft' },
  { title: 'CompTIA Security+', issuer: 'CompTIA', exam: 'SY0-701', status: 'In progress', mark: 'comptia' },
]

export const education = { university: 'Brunel University London', degree: 'BSc Computer Science', dates: '2020–2024', grade: 'Upper Second-Class Honours (2:1)', detail: 'Including a one-year industrial placement.' } as const

export const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': { title: site.title, description: site.description },
  '/about': { title: 'About — Abdikarim', description: 'A Computer Science background, enterprise IT experience and a practical interest in secure cloud infrastructure and software engineering.' },
  '/experience': { title: 'Experience — Abdikarim', description: 'Professional experience at KFC UK & Ireland / Yum! Brands, a kiosk engineering secondment and a university IT support placement.' },
  '/projects': { title: 'Projects — Abdikarim', description: 'Explore Azure infrastructure, Qasd, Shaanis, PolyGlotPDF and iTinyri, alongside Minaarly, an app I co-own and built with a friend.' },
  '/certifications': { title: 'Certifications — Abdikarim', description: 'Achieved Azure Fundamentals and Jamf qualifications, with Azure Administrator and Security+ studies in progress.' },
  '/contact': { title: 'Contact — Abdikarim', description: 'Connect with Abdikarim Ahmed in London through LinkedIn, GitHub or professional email.' },
}
