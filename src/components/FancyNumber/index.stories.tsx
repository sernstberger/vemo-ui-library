import React from 'react'
// import { action } from '@storybook/addon-actions'
import FancyNumber from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Fancy Number',
  component: FancyNumber,
  decorators: [withKnobs]
}

export const FancyNumberStory = () => (
  <FancyNumber
    number={number('Number', 234)}
    money={boolean('Money', true)}
    label={text('Label', 'fooooo')}
  />
)
