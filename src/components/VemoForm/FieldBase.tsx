import React from 'react'
import { useFormikContext, useField, Field } from 'formik'
import { TextField, BaseTextFieldProps } from '@material-ui/core'

export interface ValidatedInputBaseProps extends BaseTextFieldProps {
  // This should take a Yup validation or an array of Yup validations
  // customValidation?: CustomValidationProps | CustomValidationProps[]
  // decimalScale?: any
  // exactLength?: number
  // field: string
  // hasCounter?: boolean
  // icon?: AdornmentProps
  // inputMode?:
  //   | 'decimal'
  //   | 'email'
  //   | 'none'
  //   | 'numeric'
  //   | 'search'
  //   | 'tel'
  //   | 'url'
  // isLoading?: boolean
  // maxLength?: number
  // minLength?: number
  // // size?: 'small' | 'medium' | 'large' | undefined
  // tooltip?: any
  // readOnly?: boolean
}

const VemoForm = (props: any) => {
  const { name, label, placeholder = `Enter ${label}` } = props
  const validation = ''

  return (
    <Field name={name} validate={validation}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta
      }) => (
        <div>
          <TextField
            {...field}
            type="text"
            label={label}
            {...{ placeholder }}
          />
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  )
}

export default VemoForm
