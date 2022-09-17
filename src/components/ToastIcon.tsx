import { useToast } from '../context/ToastContext'
import { theme } from '../theme'
import { Variant } from '../types'

const ToastIcon = ({ type }: { type: Variant }) => {
  const { config } = useToast()
  if (config.renderToastIcon) {
    return config.renderToastIcon(type)
  }
  return theme.icons[type]
}

export default ToastIcon
