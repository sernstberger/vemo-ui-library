import React from 'react'
import {
  Snackbar as MuiSnackbar,
  SnackbarContent,
  SnackbarProps as MuiSnackbarProps,
  Typography
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

// import Status from '../Status'
// import statusColors from '../../utils/statusColors'

import styles from './styles'
import Icon from '../Icon'
import ActionCard, { ActionCardProps } from '../ActionCard'

interface SnackbarMessage extends ActionCardProps {
  text: string
}

interface SnackbarProps extends MuiSnackbarProps {
  messages: SnackbarMessage | SnackbarMessage[] | string
  // status: Status.propTypes.status
  status: 'success' | 'warning' | 'error'
  title?: string
}

const Snackbar = (props: SnackbarProps) => {
  const { status, messages, children, title, ...rest } = props
  const theme = useTheme()
  const classes = styles()

  // const statusObject = statusColors(status)

  const statuses = {
    success: {
      color: theme.palette.success.main,
      iconColor: theme.palette.success.contrastText,
      icon: 'check'
    },
    error: {
      color: theme.palette.error.main,
      iconColor: theme.palette.error.contrastText,
      icon: 'error-line'
    }
  }

  const messageIsString = typeof messages === 'string'

  let content
  if (messageIsString) {
    console.log('messages', messages)
    content = (
      <div style={{ flex: '1', padding: 12 }}>
        {title && (
          <Typography color="textPrimary" gutterBottom>
            {title}
          </Typography>
        )}
        <Typography color="textPrimary">{messages}</Typography>
      </div>
    )
  } else {
    if (messages.length > 1) {
      content = (
        <div style={{ flex: '1' }}>
          {title && (
            <Typography color="textPrimary" style={{ margin: '12px 12px 0' }}>
              {title}
            </Typography>
          )}
          {messages.map((message: SnackbarMessage, index: number) => {
            return (
              <ActionCard key={index} className={classes.SnackbarActionCard} actionAreaClassName={classes.SnackbarActionArea}>
                {message.text}
              </ActionCard>
            )
          })}
        </div>
      )
    } else {
      const blah = Array.isArray(messages) ? messages[0] : messages
      content = (
        <ActionCard className={classes.SnackbarActionCard}>
          {title && <Typography>{title}</Typography>}
          {blah.text}
        </ActionCard>
      )
    }
  }

  return (
    <MuiSnackbar {...rest}>
      <SnackbarContent
        className={classes.SnackbarContent}
        message={
          <div className={classes.SnackbarContentMessage}>
            <div className={classes.SnackbarContentWrapper}>
              <div
                className={classes.SnackbarContentMessageIconWrapper}
                style={{
                  backgroundColor: statuses[status].color,
                  color: statuses[status].iconColor
                }}
              >
                <Icon icon={statuses[status].icon} />
              </div>
              {content}
            </div>
          </div>
        }
      />
    </MuiSnackbar>
  )
}

export default Snackbar
