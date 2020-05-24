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
  <Formik initialValues={{ foo: '' }} onSubmit={() => {}}>
    <ReadOnlyInput
      label={text('Label', 'fooooo')}
      content="alksjfalkfjasf"
      editable
      input={<ValidatedInputBase required field="foo" label="Foo"  />}
      // fsMasked
    />
  </Formik>
)
