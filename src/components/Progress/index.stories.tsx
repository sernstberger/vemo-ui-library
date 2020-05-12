import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'
import { Typography, Button } from '@material-ui/core'
import Progress from './index'

storiesOf('Progress', module).add('basic', () => {
  const heading = text('heading', 'Some Label')
  const currentProgress = number('currentProgress', 43.22)
  const currentProgressLabel = text('currentProgressLabel', 'Some Label')
  const total = number('total', 100)
  const money = boolean('money', false)

  return (
    <Progress
      money={money}
      heading={heading}
      currentProgress={currentProgress}
      currentProgressLabel={currentProgressLabel}
      total={total}
      tooltip="fooooooo"
    />
  )
})
