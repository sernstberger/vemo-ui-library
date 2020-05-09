import React from 'react'
// import { action } from '@storybook/addon-actions'
import { default as UiUserMenu } from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Page Layout',
  decorators: [withKnobs]
}

export const UserMenu = () => <UiUserMenu />
