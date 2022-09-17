import * as React from 'react'
import { motion } from 'framer-motion'
import { useToast } from '../context/ToastContext'
import Toast from './Toast'
import styles from './ToastContainer.module.css'
import '../styles.css'
function ToastContainer() {
  const { toasts, close, config } = useToast()
  const [expanded, setExpanded] = React.useState(true)
  return (
    <React.Fragment>
      {toasts.length ? (
        <motion.div
          layout
          className={styles.container}
          style={{
            position: 'fixed',
            bottom: config.position.includes('bottom') ? 0 : 'auto',
            right: config.position.includes('right') ? 0 : 'auto',
            left: config.position.includes('left') ? 0 : 'auto',
            top: config.position.includes('top') ? 0 : 'auto',
            zIndex: config.zIndex ?? 100,
            flexDirection: config.position.includes('top')
              ? 'column-reverse'
              : 'column'
          }}
        >
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              toasts={toasts}
              toast={toast}
              onClose={close}
              onClick={() => toasts.length > 1 && setExpanded(!expanded)}
              expanded={!expanded}
            />
          ))}
        </motion.div>
      ) : null}
    </React.Fragment>
  )
}

export default ToastContainer
