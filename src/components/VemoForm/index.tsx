import React from 'react'
import { Formik, Field, Form } from 'formik'
import SubmitButton from '../Form/SubmitButton'
import FieldBase from './FieldBase'

const VemoForm = (props: any) => {
  const { fields } = props

  let initialValues: any[] = []
  fields.map((field: any) => {
    initialValues = {
      ...initialValues,
      ...{ [field.field]: field.initialValue }
    }
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 1500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {props => {
        return (
          <Form>
            <div>errors</div>
            <div>
              {fields.map((field: any, index: number) => {
                return (
                  <FieldBase
                    key={index}
                    name={field.field}
                    label={field.label}
                    required={field.required}
                    disabled={field.disabled}
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
