import publishedProjects from 'virtual:portfolio-projects'
export const projects = publishedProjects
export const featuredProjects = projects.filter(project => project.featured)
export const categories = [...new Set(projects.map(project => project.category))]
