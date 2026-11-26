export type ProjectStatus = 'Completed' | 'In development' | 'Experimental' | 'Planned' | 'Archived'
export type ProjectCategory = 'Cloud & infrastructure' | 'Applications' | 'AI & automation' | 'Games'
export interface ProjectSection { title: string; body: string }
export interface Project {
  slug: string
  title: string
  subtitle: string
  summary: string
  category: ProjectCategory
  status: ProjectStatus
  published: boolean
  featured: boolean
  order: number
  lastUpdated: string
  stack: string[]
  preview: 'azure' | 'qasd' | 'shaanis' | 'itinyri' | 'web' | 'none'
  screenshots: { src: string; srcSet?: string; width?: number; height?: number; alt: string; caption: string }[]
  repository?: string
  liveUrl?: string
  appStoreUrl?: string
  overview: string
  problem: string
  approach: string
  implemented: string[]
  planned: string[]
  decisions: ProjectSection[]
  challenges: ProjectSection[]
  lessons: string
  statusNote: string
}
