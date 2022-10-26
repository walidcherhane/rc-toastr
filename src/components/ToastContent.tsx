import * as React from 'react'
import { useToast } from '../context/ToastContext'
import { Toast } from '../types'
import ToastIcon from './ToastIcon'
import styles from './ToastContent.module.css'
import { darken } from '../utils'
const ToastContent = ({
  toast,
  onClick,
  visible,
  showProgressBar,
  progress
}: {
  toast: Toast
  onClick?: () => void
  visible: boolean
  showProgressBar: boolean
  progress: number
}) => {
  const { close, config } = useToast()

  return (
    <div
      style={{
        position: 'relative',
        padding: visible ? '1rem 0.75rem 1rem 0.75rem' : '6px',
        backgroundColor: config.toastBackgroundColor(toast.type)
      }}
    >
      {visible ? (
        <React.Fragment>
          <div className={styles.content}>
            <div className={styles.icon}>
              <ToastIcon type={toast.type} />
            </div>
            <p className={styles.message} onClick={onClick}>
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => close(toast.id)}
            className={styles.close_button}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          {showProgressBar && (
            <div
              style={{
                width: progress + '%',
                backgroundColor: darken(
                  config.toastBackgroundColor(toast.type),
                  -20
                )
              }}
              className={styles.progress_bar}
            />
          )}
        </React.Fragment>
      ) : null}
    </div>
  )
}

export default ToastContent
