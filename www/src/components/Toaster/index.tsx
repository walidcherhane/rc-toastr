import React from 'react'
import { theme, ToastProvider, useToast } from 'rc-toastr'
import 'rc-toastr/dist/index.css' // import the css file
import styles from './styles.module.css'

function Toaster() {
  return (
    <ToastProvider
      config={{
        zIndex: 9999,
        autoClose: false
      }}
    >
      <App />
    </ToastProvider>
  )
}

export const Provider = ({
  config,
  children
}: {
  config: any
  children: JSX.Element
}) => {
  return <ToastProvider config={config}>{children}</ToastProvider>
}

export const App = () => {
  const { toast } = useToast()
  const variants = ['error', 'success', 'warning', 'info', 'default']
  return (
    <div className='buttons'>
      {variants.map((variant) => (
        <button
          key={variant}
          data-variant={variant}
          className='button'
          onClick={() => toast[variant]('Hello World')}
        >
          <span
            style={{
              backgroundColor: theme.colors[variant]
            }}
          >
            {variant}
          </span>
        </button>
      ))}
    </div>
  )
}

export default Toaster
