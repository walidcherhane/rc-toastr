import { ToastProvider, useToast } from 'rc-toastr'
import React from 'react'

const Provider = () => (
  <ToastProvider
    config={{
      zIndex: 9999
    }}
  >
    <App />
  </ToastProvider>
)

function App() {
  const { toast } = useToast()

  return (
    <button className='button'>
      <span
        onClick={() => {
          toast.loading(
            new Promise<{
              name: string
            }>((resolve) =>
              setTimeout(() => resolve({ name: 'John Doe' }), 2000)
            ),
            {
              loading: 'loading...',
              success: (data) => toast.success(`Welcome back ${data.name}!`),
              error: (err) => {
                console.error(err)
                toast.error('Something went wrong!')
              }
            }
          )
        }}
      >
        Promise
      </span>
    </button>
  )
}
export default Provider
