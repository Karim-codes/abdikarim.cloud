import type { SVGProps } from 'react'
type Props = SVGProps<SVGSVGElement> & { size?: number }
// Brand identifiers are separate from Lucide's interface icon set.
export function Github({ size = 20, ...props }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.71-1.48-2.48-.28-5.08-1.24-5.08-5.51 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.78 1.14 3 0 4.28-2.61 5.23-5.1 5.5.4.35.76 1.03.76 2.07v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>
}
export function Linkedin({ size = 20, ...props }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3ZM6.5 7.6a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-5c0-1.2-.3-2-1.5-2s-1.8.8-1.8 2v5h-3V9h2.9v1.4a3.2 3.2 0 0 1 2.9-1.7c3.1 0 3.5 2 3.5 4.6Z" /></svg>
}
