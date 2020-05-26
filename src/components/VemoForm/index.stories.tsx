import React from 'react'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import VemoForm from '.'

export default {
  title: 'VemoForm',
  decorators: [withKnobs]
}

export const InputBase = () => (
  <div style={{ padding: 40, backgroundColor: '#FFF' }}>
    <VemoForm fields={['foo', 'bar']} />
  </div>
)
