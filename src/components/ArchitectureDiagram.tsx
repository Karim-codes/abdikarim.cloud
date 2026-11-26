import { Expand } from 'lucide-react'
import { useId } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog'

export function AzureMark({ size = 24 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.5 3H13L5.7 21H1L5.5 3Zm8.8 0H19l5 18H10.6l2.1-5h5.1L14.3 3Z" /></svg>
}
export function ArchitectureDiagram({ compact = false }: { compact?: boolean }) {
  const titleId = useId()
  return <div className={`azure-diagram ${compact ? 'compact-diagram' : ''}`}>
    <svg viewBox="0 0 760 440" role="img" aria-labelledby={titleId}>
      <title id={titleId}>Azure lab: HTTPS traffic through an NSG to an Nginx Linux VM in the public subnet. A separate private subnet has no workload shown. Terraform defines the foundation.</title>
      <g className="diagram-lines" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M380 74v53M380 171v60M380 311v43" /><path d="M161 290h80" strokeDasharray="4 5" /></g>
      <rect className="vnet-box" x="28" y="114" width="704" height="304" rx="8" />
      <image href="/icons/azure/virtual-network.svg" x="48" y="128" width="22" height="22" /><text className="diagram-section" x="80" y="143">AZURE VIRTUAL NETWORK</text><text className="diagram-code" x="578" y="143">10.0.0.0/16</text>
      <rect className="subnet-box" x="48" y="178" width="414" height="211" rx="5" />
      <text className="diagram-label" x="66" y="204">Public subnet</text><text className="diagram-code" x="313" y="204">10.0.1.0/24</text>
      <rect className="private-box" x="482" y="178" width="230" height="211" rx="5" strokeDasharray="5 5" />
      <text className="diagram-label" x="500" y="204">Private subnet</text><text className="diagram-code" x="500" y="226">10.0.2.0/24</text>
      <g className="diagram-node"><rect x="281" y="24" width="198" height="50" rx="5" /><circle cx="309" cy="49" r="10" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M299 49h20M309 39c-5 5-5 15 0 20 5-5 5-15 0-20" fill="none" stroke="currentColor" strokeWidth="1.1" /><text x="330" y="54">Internet · HTTPS</text></g>
      <g className="diagram-node"><rect x="298" y="126" width="164" height="45" rx="5" /><image href="/icons/azure/network-security-group.svg" x="310" y="136" width="25" height="25" /><text x="343" y="153">NSG</text></g>
      <g className="compute-node"><rect x="241" y="238" width="202" height="75" rx="5" /><image href="/icons/azure/virtual-machine.svg" x="258" y="254" width="25" height="25" /><text x="298" y="267">Linux virtual machine</text><text className="diagram-code" x="298" y="289">Nginx web server</text></g>
      <g className="diagram-node"><rect x="68" y="265" width="110" height="48" rx="5" /><text x="87" y="294">Terraform</text></g>
      <text className="diagram-code" x="274" y="363">DNS · TLS certificates</text>
      <path className="diagram-lines" d="M588 272v-9a9 9 0 0 1 18 0v9m-23 0h28v23h-28z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text className="diagram-note" x="523" y="326">No workload shown</text>
    </svg>
  </div>
}
export function ExpandableArchitecture() {
  return <figure className="case-diagram"><div className="diagram-topline"><span><AzureMark size={17} />Lab architecture</span><Dialog><DialogTrigger asChild><Button variant="ghost" size="small"><Expand size={14} aria-hidden="true" />Expand diagram</Button></DialogTrigger><DialogContent className="diagram-dialog"><DialogTitle>Azure Infrastructure Lab</DialogTitle><DialogDescription>Implemented lab network. On smaller screens, scroll horizontally to inspect the diagram.</DialogDescription><div className="diagram-scroll" tabIndex={0} role="region" aria-label="Scrollable Azure architecture diagram"><ArchitectureDiagram /></div></DialogContent></Dialog></div><ArchitectureDiagram /><figcaption>Implemented lab configuration. Private subnet shown without a workload. The planned services below are not deployed.</figcaption></figure>
}
