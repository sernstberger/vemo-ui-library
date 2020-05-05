// import React from 'react'
// import { useTheme } from '@material-ui/core/styles'
// import ArrowRight from '../components/Icons/ArrowRight'

const statusColors = (status: any) => {
  // const theme = useTheme()
  let color
  let textColor
  // let icon
  let cursor

  const icon = 'ArrowRight'
  color = 'red'
  textColor = 'black'
  const backgroundColor = 'white'
  const iconColor = 'white'
  

  // let backgroundColor = theme.palette.background.default
  // let iconColor = theme.palette.common.white

  // switch (status) {
  //   case 'disabled':
  //     color = theme.palette.action.disabled
  //     break
  //   case 'primary':
  //     color = theme.palette.primary.main
  //     break
  //   case 'primary-dark':
  //     color = theme.palette.primary.dark
  //     break
  //   case 'bank':
  //     color = theme.palette.primary.main
  //     textColor = theme.palette.text.primary
  //     cursor = 'pointer'
  //     icon = 'bank-fill'
  //     break
  //   case 'bank-update':
  //     color = theme.palette.primary.darker
  //     textColor = theme.palette.text.primary
  //     cursor = 'pointer'
  //     icon = 'bank-fill'
  //     break
  //   case 'pending':
  //     color = theme.palette.primary.darker
  //     textColor = theme.palette.background.default
  //     backgroundColor = theme.palette.primary.darker
  //     icon = 'blank'
  //     break
  //   case 'secondary':
  //     color = theme.palette.secondary.main
  //     icon = 'error-fill'
  //     textColor = theme.palette.text.primary
  //     iconColor = theme.palette.warning.main
  //     break
  //   case 'success':
  //     color = theme.palette.success.main
  //     textColor = theme.palette.text.primary
  //     icon = 'check'
  //     break
  //   case 'warning':
  //     color = theme.palette.warning.main
  //     textColor = theme.palette.text.primary
  //     icon = 'warning-fill'
  //     break
  //   case 'idle':
  //     color = theme.palette.warning.main
  //     textColor = theme.palette.text.primary
  //     iconColor = 'primary-dark'
  //     icon = 'clock'
  //     break
  //   case 'error':
  //     color = theme.palette.error.main
  //     textColor = theme.palette.text.primary
  //     icon = 'error-line'
  //     break
  //   case 'textSecondary':
  //     color = theme.palette.text.secondary
  //     break
  //   default:
  //     color = 'inherit'
  // }

  return { color, textColor, icon, backgroundColor, cursor, iconColor }
}

export default statusColors
