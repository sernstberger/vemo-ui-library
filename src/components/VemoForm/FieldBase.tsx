import React, { useRef } from 'react'
import { useFormikContext, useField, Field, getIn } from 'formik'
import { TextField, BaseTextFieldProps } from '@material-ui/core'
import Label from '../Form/ValidatedInputBase/Label'

export interface ValidatedInputBaseProps extends BaseTextFieldProps {
  // This should take a Yup validation or an array of Yup validations
  // customValidation?: CustomValidationProps | CustomValidationProps[]
  // decimalScale?: any
  // exactLength?: number
  name: string
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
  tooltip?: any
  // readOnly?: boolean
}

const VemoForm = (props: any) => {
  const {
    disabled,
    helperText,
    isLoading,
    label,
    name,
    placeholder = `Enter ${label}`,
    required,
    tooltip
  } = props

  const initialRequired = useRef(required).current

  const validate = async (value: any) => {
    let error = ''

    if (required && (!value || value.length === 0)) {
      error = `${label} is required`
      return error
    }

    // if (hasCounter) {
    //   setCounter(value.length)
    // }

    // if (value) {
    //   if (value.length > maxLength) {
    //     error = `${label} can't be more than ${maxLength} characters`
    //     return error
    //   }
    //   if (value.length < minLength) {
    //     error = `${label} can't be less than ${minLength} characters`
    //     return error
    //   }
    // }

    // // if value is numeric, validate length of digits only (no dashes)
    // if (value && value.length && exactLength) {
    //   let strippedValue
    //   strippedValue = value.replace('+1', '')
    //   strippedValue = strippedValue.replace(/\D/g, '')

    //   if (strippedValue.length !== exactLength) {
    //     error = `${label} must be ${exactLength} characters`
    //     return error
    //   }
    // }

    // // handle custom validations
    // if (value && customValidation) {
    //   const customValidationArray = Array.isArray(customValidation)
    //     ? customValidation
    //     : [customValidation]

    //   await Promise.all(
    //     customValidationArray.map(async cv => {
    //       // check to see if the yup schema is valid
    //       if (typeof cv.schema !== 'object') {
    //         return
    //       }

    //       // check to see if the the field's value is valid; returns boolean
    //       const validateField = await cv.schema.isValid(value)

    //       if (!validateField) {
    //         error = cv.message
    //       }
    //     })
    //   )
    // }

    return error
  }

  const Component = TextField

  return (
    <Field name={name} validate={validate}>
      {({
        // @ts-ignore
        field: { value, onBlur, name, onChange },
        // @ts-ignore
        form: { touched, errors, setFieldValue, isSubmitting },
        // @ts-ignore
        meta
      }) => {
        const hasErrors = meta.error && meta.touched
        const hasNestedErrors = getIn(touched, name) && getIn(errors, name)
        return (
          <div>
            <Component
              {...{ value, name, onChange, placeholder, label, required }}
              id={name}
              type="text"
              error={hasErrors || hasNestedErrors}
              helperText={
                (hasErrors && meta.error) ||
                (hasNestedErrors && getIn(errors, name)) ||
                helperText
              }
              onBlur={onBlur(name)}
              disabled={isLoading || isSubmitting || disabled}
              label={
                <Label
                  {...{ label, tooltip }}
                  required={!initialRequired && !required && !disabled}
                />
              }
              InputLabelProps={{ shrink: true, required: false }}
            />
          </div>
        )
      }}
    </Field>
  )
}

export default VemoForm
