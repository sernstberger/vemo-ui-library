import React from 'react'
import {
  Snackbar as MuiSnackbar,
  SnackbarContent,
  SnackbarProps as MuiSnackbarProps
} from '@material-ui/core'

import { useTheme } from '@material-ui/core/styles'

// import Icon from '../Icon'
// import Status from '../Status'
// import statusColors from '../../utils/statusColors'

import styles from './styles'
import ArrowRight from '../Icons/ArrowRight'
import { StudentsLine } from '../Icons'

interface SnackbarProps extends MuiSnackbarProps {
  // status: Status.propTypes.status
  // link?: PropTypes.func
  status: any
  link?: any
}

const Snackbar = (props: SnackbarProps) => {
  const {
    status,
    message,
    link,
    children,
    ...rest

    // link: null,
    // message: null,
    // children: null,
  } = props
  const theme = useTheme()
  const classes = styles()

  // const statusObject = statusColors(status)

  const backgroundColor = '#FFF'
  const textColor = '#000'
  const color = theme.palette.primary.main
  const iconColor = '#FFF'

  // const Icon = statusObject.icon
  return (
    <MuiSnackbar {...rest} onClick={link}>
      <SnackbarContent
        className={classes.SnackbarContent}
        style={{
          backgroundColor: backgroundColor
        }}
        message={
          <div
            className={classes.SnackbarContentMessage}
            style={{ color: textColor }}
            // style={{ color: 'green' }}
          >
            <div className={classes.SnackbarContentWrapper}>
              <div
                className={classes.SnackbarContentMessageIconWrapper}
                style={{
                  backgroundColor: color,
                  color: iconColor
                }}
              >
                <StudentsLine color="inherit" />
              </div>
              <div className={classes.SnackbarContentMessageTextWrapper}>
                {message || children}
              </div>
            </div>
            {link && (
              <ArrowRight
                className={classes.SnackbarContentLinkIcon}
                color="inherit"
              />
            )}
          </div>
        }
      />
    </MuiSnackbar>
  )
}

export default Snackbar
