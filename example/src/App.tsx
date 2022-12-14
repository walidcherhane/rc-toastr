import React from 'react'
import { useToast, theme } from 'rc-toastr'
import { Variant } from 'rc-toastr/dist/types'
const App = () => {
  const { updateConfig, config } = useToast()
  return <div>
    <div className="container mx-auto">
      <img src="/logo.png" alt="" width={100} />
      <h1 className="title">
        rc-toastr
      </h1>
      <p className="description">
        <span role="img" aria-label='light'>💡</span> Tip:  Click the toast to show the others!
      </p>
      <div className="flex gap-4">
        <label className="flex gap-2">
          <label className="checkbox">
            <input checked={config.autoClose} type="checkbox" onChange={(e) => {
              updateConfig({
                ...config,
                autoClose: e.target.checked
              })
            }} />
            <div className="checkmark" />
          </label>
          <span>Auto Close</span>
        </label>
        <label className="flex gap-2">
          <label className="checkbox">
            <input type="checkbox" checked={config.showProgressBar} disabled={!config.autoClose} onChange={(e) => {
              updateConfig({
                ...config,
                showProgressBar: e.target.checked
              })
            }} />
            <div className="checkmark" />
          </label>
          <span>Show Porgress Bar</span>
        </label>
        <label className="flex gap-2">
          <label className="checkbox">
            <input type="checkbox" checked={config.pauseOnHover} disabled={!config.autoClose} onChange={(e) => {
              updateConfig({
                ...config,
                pauseOnHover: e.target.checked
              })
            }} />
            <div className="checkmark" />
          </label>
          <span>Pause On Hover</span>
        </label>
      </div>
      <div className="flex gap-4">
        <label className="flex gap-2">
          <label className="checkbox">
            <input type="radio" checked={config.position === "top"} name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "top"
              })
            }} />
            <div className="checkmark" />
          </label>
          <span>Top</span>
        </label>
        <label className="flex gap-2">
          <label className="checkbox">
            <input type="radio" checked={config.position === "top-left"} name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "top-left"
              })
            }} />
            <div className="checkmark" />
          </label>
          <span>Top Left</span>
        </label>
        <label className="flex gap-2">
          <label className="checkbox">
            <input type="radio" checked={config.position === "top-right"} name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "top-right"
              })
            }} />
            <div className="checkmark" />
          </label>
          <span>Top Right</span>
        </label>
        <label className="flex gap-2">
          <label className="checkbox">
            <input type="radio" checked={config.position === "bottom"} name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "bottom"
              })
            }} />
            <div className="checkmark" />
          </label>
          <span>Bottom</span>
        </label>
        <label className="flex gap-2">
          <label className="checkbox">
            <input type="radio" checked={config.position === "bottom-left"} name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "bottom-left"
              })
            }} />
            <div className="checkmark" />
          </label>
          <span>Bottom Left</span>
        </label>
        <label className="flex gap-2">
          <label className="checkbox">
            <input type="radio" checked={config.position === "bottom-right"} name='postion' onChange={() => {
              updateConfig({
                ...config,
                position: "bottom-right"
              })
            }} />
            <div className="checkmark" />
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

  const handleToast = () => {
    toast.loading(
      new Promise((_, reject) => {
        setTimeout(() => {
          reject("Done")
        }, 3000)
      }),
      {
        success: "Success, it's done!",
        error: (e)=>{
          toast.error(e as string)
        },
        loading: `Loading data...`,
      }  
    )
  }
  return (
    <button className="button" onClick={handleToast}>
      <span style={{
        backgroundColor: theme.colors[variant],
      }} >
        {children}
      </span>
    </button>
  )
}

export default App
