import React from 'react'
import { Formik, Field, Form } from 'formik'
import { camelCase } from 'lodash'

import Errors from './Errors'
import SubmitButton from '../Form/SubmitButton'
import Text from './Text'
import Textarea from './Textarea'
import Select from './Select'
import Number from './Number'
import Money from './Money'
import Percentage from './Percentage'

interface VemoFormFieldProps {
  decimalScale?: number
  disabled?: boolean
  initialValue?: string
  label: string
  required?: boolean
  tooltip?: string
  type?: 'text' | 'number' | 'money' | 'textarea' | 'select' | 'radios'
  options?: any
  maxLength?: number
  minValue?: number
  maxValue?: number
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
    text: Text,
    textarea: Textarea,
    select: Select,
    number: Number,
    money: Money,
    percentage: Percentage
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
                  options = undefined,
                  decimalScale = 0,
                  minValue = 0,
                  maxValue = 0
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
                      options,
                      decimalScale,
                      minValue,
                      maxValue
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
