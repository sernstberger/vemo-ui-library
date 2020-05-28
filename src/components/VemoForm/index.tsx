import React from 'react'
import { Formik, Field, Form } from 'formik'
import { camelCase } from 'lodash'

import Errors from './Errors'
import FieldBase from './FieldBase'
import SubmitButton from '../Form/SubmitButton'
import Textarea from './Textarea'
import Select from './Select'

interface VemoFormFieldProps {
  initialValue?: string
  disabled?: boolean
  label: string
  required?: boolean
  tooltip?: string
  type?: 'text' | 'number' | 'money' | 'textarea' | 'select' | 'radios'
  options?: any
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

  const fieldTypes = {
    text: FieldBase,
    textarea: Textarea,
    select: Select
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {props => {
        return (
          <Form>
            <Errors />
            <div>
              {fields.map((field: any, index: number) => {
                const {
                  label,
                  required = false,
                  disabled = false,
                  tooltip,
                  type = 'text',
                  initialValue = '',
                  maxLength,
                  options = undefined
                } = field
                const name = camelCase(label)
                const Component = fieldTypes[type]
                return (
                  <Component
                    key={index}
                    {...{
                      name,
                      label,
                      required,
                      disabled,
                      tooltip,
                      initialValue,
                      maxLength,
                      options
                    }}
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
