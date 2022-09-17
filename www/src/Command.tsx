import React from 'react'
import ReactTerminalCommand from 'react-terminal-command'

function Command() {
  return (
    <div className='flex justify-center items-center w-full flex-wrap gap-4'>
      <ReactTerminalCommand withDark command='npm install rc-toastr' />
      <ReactTerminalCommand withDark command='yarn add rc-toastr' />
    </div>
  )
}

export default Command
