import React from 'react'
import { motion } from 'framer-motion'
function Loading() {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      style={{ originX: 1.25, originY: 1.25 }}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
    >
      <path
        fill='currentColor'
        d='M11.5 4A8.5 8.5 0 0 0 3 12.5H2A9.5 9.5 0 0 1 11.5 3v1Z'
      />
    </motion.svg>
  )
}

export default Loading
