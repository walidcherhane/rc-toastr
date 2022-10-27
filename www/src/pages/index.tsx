import React, { useEffect } from 'react'
import Link from '@docusaurus/Link'
import { ToastProvider, useToast, theme } from 'rc-toastr'
import splitbee from '@splitbee/web'

function HomepageHeader() {
  const { updateConfig, config } = useToast()
  return (
    <div>
      <div>
        <div className='main'>
          <img src='img/logo.png' alt='' width={150} />
          <h1 className='title'>rc-toastr</h1>
          <p className='description'>
            A simple, easy to use, and highly customizable toast notification
          </p>
          <div className='flex flex-wrap justify-start mx-10 items-center gap-4'>
            <label className='flex flex-wrap gap-1'>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  checked={config.autoClose}
                  onChange={(e) => {
                    updateConfig({
                      ...config,
                      autoClose: e.target.checked
                    })
                  }}
                />
                <div className='checkmark' />
              </label>
              <span>Auto Close</span>
            </label>
            <label className='flex flex-wrap gap-2'>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  disabled={!config.autoClose}
                  checked={config.showProgressBar}
                  onChange={(e) => {
                    updateConfig({
                      ...config,
                      showProgressBar: e.target.checked
                    })
                  }}
                />
                <div className='checkmark' />
              </label>
              <span>Show Porgress Bar</span>
            </label>
            <label className='flex flex-wrap gap-2'>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  disabled={!config.autoClose}
                  checked={config.pauseOnHover}
                  onChange={(e) => {
                    updateConfig({
                      ...config,
                      pauseOnHover: e.target.checked
                    })
                  }}
                />
                <div className='checkmark' />
              </label>
              <span>Pause On Hover</span>
            </label>
          </div>
          <div className='flex flex-wrap justify-start mx-10 items-center gap-4'>
            <label className='flex flex-wrap gap-1'>
              <label className='checkbox'>
                <input
                  type='radio'
                  name='postion'
                  checked={config.position === 'top'}
                  onChange={() => {
                    updateConfig({
                      ...config,
                      position: 'top'
                    })
                  }}
                />
                <div className='checkmark' />
              </label>
              <span>Top</span>
            </label>
            <label className='flex flex-wrap gap-1'>
              <label className='checkbox'>
                <input
                  type='radio'
                  name='postion'
                  checked={config.position === 'top-left'}
                  onChange={() => {
                    updateConfig({
                      ...config,
                      position: 'top-left'
                    })
                  }}
                />
                <div className='checkmark' />
              </label>
              <span>Top Left</span>
            </label>
            <label className='flex flex-wrap gap-1'>
              <label className='checkbox'>
                <input
                  type='radio'
                  name='postion'
                  checked={config.position === 'top-right'}
                  onChange={() => {
                    updateConfig({
                      ...config,
                      position: 'top-right'
                    })
                  }}
                />
                <div className='checkmark' />
              </label>
              <span>Top Right</span>
            </label>
            <label className='flex flex-wrap gap-1'>
              <label className='checkbox'>
                <input
                  type='radio'
                  name='postion'
                  checked={config.position === 'bottom'}
                  onChange={() => {
                    updateConfig({
                      ...config,
                      position: 'bottom'
                    })
                  }}
                />
                <div className='checkmark' />
              </label>
              <span>Bottom</span>
            </label>
            <label className='flex flex-wrap gap-1'>
              <label className='checkbox'>
                <input
                  type='radio'
                  name='postion'
                  checked={config.position === 'bottom-left'}
                  onChange={() => {
                    updateConfig({
                      ...config,
                      position: 'bottom-left'
                    })
                  }}
                />
                <div className='checkmark' />
              </label>
              <span>Bottom Left</span>
            </label>
            <label className='flex flex-wrap gap-1'>
              <label className='checkbox'>
                <input
                  type='radio'
                  name='postion'
                  checked={config.position === 'bottom-right'}
                  onChange={() => {
                    updateConfig({
                      ...config,
                      position: 'bottom-right'
                    })
                  }}
                />
                <div className='checkmark' />
              </label>
              <span>Bottom Right</span>
            </label>
          </div>
          <div className='buttons mt-8 sm:mt-0'>
            <Button variant='error' />
            <Button variant='success' />
            <Button variant='warning' />
            <Button variant='info' />
            <Button variant='default' />
          </div>
          <div className='flex gap-4 mt-4 '>
            <Link
              to='/docs'
              className='decoration-dotted underline underline-offset-8'
            >
              Documentation
            </Link>{' '}
            •{' '}
            <a
              target='_blank'
              href='https://github.com/walidcherhane/rc-toastr'
              rel='noreferrer'
              className='decoration-dotted underline underline-offset-8'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Button: React.FC<{
  variant: 'error' | 'success' | 'warning' | 'info' | 'default'
}> = ({ variant }) => {
  const { toast } = useToast()
  const sendToast = () => {
    splitbee.track('toast', {
      variant
    })
    toast(`This is a ${variant} toast`, variant)
  }
  return (
    <button className='button' onClick={sendToast}>
      <span
        style={{
          backgroundColor: theme.colors[variant]
        }}
      >
        {variant}
      </span>
    </button>
  )
}

export default function Home(): JSX.Element {
  React.useEffect(() => {
    splitbee.init()
  }, [])
  return (
    <ToastProvider
      config={{
        zIndex: 9999
      }}
    >
      <HomepageHeader />
    </ToastProvider>
  )
}
