import React from 'react'
// import { action } from '@storybook/addon-actions'
import ValidatedInputBase from './index'
import ValidatedSelect from '../ValidatedSelect'
import ValidatedNumberInput from '../ValidatedNumberInput'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Formik } from 'formik'
import ValidatedTextInput from '../ValidatedTextInput'
import ValidatedTextArea from '../ValidatedTextArea'
import ValidatedRadios from '../ValidatedRadios'

export default {
  title: 'Forms',
  component: ValidatedInputBase,
  decorators: [withKnobs]
}

export const InputBase = () => (
  <Formik
    initialValues={{
      foo: '',
      boo: '',
      zoo: '',
      bar: '',
      baz: undefined,
      radio: ''
    }}
    onSubmit={() => {}}
  >
    <div style={{padding: 40, backgroundColor: '#FFF'}}>
      <ValidatedRadios
        field="radio"
        label="Radio Buttons"
        options={[
          { value: 'foo', label: 'Foo', disabled: false },
          { value: 'bar', label: 'Bar', disabled: false }
        ]}
        required={boolean('Required', true)}
        tooltip={text('Tooltip', 'Tooltip text goes here')}
      />
      <ValidatedInputBase
        field="foo"
        label="Base"
        required={boolean('Required', true)}
        helperText="Helper text goes here"
        tooltip={text('Tooltip', 'Tooltip text goes here')}
        icon={{ name: 'StudentsLine', position: 'start', color: '#FF0000' }}
        maxLength={number('Max Length', 100)}
        hasCounter
        disabled
      />

      <ValidatedTextInput
        field="boo"
        label="Text"
        required={boolean('Required', true)}
        helperText="Helper text goes here"
        tooltip={text('Tooltip', 'Tooltip text goes here')}
        icon={{ name: 'StudentsLine', position: 'start', color: '#FF0000' }}
        maxLength={number('Max Length', 100)}
        hasCounter
      />

      <ValidatedTextArea
        field="zoo"
        label="Text Area"
        required={boolean('Required', true)}
        helperText="Helper text goes here"
        tooltip={text('Tooltip', 'Tooltip text goes here')}
        maxLength={1000}
        hasCounter
      />

      <ValidatedSelect
        field="bar"
        label="Select"
        options={['alkdsj', 'lakdfj']}
        required={boolean('Required', true)}
        helperText="Helper text goes here"
        tooltip={text('Tooltip', 'Tooltip text goes here')}
        icon={{ name: 'StudentsLine', position: 'start', color: '#FF0000' }}
        isLoading
      />

      <ValidatedNumberInput
        field="baz"
        label="Number"
        required={boolean('Required', true)}
        helperText="Helper text goes here"
        tooltip={text('Tooltip', 'Tooltip text goes here')}
        icon={{ name: 'StudentsLine', position: 'start', color: '#FF0000' }}
        minValue={0}
        maxValue={1000}
        stepValue={100}
      />
    </div>
  </Formik>
)
