import React from 'react'
// import { action } from '@storybook/addon-actions'
import UserMenu from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'User Menu',
  component: UserMenu,
  decorators: [withKnobs]
}

export const Base = () => (
  <UserMenu />
)
