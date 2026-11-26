import { useEffect, useState, useRef } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'

type Theme = 'light' | 'dark' | 'system'
export function ThemePicker() {
  const [theme, setTheme] = useState<Theme>('system')
  const ref = useRef<HTMLDetailsElement>(null)
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      let preference: Theme = 'system'
      try { const stored = localStorage.getItem('portfolio-theme'); if (stored === 'light' || stored === 'dark') preference = stored } catch { /* Storage can be disabled. */ }
      setTheme(preference)
      const resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference
      document.documentElement.setAttribute('data-theme', resolved)
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#191a1c' : '#f7f6f2')
    }
    apply()
    media.addEventListener('change', apply)
    window.addEventListener('storage', apply)
    const dismiss = (event: PointerEvent) => { if (!ref.current?.contains(event.target as Node)) ref.current?.removeAttribute('open') }
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape' && ref.current?.open) { ref.current.open = false; ref.current.querySelector('summary')?.focus() } }
    document.addEventListener('pointerdown', dismiss)
    document.addEventListener('keydown', escape)
    return () => { media.removeEventListener('change', apply); window.removeEventListener('storage', apply); document.removeEventListener('pointerdown', dismiss); document.removeEventListener('keydown', escape) }
  }, [])
  const choose = (value: Theme) => {
    setTheme(value)
    try { localStorage.setItem('portfolio-theme', value) } catch { /* Theme still works without persistence. */ }
    const resolved = value === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : value
    document.documentElement.setAttribute('data-theme', resolved)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#191a1c' : '#f7f6f2')
    if (ref.current) { ref.current.open = false; ref.current.querySelector('summary')?.focus() }
  }
  return <details className="theme-picker" ref={ref}>
    <summary className="icon-link" aria-label="Choose colour theme"><Sun className="theme-sun" size={18} aria-hidden="true" /><Moon className="theme-moon" size={18} aria-hidden="true" /></summary>
    <fieldset className="theme-options"><legend className="sr-only">Colour theme</legend>
      {([{ value: 'light', label: 'Light', icon: Sun }, { value: 'dark', label: 'Dark', icon: Moon }, { value: 'system', label: 'System', icon: Monitor }] as const).map(({ value, label, icon: Icon }) => <label key={value}><Icon size={16} aria-hidden="true" /><span>{label}</span><input type="radio" name="theme" value={value} checked={theme === value} onChange={() => choose(value)} /></label>)}
    </fieldset>
  </details>
}
