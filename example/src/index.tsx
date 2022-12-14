
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ToastProvider } from 'rc-toastr'
import "rc-toastr/dist/index.css"
import './index.css'

ReactDOM.render((
    <ToastProvider
      config={{
        autoClose: false
      }}
    >
        <App />
    </ToastProvider>

), document.getElementById('root'))
