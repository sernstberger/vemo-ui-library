import React from 'react'
import { Formik, Field, Form } from 'formik'
import SubmitButton from '../Form/SubmitButton'
import FieldBase from './FieldBase'
import Errors from './Errors'
import { camelCase } from 'lodash'

interface VemoFormFieldProps {
  label: string
  required: boolean
  disabled: boolean
  tooltip: string
}
interface VemoFormProps {
  fields: VemoFormFieldProps[]
  onSubmit: any
}

const VemoForm = (props: VemoFormProps) => {
  const { fields, onSubmit } = props

  let initialValues: any[] = []
  fields.map((field: any) => {
    const name = camelCase(field.label)
    initialValues = {
      ...initialValues,
      ...{ [name]: field.initialValue }
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
                const { label, required, disabled, tooltip } = field
                const name = camelCase(label)
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
