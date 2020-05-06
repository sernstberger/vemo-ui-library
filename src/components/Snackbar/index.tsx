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
import ActionCard from '../ActionCard'

interface SnackbarMessage {
  text: string
  link?: any
}

interface SnackbarProps extends MuiSnackbarProps {
  messages: SnackbarMessage | SnackbarMessage[] | string
  // status: Status.propTypes.status
  status: 'success' | 'warning' | 'error'
  title?: string
}

const Snackbar = (props: SnackbarProps) => {
  const { status, messages, children, ...rest } = props
  const theme = useTheme()
  const classes = styles()

  // const statusObject = statusColors(status)

  const statuses = {
    success: {
      color: theme.palette.success.main,
      iconColor: theme.palette.success.contrastText,
      icon: 'check'
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
              {messages.length > 1 ? (
                <div style={{ flex: '1' }}>
                  <Typography
                    color="textPrimary"
                    style={{ margin: '16px 16px 0' }}
                  >
                    Titlegoeshere
                  </Typography>
                  {messages.map((message: SnackbarMessage, index: number) => {
                    return (
                      <ActionCard
                        key={index}
                        className={classes.SnackbarActionCard}
                      >
                        {message.text}
                      </ActionCard>
                    )
                  })}
                </div>
              ) : (
                <ActionCard className={classes.SnackbarActionCard}>
                  <Typography>Titlegoeshere</Typography>
                  {messages[0].text}
                </ActionCard>
              )}
            </div>
          </div>
        }
      />
    </MuiSnackbar>
  )
}

export default Snackbar
