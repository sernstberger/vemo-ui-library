import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'
import Modal from './index'
import { Typography, Button } from '@material-ui/core'

storiesOf('Modal', module).add('basic', () => {
  const title = text('title', 'Title goes here')
  const [open, setOpen] = useState<boolean>(true)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained" color="primary">
        Open Modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget leo
          augue. Nam nisl metus, hendrerit quis leo in, tempus egestas turpis.
        </Typography>
      </Modal>
    </>
  )
})
