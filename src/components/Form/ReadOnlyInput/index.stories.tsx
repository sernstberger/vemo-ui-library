import React from 'react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import ReadOnlyInput from './index'
import { Formik } from 'formik'
import ValidatedTextInput from '../ValidatedTextInput'

export default {
  title: 'Read Only Input',
  decorators: [withKnobs]
}

export const ReadOnlyInputStory = () => (
  <Formik initialValues={{ foo: '' }} onSubmit={() => {}}>
    {/* <ReadOnlyInput
      label={text('Label', 'fooooo')}
      value="alksjfalkfjasf"
      editable
      // fsMasked
    /> */}
    <ValidatedTextInput field="foo" label="Read Only" readOnly={boolean('Read Only', false)} />
  </Formik>
)
