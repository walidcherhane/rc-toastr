import * as React from 'react'
import ToastContainer from '../components/ToastContainer'
import ToastContent from '../components/ToastContent'
import { theme } from '../theme'
import { Toast, Variant } from '../types'

type Tvarients = {
  (message: string, variant?: Variant): Toast['id']
  success: (message: string) => void
  error: (message: string) => void
  warning: (message: string) => void
  info: (message: string) => void
  default: (message: string) => void
  loading: <T>(
    promise: Promise<T>,
    {
      loading,
      success,
      error
    }: {
      loading: string
      success: string | ((data: T) => void)
      error: string | ((error: unknown) => void)
    }
  ) => Promise<T | undefined>
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
  renderAs?: ({
    toast,
    onClose,
    visible,
    showProgressBar,
    progress
  }: {
    toast: Toast
    onClose: (id: number) => void
    visible: boolean
    showProgressBar: boolean
    progress: number
  }) => JSX.Element | React.ReactElement
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
      _config?.toastBackgroundColor ?? ((type) => theme.colors[type]),
    renderAs: _config?.renderAs ?? ((props) => <ToastContent {...props} />)
  }
  const [toasts, setToasts] = React.useState<Toast[]>([])
  const [config, updateConfig] = React.useState(DEFAULT_TOAST_CONFIG)

  React.useEffect(() => {
    if (toasts.length > config.maxToasts) {
      setToasts(() => toasts.slice(1))
    }
  }, [toasts])

  const toast: Tvarients = (message: string, variant?: Variant) => {
    const id = toasts.length > 0 ? toasts[toasts.length - 1].id + 1 : 1
    setToasts(() => [
      ...toasts,
      {
        id,
        createdAt: new Date(),
        message: message,
        type: variant ?? 'default'
      }
    ])
    return id
  }

  toast.success = (message: string) => toast(message, 'success')
  toast.error = (message: string) => toast(message, 'error')
  toast.warning = (message: string) => toast(message, 'warning')
  toast.info = (message: string) => toast(message, 'info')
  toast.default = (message: string) => toast(message, 'default')
  toast.loading = async (promise, { loading, success, error }) => {
    const loadingId = toast(loading, 'loading')
    try {
      const res = await promise
      close(loadingId)
      if (typeof success === 'string') {
        toast(success, 'success')
      } else {
        success(res)
      }
      return res
    } catch (err) {
      close(loadingId)
      if (typeof error === 'string') {
        toast(error, 'error')
      } else {
        error(err)
      }
    }
  }

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
