import { useToast } from '../context/ToastContext'
import { Variant } from '../types'

const ToastIcon = ({ type }: { type: Variant }) => {
  const { config } = useToast()
  return config.renderToastIcon(type)
}

export default ToastIcon
