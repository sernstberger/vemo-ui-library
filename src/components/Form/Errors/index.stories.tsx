import React from 'react'
// import { action } from '@storybook/addon-actions'
import ValidatedInputBase from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Formik, FieldArray, Field, ErrorMessage, Form } from 'formik'
import Errors from '../Errors'
import ValidatedTextInput from '../ValidatedTextInput'
import { Button } from '@material-ui/core'

export default {
  title: 'Errors',
  component: ValidatedInputBase,
  decorators: [withKnobs]
}

export const Base = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      loans: [
        { name: 'Student loan', rate: undefined, term: undefined },
        { name: 'Parent loan', rate: undefined, term: undefined }
      ]
    }}
    onSubmit={() => {}}
  >
    {props => {
      return (
        <Form>
          <Errors />
          <ValidatedTextInput field="firstName" label="First name" required />
          <ValidatedTextInput field="lastName" label="Last name" required />

          <FieldArray
            name="loans"
            render={arrayHelpers => (
              <div>
                {props.values.loans.map((loan, index) => (
                  <div key={index}>
                    <ValidatedTextInput
                      label={`${loan.name} rate`}
                      field={`loans[${index}].rate`}
                      required
                    />
                    <ValidatedTextInput
                      label={`${loan.name} term`}
                      field={`loans.${index}.term`}
                      required
                    />
                  </div>
                ))}
              </div>
            )}
          />
          <Button onClick={() => props.handleSubmit()} variant="contained">
            Submit
          </Button>
        </Form>
      )
    }}
  </Formik>
)
