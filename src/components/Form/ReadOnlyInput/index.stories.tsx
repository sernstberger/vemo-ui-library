import React from 'react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Formik } from 'formik'
import ReadOnlyInput from './index'
import ValidatedInputBase from '../ValidatedInputBase'

export default {
  title: 'Read Only Input',
  decorators: [withKnobs]
}

export const ReadOnlyInputStory = () => (
  <div style={{ padding: 40 }}>
    <Formik initialValues={{ foo: '' }} onSubmit={() => {}}>
      <ReadOnlyInput
        label={text('Label', 'Foo')}
        content="alksjfalkfjasf"
        editable
        // fsMasked
      />
    </Formik>
  </div>
)
