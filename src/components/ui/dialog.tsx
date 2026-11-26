// shadcn/ui Dialog composition, adapted for the portfolio. See THIRD_PARTY_NOTICES.md.
import type { ComponentProps, ReactNode } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close
export const DialogTitle = DialogPrimitive.Title
export const DialogDescription = DialogPrimitive.Description
export function DialogContent({ children, className, ...props }: ComponentProps<typeof DialogPrimitive.Content> & { children: ReactNode }) {
  return <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="dialog-overlay" />
    <DialogPrimitive.Content className={cn('dialog-content', className)} {...props}>
      {children}
      <DialogPrimitive.Close className="dialog-close button button-icon button-ghost" aria-label="Close dialog"><X size={20} aria-hidden="true" /></DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
}
