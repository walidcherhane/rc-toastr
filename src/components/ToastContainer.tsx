import * as React from 'react'
import { motion } from 'framer-motion'
import { useToast } from '../context/ToastContext'
import Toast from './Toast'
import styles from './ToastContainer.module.css'

function ToastContainer() {
  const { toasts, config } = useToast()
  const [toastOpened, setToastOpened] = React.useState(false)
  const LeftPositionContainer = {
    left: 0,
    right: 'auto'
  }
  const RightPositionContainer = {
    left: 'auto',
    right: 0
  }

  return (
    <React.Fragment>
      {toasts.length ? (
        <motion.div
          layout
          className={styles.container}
          style={{
            position: 'fixed',
            margin: 'auto',
            bottom: config.position.includes('bottom') ? 0 : 'auto',
            top: config.position.includes('top') ? 0 : 'auto',
            zIndex: config.zIndex ?? 100,
            flexDirection: config.position.includes('top')
              ? 'column-reverse'
              : 'column',
            ...(config.position.includes('left') ||
            config.position.includes('right')
              ? (config.position.includes('left') && LeftPositionContainer,
                config.position.includes('right') && RightPositionContainer)
              : {
                  left: 0,
                  right: 0
                })
          }}
        >
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              toast={toast}
              opened={toastOpened}
              setOpened={setToastOpened}
            />
          ))}
        </motion.div>
      ) : null}
    </React.Fragment>
  )
}

export default ToastContainer
