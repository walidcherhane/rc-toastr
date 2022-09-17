import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function Code({ page }: { page: 'consumer' | 'provider' }) {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={dracula}
      showLineNumbers
      wrapLines
      wrapLongLines
    >
      {page === 'consumer' ? consumerCodeRender() : providerCodeRender()}
    </SyntaxHighlighter>
  )
}

const consumerCodeRender = () => {
  return `// App.tsx
import { useToast } from 'rc-toastr'

const App = () => {
    const { toast } = useToast()
    const sayHello = () => {
        toast(
            "Hello World!", 
            "Success" // [optional]. 'error' | 'success' | 'warning' | 'info' | 'default' 
        )
    }
    return <button onClick={sayHello}> Say Hello </button>
  }

export default App
    `
}

const providerCodeRender = () => {
  return `
import { ToastProvider, theme } from 'rc-toastr'
import "rc-toastr/dist/index.css" // import the css file

ReactDOM.render((
    <ToastProvider config={{
        position: 'bottom-right' // position of the toast [required]
        autoClose: true // auto close the toast [default: false]
        duration: 3000 // duration of the toast in ms [default: 3000]
        showProgressBar: true   // show the progress bar [default: false]
        pauseOnHover: true // pause the timer when the mouse is over the toast [default: false]
        maxToasts: 3 // max number of toasts [default: 3]
        renderToastIcon: (variant) => {
            if (variant === 'error') {
                return <div>😫</div>
            }
            return theme.icons[variant] // <- return default icons  
        } // (variant) => React.ReactNode render a custom icon  [optional]

        toastBackgroundColor: (variant) => {
            if (variant === 'error') {
                return "#e74c3c" // <- return a custom color in any form (hex, rgb, rgba, hsl, hsla) 
            }
            return theme.colors[variant] // <- return default colors
        } // (variant) => string render a custom background color [optional]
    }} >
        <App />
    </ToastProvider>
), document.getElementById('root'))

    `
}

export default Code
