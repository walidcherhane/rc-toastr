import * as React from 'react'
import { motion } from 'framer-motion'
import { useToast } from '../context/ToastContext'
import { theme } from '../theme'
import { darken } from '../utils'
import ToastContent from './ToastContent'
import type { TProps } from '../types'
import styles from './Toast.module.css'
const Toast = ({ toast, onClick, expanded }: TProps) => {
  const { config, toasts, close } = useToast()
  const isOld = toasts.find((t) => t.order > toast.order)
  const allNextToasts = toasts.filter((t) => t.order > toast.order)
  const collapsed = Boolean(!expanded && isOld)
  const [progress, setProgress] = React.useState(100)
  const [isHovered, setIsHovered] = React.useState(false)
  const toastRef = React.useRef<HTMLDivElement>(null)
  const css = {
    toast: {
      container: styles.container,
      loader: styles.loader,
      inner: styles.inner
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  React.useEffect(() => {
    const toast = toastRef.current
    if (toast && config.pauseOnHover) {
      toast.addEventListener('mouseenter', handleMouseEnter)
      toast.addEventListener('mouseleave', handleMouseLeave)
    }
  }, [toastRef])

  React.useEffect(() => {
    if (isHovered) return
    if (progress >= 0 && config.autoClose) {
      const interval = setInterval(() => {
        setProgress((progress) => progress - 1)
      }, (config.duration ?? 5000) / 100)
      if (progress === 0) {
        close(toast.id)
      }
      return () => clearInterval(interval)
    }
  }, [progress, isHovered])

  return (
    <motion.div layout ref={toastRef} className={css.toast.container}>
      <motion.div
        layout
        initial={{
          opacity: 0,
          x: config.position.includes('left')
            ? -100
            : config.position.includes('right')
            ? 100
            : 0,
          y: 0
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0
        }}
        exit={{
          opacity: 0,
          x: config.position.includes('left')
            ? -100
            : config.position.includes('right')
            ? 100
            : 0,
          y: config.position.includes('top') ? -100 : 0
        }}
        transition={{
          duration: 0.15,
          easing: 'easeInOut'
        }}
        style={{
          marginLeft: collapsed
            ? allNextToasts.reduce(
                (acc, curr) => acc + toasts.indexOf(curr),
                0
              ) *
                10 +
              10
            : 0,
          marginRight: collapsed
            ? allNextToasts.reduce(
                (acc, curr) => acc + toasts.indexOf(curr),
                0
              ) *
                10 +
              10
            : 0,
          backgroundColor:
            config.toastBackgroundColor?.(toast.type) ??
            theme.colors[toast.type],
          borderRadius: collapsed
            ? config.position.includes('top')
              ? `0 0 20px 20px`
              : `20px 20px 0 0`
            : `0.375rem`,
          padding: collapsed ? `6px` : `1rem 0.75rem 1rem 0.75rem`
        }}
        className={css.toast.inner}
      >
        {config.autoClose && config.showProgressBar && progress > 0 && (
          <div
            style={{
              width: progress + '%',
              backgroundColor: darken(
                config.toastBackgroundColor?.(toast.type) ??
                  theme.colors[toast.type],
                -20
              )
            }}
            className={css.toast.loader}
          />
        )}
        {expanded ? (
          <ToastContent toast={toast} onClick={onClick} />
        ) : !isOld ? (
          <ToastContent toast={toast} onClick={onClick} />
        ) : null}
      </motion.div>
    </motion.div>
  )
}

export default Toast
