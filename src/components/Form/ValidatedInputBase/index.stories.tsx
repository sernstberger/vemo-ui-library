import React from 'react'
// import { action } from '@storybook/addon-actions'
import ValidatedInputBase from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Formik } from 'formik'

export default {
  title: 'Validated Input',
  component: ValidatedInputBase,
  decorators: [withKnobs]
}

export const Base = () => (
  <Formik
    initialValues={{
      foo: '',
      bar: ''
    }}
  >
    <div>
      <ValidatedInputBase
        field="foo"
        label="Base"
        required={boolean('Required', true)}
        error={boolean('Error', false)}
        helperText="Helper text goes here"
      />

      <ValidatedInputBase
        field="bar"
        label="Select"
        select
        required={boolean('Required', true)}
        error={boolean('Error', false)}
        helperText="Helper text goes here"
      >
        <option>lasjdflak</option>
      </ValidatedInputBase>
    </div>
  </Formik>
)
