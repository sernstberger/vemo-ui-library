import React from 'react'
import { action } from '@storybook/addon-actions'
import Foo from './Foo'

export default {
  title: 'Icons',
  // component: Icon
}

export const IconsStory = () => (
  <div style={{ backgroundColor: 'red', display: 'flex' }}>
    <div><Foo name="Help" /></div>
  </div>
)
