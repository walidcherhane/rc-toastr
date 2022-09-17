![rc-toastr's logo](https://user-images.githubusercontent.com/56094829/190699464-8394b80b-6259-4eee-8cb3-5ccf24e9aef8.png)

# rc-toastr

> a fully customizable ReactJs toasting library that helps you build complex notification in your app.

[![NPM](https://img.shields.io/npm/v/rc-toastr.svg)](https://www.npmjs.com/package/rc-toastr) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rc-toastr
```

## Usage/Examples
![preview gif](https://user-images.githubusercontent.com/56094829/190833292-dfaf26be-c88e-482b-9d4e-0919a5810286.gif)

```javascript
import { ToastProvider } from 'rc-toastr'
import "rc-toastr/dist/index.css" // import the css file

ReactDOM.render((
    <ToastProvider config={{
        position: "top-right"
        duration: 3000
    }} >
        <App />
    </ToastProvider>
), document.getElementById('root'))
```
Then anywhere in your app

```javascript
import { useToast } from 'rc-toastr'

const App = () => {
    const { toast } = useToast()
    const sayHello = () => {
        toast("Hello World!")
    }
    return <button onClick={sayHello}> Say Hello </button>
  }

export default App
```
## Contributing

Contributions are always welcome!
feel free to open a PR or raise an issue if you face any :D
## License

[MIT](https://choosealicense.com/licenses/mit/)

