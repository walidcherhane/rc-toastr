# ReadMe

![https://user-images.githubusercontent.com/56094829/190699464-8394b80b-6259-4eee-8cb3-5ccf24e9aef8.png](https://user-images.githubusercontent.com/56094829/190699464-8394b80b-6259-4eee-8cb3-5ccf24e9aef8.png)

# Rc-Toastr

> a fully customizable ReactJs toasting library that helps you build complex notification in your app.
> 

![https://user-images.githubusercontent.com/56094829/190833292-dfaf26be-c88e-482b-9d4e-0919a5810286.gif](https://user-images.githubusercontent.com/56094829/190833292-dfaf26be-c88e-482b-9d4e-0919a5810286.gif)

## Config Options

| Propriety | description | value | default value |
| --- | --- | --- | --- |
| autoClose | If the toast should be closed automatically after duration ends | true OR false | true  |
| showProgressBar | Whether to show the progress bar - autoClose should be true | true OR false | true |
| pauseOnHover | Whether to pause the closing the toast on hover - autoClose should be true | true OR false | true  |
| maxToasts | The maximum toasts to show in the screen | number | 30 |
| duration | The duration in ms before closing the toast | number | 5000 |
| zIndex | The order of the toasts on the screen | number | 30 |
| toastBackgroundColor | Function to override the default toast color | (variant) ⇒ string  | (variant) ⇒ theme.colors[type] |
| renderToastIcon | Function to override the default toast icon | (variant) ⇒ JSX.Element  | (variant) ⇒ theme.icons[type] |
| postion | The position of the toasts on the screen | top  | bottom | top-right | top-left | bottom-right | bottom-left | top |

## Installation:

```visual-basic
npm install rc-toastr
```

```visual-basic
yarn add rc-toastr
```

## Usage

```jsx
import { ToastProvider } from 'rc-toastr'
import "rc-toastr/dist/index.css" // import the css file

ReactDOM.render((
    <ToastProvider 
		config={{ // <- Optional
                position: "top-right"
                duration: 3000
                // other config here...
            }}
		>
        <App />
    </ToastProvider>
), document.getElementById('root'))
```

```jsx
import { useToast } from 'rc-toastr'

const App = () => {
    const { toast } = useToast()
    const sayHello = () => {
        toast("Hello World!")
        // toast.success("Hello World!")
    }
    return <button onClick={sayHello}> Say Hello </button>
  }

export default App
```

## Contributions :

Contributions are always welcome!
feel free to open a PR or raise an issue if you face any :D

## Live Example

**[dub.sh/rc-toaster](https://dub.sh/rc-toaster)**