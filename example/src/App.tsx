import React from 'react'
import { useToast, theme } from 'rc-toastr'
import { Variant } from 'rc-toastr/dist/types'
const App = () => {
  const { updateConfig, config } = useToast()
  return <div>
    <div className="container">
      <img src="/logo.png" alt="" width={100} />
      <h1 className="title">
        rc-toastr
      </h1>
      <p className="description">
        <span role="img" aria-label='light'>💡</span> Tip:  Click the toast to show the others!
      </p>
      <div className="flex gap-md">
        <label className="flex gap-xs">
          <label className="checkbox">
            <input type="checkbox" onChange={(e) => {
              updateConfig({
                ...config,
                autoClose: e.target.checked
              })
            }} />
            <div className="checkmark"></div>
          </label>
          <span>Auto Close</span>
        </label>
        <label className="flex gap-xs">
          <label className="checkbox">
            <input type="checkbox" disabled={!config.autoClose} onChange={(e) => {
              updateConfig({
                ...config,
                showProgressBar: e.target.checked
              })
            }} />
            <div className="checkmark"></div>
          </label>
          <span>Show Porgress Bar</span>
        </label>
        <label className="flex gap-xs">
          <label className="checkbox">
            <input type="checkbox" disabled={!config.autoClose} onChange={(e) => {
              updateConfig({
                ...config,
                pauseOnHover: e.target.checked
              })
            }} />
            <div className="checkmark"></div>
          </label>
          <span>Pause On Hover</span>
        </label>
      </div>
      <div className="flex gap-md">
        <label className="flex gap-xs">
          <label className="checkbox">
            <input type="radio" name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "top-left"
              })
            }} />
            <div className="checkmark"></div>
          </label>
          <span>Top Left</span>
        </label>
        <label className="flex gap-xs">
          <label className="checkbox">
            <input type="radio" name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "top-right"
              })
            }} />
            <div className="checkmark"></div>
          </label>
          <span>Top Right</span>
        </label>
        <label className="flex gap-xs">
          <label className="checkbox">
            <input type="radio" name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "bottom-left"
              })
            }} />
            <div className="checkmark"></div>
          </label>
          <span>Bottom Left</span>
        </label>
        <label className="flex gap-xs">
          <label className="checkbox">
            <input type="radio" name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "bottom-right"
              })
            }} />
            <div className="checkmark"></div>
          </label>
          <span>Bottom Right</span>
        </label>
      </div>
      <div className="buttons">
        <Button
          variant='error'
        >
          Click me
        </Button>
        <Button
          variant='success'
        >
          Click me
        </Button>
        <Button
          variant='warning'
        >
          Click me
        </Button>
        <Button
          variant='info'
        >
          Click me
        </Button>
        <Button
          variant='default'
        >
          Click me
        </Button>

      </div>
    </div>
  </div>
}


const Button: React.FC<{
  variant: Variant
  children: React.ReactNode

}> = ({ variant, children }) => {
  const { toast } = useToast()
  const messages = [
    'Click me daddy 🤗!',
    'Whoo! You did it! 😎',
    'You did it again! 🎉',
    'that was easy 🤩',
  ]
  return (
    <button className="button" onClick={() => toast(
      messages[
      Math.floor(Math.random() * messages.length)
      ]
      , variant)}>
      <span style={{
        backgroundColor: theme.colors[variant],
      }} >
        {children}
      </span>
    </button>
  )
}

export default App
