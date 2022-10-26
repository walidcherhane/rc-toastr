<div align="center">
  
 ![https://user-images.githubusercontent.com/56094829/197514874-b521164e-045e-4390-8db7-eaf13fc35150.png](https://user-images.githubusercontent.com/56094829/197514874-b521164e-045e-4390-8db7-eaf13fc35150.png)


<img src="https://img.shields.io/npm/dm/rc-toastr" alt="downloads"/>
<img src="https://img.shields.io/npm/l/rc-toastr" alt="license"/>
<img src="https://img.shields.io/npm/v/rc-toastr?color=green" alt="version" />
  
</div>
<br />
<div align="center">
<a href="https://dub.sh/rc-toastr">Website</a> 
<span> · </span>
<a href="https://dub.sh/rc-docs">Documentation</a> 
<span> · </span>
<a href="https://dub.sh/walid">Twitter</a>
</div>

## Usage

```jsx
import { ToastProvider } from 'rc-toastr'
import "rc-toastr/dist/index.css" // import the css file

ReactDOM.render((
    <ToastProvider>
        <App />
    </ToastProvider>
), document.getElementById('root'))
```

```jsx
import { useToast } from 'rc-toastr'

const App = () => {
    const { toast } = useToast()
    const hello = () => toast.success("Hello World!")
    return <button onClick={toast}> Say Hello </button>
  }

export default App
```

## Documentation:

For more information and examples feel free to check the official website at: **[dub.sh/rc-toastr](https://dub.sh/rc-toastr)**