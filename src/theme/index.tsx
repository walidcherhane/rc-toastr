import {
  DefaultIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon
} from '../icons'
import React from 'react'

export const theme = {
  colors: {
    error: '#E53E3E',
    info: '#5CB8E4',
    success: '#4BB543',
    warning: '#FFB200',
    default: '#2c2c54'
  },
  icons: {
    error: <ErrorIcon />,
    info: <InfoIcon />,
    success: <SuccessIcon />,
    warning: <WarningIcon />,
    default: <DefaultIcon />
  }
}
