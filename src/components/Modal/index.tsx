import React from 'react'
import {
  Slide,
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  Fab,
  Typography,
  Card,
  DialogContent
} from '@material-ui/core'
import Icon from '../Icon'
import styles from './styles'

export interface ModalProps extends MuiModalProps {
  title?: string
  subtitle?: string
  primaryAction?: Function | React.ReactNode | null
  secondaryAction?: Function | React.ReactNode | null
}

const Modal = (props: ModalProps) => {
  const {
    open,
    onClose = () => {},
    children,
    title,
    subtitle,
    primaryAction = (
      <Fab size="small" onClick={(e) => onClose(e, 'backdropClick')}>
        <Icon name="Close" />
      </Fab>
    ),
    secondaryAction = undefined,
    ...modalProps
  } = props
  const classes = styles()

  return (
    <MuiModal
      open={open}
      closeAfterTransition
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      {...modalProps}
    >
      <Slide direction="up" in={open}>
        <div className={classes.ModalScrollWrapper} id="dialog">
          <div className={classes.ModalWrapper}>
            <Card className={classes.Modal}>
              <div style={{ borderBottom: `1px solid green` }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '16px 16px 0 0'
                  }}
                >
                  {primaryAction}
                </div>
                <div>
                  {title && (
                    <Typography align="center" variant="h1" gutterBottom>
                      {title}
                    </Typography>
                  )}
                  {subtitle && (
                    <Typography align="center" variant="h3" gutterBottom>
                      {subtitle}
                    </Typography>
                  )}
                </div>
              </div>
              <DialogContent style={{ padding: 40 }}>{children}</DialogContent>
            </Card>
          </div>
        </div>
      </Slide>
    </MuiModal>
  )
}

export default Modal
