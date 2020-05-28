import React, { useRef, useState } from 'react'
import { useFormikContext, useField, Field, getIn } from 'formik'
import { TextField, BaseTextFieldProps, Typography } from '@material-ui/core'
import Label from '../Form/ValidatedInputBase/Label'

export interface FieldBaseProps extends BaseTextFieldProps {
  // This should take a Yup validation or an array of Yup validations
  // customValidation?: CustomValidationProps | CustomValidationProps[]
  // decimalScale?: any
  // exactLength?: number
  initialValue: any
  // icon?: AdornmentProps
  // inputMode?:
  //   | 'decimal'
  //   | 'email'
  //   | 'none'
  //   | 'numeric'
  //   | 'search'
  //   | 'tel'
  //   | 'url'
  isLoading?: boolean
  maxLength?: number
  minLength?: number
  // // size?: 'small' | 'medium' | 'large' | undefined
  tooltip?: any
}

const VemoForm = (props: FieldBaseProps) => {
  const {
    disabled,
    helperText,
    isLoading,
    initialValue,
    label,
    maxLength,
    name,
    placeholder = `Enter ${label}`,
    required,
    tooltip,
    ...rest
  } = props

  const initialRequired = useRef(required).current
  const [counter, setCounter] = useState<number>(0)

  const validate = async (value: any) => {
    let error = ''

    if (required && (!value || value.length === 0)) {
      error = `${label} is required`
      return error
    }

    if (maxLength) {
      setCounter(value.length)
    }

    if (value) {
      if (maxLength && value.length > maxLength) {
        error = `${label} can't be more than ${maxLength} characters`
        return error
      }
      // if (value.length < minLength) {
      //   error = `${label} can't be less than ${minLength} characters`
      //   return error
      // }
    }

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
            <TextField
              {...rest}
              {...{ value, name, onChange, placeholder, label, required }}
              id={name}
              type="text"
              defaultValue={initialValue}
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
            {maxLength && (
              // <div className={classes.characterLimitText}>
              <div>
                <Typography
                  variant="body2"
                  color={hasErrors ? 'error' : 'textSecondary'}
                >
                  {`${counter} / ${maxLength} characters`}
                </Typography>
              </div>
            )}
          </div>
        )
      }}
    </Field>
  )
}

export default VemoForm
