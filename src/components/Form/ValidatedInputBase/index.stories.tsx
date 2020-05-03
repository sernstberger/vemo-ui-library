import React from 'react'
// import { action } from '@storybook/addon-actions'
import ValidatedInputBase from './index'
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Validated Input',
  component: ValidatedInputBase,
  // decorators: [withKnobs]
}

export const ValidatedInputBaseStory = () => (
  <ValidatedInputBase
    label="foooooo"
  />
)
