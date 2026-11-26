import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { projectRegistry } from './content/projects.ts'

const publicProjects = projectRegistry.filter(project => project.published).sort((a, b) => a.order - b.order)

for (const project of publicProjects) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) throw new Error(`Invalid project slug: ${project.slug}`)
  if (!project.overview || !project.problem || !project.approach) throw new Error(`Incomplete case study: ${project.slug}`)
}
if (new Set(publicProjects.map(project => project.slug)).size !== publicProjects.length) throw new Error('Duplicate project slug')

export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'published-portfolio-content',
    resolveId(id) { if (id === 'virtual:portfolio-projects') return '\0virtual:portfolio-projects' },
    load(id) { if (id === '\0virtual:portfolio-projects') return `export default ${JSON.stringify(publicProjects)}` },
  }],
})
