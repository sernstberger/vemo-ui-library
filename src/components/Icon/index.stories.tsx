import React from 'react'
import { action } from '@storybook/addon-actions'
import Icon from './index'

export default {
  title: 'Icons',
  component: Icon
}

export const IconsStory = () => (
  <div style={{ backgroundColor: 'red', display: 'flex' }}>
    <Icon icon="students=line" />
  </div>
)
