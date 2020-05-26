import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'
import ConfirmationModal from './index'
import { Typography, Button } from '@material-ui/core'

storiesOf('Modal', module).add('Confirmation', () => {
  const title = text('title', 'Title goes here')
  const [open, setOpen] = useState<boolean>(true)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained" color="primary">
        Open Modal
      </Button>
      <ConfirmationModal
        open={open}
        onClose={() => setOpen(false)}
        primaryAction={undefined}
      />
    </>
  )
})
