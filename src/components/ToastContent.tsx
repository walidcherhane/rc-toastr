import * as React from 'react'
import { useToast } from '../context/ToastContext'
import { Toast } from '../types'
import ToastIcon from './ToastIcon'
import styles from './ToastContent.module.css'
const ToastContent = ({
  toast,
  onClick
}: {
  toast: Toast
  onClick?: () => void
}) => {
  const { close } = useToast()
  return (
    <React.Fragment>
      <div className={styles.content}>
        <div className={styles.icon}>
          <ToastIcon type={toast.type} />
        </div>
        <p className={styles.message} onClick={onClick}>
          {toast.message}
        </p>
      </div>
      <button onClick={() => close(toast.id)} className={styles.close_button}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
        </svg>
      </button>
    </React.Fragment>
  )
}

export default ToastContent
