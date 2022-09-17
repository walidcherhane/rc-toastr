import * as React from 'react'
import ToastContainer from '../components/ToastContainer'
import { Toast, Variant } from '../types'
type ToastContext = {
  toast: (message: string, variant?: Variant) => void
  close: (id: string) => void
  clearToasts: () => void
  config: Config
  updateConfig: (config: Config) => void
  toasts: Toast[]
}

type Config = {
  duration?: number
  position:
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
  config: Config
}) => {
  const [toasts, setToasts] = React.useState<Toast[]>([])
  const [config, updateConfig] = React.useState(_config)

  React.useEffect(() => {
    if (toasts.length > (config.maxToasts ?? 3)) {
      setToasts(() => toasts.slice(1))
    }
  }, [toasts])

  const toast = (message: string, variant?: Variant) => {
    setToasts(() => [
      ...toasts,
      {
        id: Math.floor(Math.random() * 1000).toString(),
        order: toasts.length > 0 ? toasts[toasts.length - 1].order + 1 : 1,
        createdAt: new Date(),
        message: message,
        type: variant ?? 'default'
      }
    ])
  }

  const close = (id: string) => {
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
