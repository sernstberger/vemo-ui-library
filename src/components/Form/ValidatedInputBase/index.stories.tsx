import React from 'react'
// import { action } from '@storybook/addon-actions'
import ValidatedInputBase from './index'
import ValidatedSelect from '../ValidatedSelect'
import ValidatedNumberInput from '../ValidatedNumberInput'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Formik } from 'formik'
import { StudentsLine } from '../../Icons'

export default {
  title: 'Validated Input',
  component: ValidatedInputBase,
  decorators: [withKnobs]
}

export const Base = () => (
  <Formik
    initialValues={{
      foo: '',
      bar: '',
      baz: undefined
    }}
    onSubmit={() => {}}
  >
    <div>
      <ValidatedInputBase
        field="foo"
        label="Base"
        required={boolean('Required', false)}
        helperText="Helper text goes here"
        tooltip={text('Tooltip', 'Tooltip text goes here')}
        icon={{ name: <StudentsLine />, position: 'start', color: '#FF0000' }}
        maxLength={number('Max Length', 100)}
        hasCounter
      />

      <ValidatedSelect
        field="bar"
        label="Select"
        options={['alkdsj', 'lakdfj']}
        required={boolean('Required', false)}
        helperText="Helper text goes here"
        tooltip={text('Tooltip', 'Tooltip text goes here')}
        icon={{ name: <StudentsLine />, position: 'start', color: '#FF0000' }}
      />

      <ValidatedNumberInput
        field="baz"
        label="Number"
        required={boolean('Required', false)}
        helperText="Helper text goes here"
        tooltip={text('Tooltip', 'Tooltip text goes here')}
        icon={{ name: <StudentsLine />, position: 'start', color: '#FF0000' }}
        minValue={0}
        maxValue={1000}
        stepValue={100}
      />
    </div>
  </Formik>
)
