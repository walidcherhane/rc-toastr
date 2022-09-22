import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'rc-toastr/dist/index.css'
import { ToastProvider } from 'rc-toastr'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
)
