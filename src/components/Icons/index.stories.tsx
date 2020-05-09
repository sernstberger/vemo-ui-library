import React from 'react'
import { action } from '@storybook/addon-actions'
import { StudentsLine } from './index'

export default {
  title: 'Icons',
  component: StudentsLine
}

export const IconsStory = () => (
  <div style={{ backgroundColor: 'red', display: 'flex' }}>
    <StudentsLine />
  </div>
)