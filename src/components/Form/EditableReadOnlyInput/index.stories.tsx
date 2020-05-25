import React from 'react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Formik } from 'formik'
import EditableReadOnlyInput from './index'

export default {
  title: 'Read Only Input',
  decorators: [withKnobs]
}

export const WithEdit = () => (
  <div style={{ padding: 40 }}>
    <Formik initialValues={{ testing: 'sweet' }} onSubmit={() => {}}>
      <EditableReadOnlyInput
        label={text('Label', 'Testing')}
        field="testing"
        // content="alksjfalkfjasf"
        // fsMasked
      />
    </Formik>
  </div>
)
