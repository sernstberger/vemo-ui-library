import React from 'react'
import { Formik, Field, Form } from 'formik'
import SubmitButton from '../Form/SubmitButton'
import FieldBase from './FieldBase'
import Errors from './Errors'

const VemoForm = (props: any) => {
  const { fields, onSubmit } = props

  let initialValues: any[] = []
  fields.map((field: any) => {
    initialValues = {
      ...initialValues,
      ...{ [field.name]: field.initialValue }
    }
  })

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {props => {
        return (
          <Form>
            <Errors />
            <div>
              {fields.map((field: any, index: number) => {
                const { name, label, required, disabled, tooltip } = field
                return (
                  <FieldBase
                    key={index}
                    {...{ name, label, required, disabled, tooltip }}
                  />
                )
              })}
            </div>
            <SubmitButton />
          </Form>
        )
      }}
    </Formik>
  )
}

export default VemoForm
