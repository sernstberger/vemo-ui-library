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
      onSubmit={() => {
        alert('hi!')
      }}
    >
      <Form>
        <div>
          {fields.map((field: any, index: number) => {
            return <FieldBase key={index} name={field.field} label={field.label} />
          })}
        </div>
        <SubmitButton />
      </Form>
    </Formik>
  )
}

export default VemoForm
