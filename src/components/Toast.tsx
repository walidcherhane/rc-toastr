import * as React from 'react'
import { motion } from 'framer-motion'
import { useToast } from '../context/ToastContext'
import type { Toast as T } from '../types'
import styles from './Toast.module.css'

const Toast = ({
  toast,
  opened,
  setOpened
}: {
  toast: T
  opened: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { config, toasts, close } = useToast()
  const [progress, setProgress] = React.useState(100)
  const [isHovered, setIsHovered] = React.useState(false)
  const toastRef = React.useRef<HTMLDivElement>(null)
  const isLastToast = toasts[toasts.length - 1].id === toast.id
  const allNextToasts = toasts.filter(
    (t) => t.id !== toasts[toasts.length - 1].id
  )
  const allPreviousToasts = allNextToasts.filter((t) => t.id >= toast.id)
  const prevToast = toasts.find((t) => {
    const curr = toasts.indexOf(toast)
    const prev = allNextToasts[curr - 1]
    return t.id === prev?.id
  })
  const prevToastRef = React.useRef<HTMLDivElement>(null)
  const hidden = Boolean(!opened && !isLastToast)
  const mx = allPreviousToasts.length * 20
  const css = {
    toast: {
      container: styles.container,
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
    if (toast && config.pauseOnHover && config.autoClose) {
      toast.addEventListener('mouseenter', handleMouseEnter)
      toast.addEventListener('mouseleave', handleMouseLeave)
    }
  }, [toastRef])

  React.useEffect(() => {
    if (isHovered) return
    if (progress >= 0 && config.autoClose && toast.type !== 'loading') {
      const interval = setInterval(() => {
        setProgress((progress) => progress - 1)
      }, config.duration / 100)
      if (progress === 0) {
        close(toast.id)
      }
      return () => clearInterval(interval)
    }
  }, [progress, isHovered])

  return (
    <motion.div layout ref={toastRef} className={css.toast.container}>
      <motion.div
        ref={prevToast?.id !== toast.id ? prevToastRef : null}
        key={toast.id}
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
          borderRadius: hidden
            ? config.position.includes('top')
              ? `0 0 20px 20px`
              : `20px 20px 0 0`
            : `0.375rem`,
          overflow: 'hidden',
          marginInline: hidden ? mx : 0
        }}
        className={css.toast.inner}
      >
        <div
          onClick={() => toasts.length > 1 && setOpened((opened) => !opened)}
        >
          {config.renderAs({
            toast,
            progress,
            onClose: close,
            visible: !hidden,
            showProgressBar: config.showProgressBar && toast.type !== 'loading'
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Toast
