import React from 'react'
import { Button } from '@material-ui/core'
import styles from './styles'
import Modal, { ModalProps } from '../Modal'

interface ConfirmationModal extends Partial<ModalProps> {
  title?: string
  confirmAction?: any
  cancelAction?: any
}

const ConfirmationModal = (props: ConfirmationModal) => {
  const {
    open,
    // onClose,
    cancelAction = () => {},
    confirmAction = () => {},
    title = 'Are you sure?',
    ...modalProps
  } = props
  const classes = styles()

  const handleConfirm = () => {
    confirmAction()
    // onClose()
  }

  const handleCancel = () => {
    cancelAction()
    // onClose()
  }

  return (
    <Modal {...modalProps} {...{ open, title }} primaryAction={null}>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCancel}
          fullWidth
        >
          No
        </Button>
        <Button variant="contained" onClick={handleConfirm} fullWidth>
          Yes
        </Button>
      </div>
    </Modal>
  )
}

export default ConfirmationModal
