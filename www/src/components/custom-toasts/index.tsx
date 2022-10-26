import React from 'react'
import styles from './styles.module.css'
import { useToast, ToastProvider, theme } from 'rc-toastr'
function Toast() {
  return (
    <ToastProvider
      config={{
        renderAs: (props) => <CustomToasts {...props} />,
        autoClose: false,
        zIndex: 1000
      }}
    >
      <App />
    </ToastProvider>
  )
}

const App = () => {
  const { toast } = useToast()
  const variants = ['error', 'success', 'warning', 'info', 'default']
  return (
    <div className='buttons'>
      {variants.map((variant) => (
        <button
          key={variant}
          className='button'
          onClick={() =>
            toast[variant]('Hello, this is your custom toast notification!')
          }
        >
          <span
            style={{
              backgroundColor: theme.colors[variant]
            }}
          >
            {variant} Toast
          </span>
        </button>
      ))}
    </div>
  )
}

function CustomToasts({
  visible,
  toast,
  onClose
}: {
  toast: any
  onClose: (id: number) => void
  visible: boolean
  showProgressBar: boolean
  progress: number
}) {
  return (
    <div
      className={styles.toast}
      style={{
        backgroundColor: theme.colors[toast.type]
      }}
    >
      {visible && (
        <>
          <div className={styles.toast__icon}>{theme.icons[toast.type]}</div>
          <div className={styles.toast__content}>
            <p className={styles.toast__type}>{toast.type}</p>
            <p className={styles.toast__message}>{toast.message}</p>
          </div>
          <div
            onClick={() => onClose(toast.id)}
            className={styles.toast__close}
          >
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 15.642 15.642'
              enableBackground='new 0 0 15.642 15.642'
            >
              <path
                fillRule='evenodd'
                d='M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z'
              />
            </svg>
          </div>
        </>
      )}
    </div>
  )
}

export default Toast
