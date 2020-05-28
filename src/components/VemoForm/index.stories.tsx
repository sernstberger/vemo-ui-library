import React from 'react'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import VemoForm from '.'

export default {
  title: 'VemoForm',
  decorators: [withKnobs]
}

export const Full = () => (
  <div style={{ padding: 40, backgroundColor: '#FFF' }}>
    <VemoForm
      fields={[
        {
          label: 'Foo',
          required: true,
          tooltip: 'tool tip goes here'
        },
        { label: 'Bar', required: true, type: 'textarea', maxLength: 10 }
      ]}
      onSubmit={async (values: any) => {
        await new Promise(resolve => setTimeout(resolve, 1500))
        alert(JSON.stringify(values, null, 2))
      }}
    />
  </div>
)
