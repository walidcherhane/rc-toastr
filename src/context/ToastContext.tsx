import * as React from 'react'
import ToastContainer from '../components/ToastContainer'
import { theme } from '../theme'
import { Toast, Variant } from '../types'

type Tvarients = {
  (message: string, variant?: Variant): void
  success: (message: string) => void
  error: (message: string) => void
  warning: (message: string) => void
  info: (message: string) => void
  default: (message: string) => void
}
type ToastContext = {
  toast: Tvarients
  close: (id: number) => void
  clearToasts: () => void
  config: RequiredConfig
  updateConfig: (config: RequiredConfig) => void
  toasts: Toast[]
}

type Config = {
  duration?: number
  position?:
    | 'top'
    | 'bottom'
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
  pauseOnHover?: boolean
  autoClose?: boolean
  showProgressBar?: boolean
  zIndex?: number
  maxToasts?: number
  renderToastIcon?: (type: Toast['type']) => JSX.Element
  toastBackgroundColor?: (type: Toast['type']) => string
}

type RequiredConfig = {
  [K in keyof Config]-?: Config[K]
}

const ToastContext = React.createContext({} as ToastContext)

export const useToast = () => {
  if (!ToastContext.Provider) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return React.useContext(ToastContext)
}

export const ToastProvider = ({
  children,
  config: _config
}: {
  children: JSX.Element
  config?: Config
}) => {
  const DEFAULT_TOAST_CONFIG: RequiredConfig = {
    position: _config?.position ?? 'top',
    autoClose: _config?.autoClose ?? true,
    duration: _config?.duration ?? 5000,
    maxToasts: _config?.maxToasts ?? 3,
    pauseOnHover: _config?.pauseOnHover ?? true,
    showProgressBar: _config?.showProgressBar ?? true,
    zIndex: _config?.zIndex ?? 30,
    renderToastIcon: _config?.renderToastIcon ?? ((type) => theme.icons[type]),
    toastBackgroundColor:
      _config?.toastBackgroundColor ?? ((type) => theme.colors[type])
  }
  const [toasts, setToasts] = React.useState<Toast[]>([])
  const [config, updateConfig] = React.useState(DEFAULT_TOAST_CONFIG)

  React.useEffect(() => {
    if (toasts.length > config.maxToasts) {
      setToasts(() => toasts.slice(1))
    }
  }, [toasts])

  const toast: Tvarients = (message: string, variant?: Variant) => {
    setToasts(() => [
      ...toasts,
      {
        id: toasts.length > 0 ? toasts[toasts.length - 1].id + 1 : 1,
        createdAt: new Date(),
        message: message,
        type: variant ?? 'default'
      }
    ])
  }

  toast.success = (message: string) => toast(message, 'success')
  toast.error = (message: string) => toast(message, 'error')
  toast.warning = (message: string) => toast(message, 'warning')
  toast.info = (message: string) => toast(message, 'info')
  toast.default = (message: string) => toast(message, 'default')

  const close = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id))
  }

  const clearToasts = () => {
    setToasts([])
  }

  return (
    <ToastContext.Provider
      value={{ toast, clearToasts, config, close, updateConfig, toasts }}
    >
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  )
}
