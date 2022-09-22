export type Variant = 'success' | 'error' | 'warning' | 'info' | 'default'

export type Toast = {
  id: number
  title?: string
  message: string
  type: Variant
  createdAt: Date
}

export type TProps = {
  toast: Toast
  onClose: (id: string) => void
  toasts: Toast[]
  onClick?: () => void
  expanded?: boolean
}
