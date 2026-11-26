/// <reference types="vite/client" />

declare module 'virtual:portfolio-projects' {
  const projects: import('./types').Project[]
  export default projects
}
