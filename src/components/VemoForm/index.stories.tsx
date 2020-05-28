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
          label: 'Text',
          required: true,
          tooltip: 'tool tip goes here'
        },
        { label: 'Textarea', required: true, type: 'textarea', maxLength: 100 },
        {
          label: 'Select',
          required: true,
          type: 'select',
          options: ['foo', 'bar']
        },
        // TODO: decimal scale needs work
        // TODO: numbers are formatted as strings in formik - this needs to be fixed
        { label: 'Number', required: true, type: 'number', decimalScale: 4 }
      ]}
      onSubmit={async (values: any) => {
        await new Promise(resolve => setTimeout(resolve, 1500))
        alert(JSON.stringify(values, null, 2))
      }}
    />
    <ul>
      <li>File uploader</li>
      <li>Percentage input</li>
      <li>Money Input</li>
      <li>Datepicker</li>
      <li>Checkboxes</li>
      <li>Radio buttons</li>
      <li>Switches</li>
      <li>Tiles select</li>
      <li>State select</li>
      <li>Country select</li>
      <li>Zip</li>
      <li>Address inputs</li>
      <li>email input</li>
      <li>Phone number</li>
      <li>Slider with input</li>
      <li>Credit card</li>
      <li>Field array that handles all of these fields</li>
    </ul>
  </div>
)
