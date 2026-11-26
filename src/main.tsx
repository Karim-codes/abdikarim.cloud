import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import './styles.css'

const container = document.getElementById('root')!
const app = <StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>
const routeMatches = container.dataset.route === (window.location.pathname.replace(/\/$/, '') || '/')
if (container.childElementCount > 0 && routeMatches) hydrateRoot(container, app)
else createRoot(container).render(app)
