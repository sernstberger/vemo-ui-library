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
import Foo from '../VemoIcons/Foo'
import ActionCard, { ActionCardProps } from '../ActionCard'

export interface SnackbarMessageProps extends ActionCardProps {
  text: string
}

interface SnackbarProps extends MuiSnackbarProps {
  messages: SnackbarMessageProps | SnackbarMessageProps[] | string
  // status: Status.propTypes.status
  status: 'success' | 'warning' | 'error' | 'pending'
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
    content = (
      <div className={classes.MessageIsStringLayout}>
        {title && (
          <Typography variant="h3" color="textPrimary" gutterBottom>
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
            <Typography
              variant="h3"
              color="textPrimary"
              style={{ margin: '12px 12px 0' }}
            >
              {title}
            </Typography>
          )}
          {messages.map((message: SnackbarMessageProps, index: number) => {
            const { text, onClick, ...messageRest } = message
            return (
              <ActionCard
                {...messageRest}
                onClick={onClick}
                key={index}
                className={classes.SnackbarActionCard}
                actionAreaClassName={classes.SnackbarActionArea}
              >
                <Typography>{text}</Typography>
              </ActionCard>
            )
          })}
        </div>
      )
    } else {
      const blah = Array.isArray(messages) ? messages[0] : messages
      const { text, ...messageRest } = blah
      content = (
        <ActionCard
          {...messageRest}
          className={classes.SnackbarActionCard}
          actionAreaClassName={classes.SnackbarActionArea}
        >
          {title && <Typography variant="h3">{title}</Typography>}
          <Typography>{text}</Typography>
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
                {/* <Icon icon={statuses[status].icon} /> */}
                <Foo name="Help" />
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
