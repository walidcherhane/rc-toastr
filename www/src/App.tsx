import React from 'react'
import { useToast, theme } from 'rc-toastr'
import { Variant } from 'rc-toastr/dist/types'
import Code from './Code'
import Command from './Command'
import { AiFillGithub } from 'react-icons/ai'
const App = () => {
  const { updateConfig, config } = useToast()
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 10,
          right: 30,
          fontSize: 30
        }}
      >
        <a
          href='https://www.github.com/walidcherhane/rc-toastr'
          target='_blanck'
        >
          <AiFillGithub />
        </a>
      </div>
      <div className='main'>
        <img src='/logo.png' alt='' width={100} />
        <h1 className='title'>rc-toastr</h1>
        <p className='description'>
          <span role='img' aria-label='light'>
            💡
          </span>{' '}
          Tip: Click the toast to show the others!
        </p>
        <div className='flex flex-wrap justify-start mx-10 items-center gap-4'>
          <label className='flex flex-wrap gap-1'>
            <label className='checkbox'>
              <input
                type='checkbox'
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
          <Button variant='error'>Click me</Button>
          <Button variant='success'>Click me</Button>
          <Button variant='warning'>Click me</Button>
          <Button variant='info'>Click me</Button>
          <Button variant='default'>Click me</Button>
        </div>
        <Command />
        <div className='scrolldown'>
          <div className='chevrons'>
            <div className='chevrondown' />
            <div className='chevrondown' />
          </div>
        </div>
        <Code page='provider' />
        <Code page='consumer' />
      </div>
    </div>
  )
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
    'that was easy 🤩'
  ]
  return (
    <button
      className='button'
      onClick={() =>
        toast(messages[Math.floor(Math.random() * messages.length)], variant)
      }
    >
      <span
        style={{
          backgroundColor: theme.colors[variant]
        }}
      >
        {children}
      </span>
    </button>
  )
}

export default App
