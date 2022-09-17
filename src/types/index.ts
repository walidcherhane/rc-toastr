export type Variant = 'success' | 'error' | 'warning' | 'info' | 'default'

export type Toast = {
  id: string
  title?: string
  renderIcon?: (type: Variant) => JSX.Element
  message: string
  type: Variant
  order: number
  createdAt: Date
}

export type TProps = {
  toast: Toast
  onClose: (id: string) => void
  toasts: Toast[]
  onClick?: () => void
  expanded?: boolean
}
