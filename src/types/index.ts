export type Variant =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'default'
  | 'loading'

export type Toast = {
  id: number
  message: string
  type: Variant
  createdAt: Date
}
