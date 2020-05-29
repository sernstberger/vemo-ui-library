import React, { useRef } from 'react'
import { useFormikContext, useField, Field, getIn } from 'formik'
import {
  TextField,
  StandardTextFieldProps,
  InputAdornment
} from '@material-ui/core'
import Label from './Label'
import { AnySchemaConstructor } from 'yup'
import Icon, { IconProps } from '../Icon'
import Adornment, { AdornmentProps } from './Adornment'

export interface CustomValidationProps {
  schema: AnySchemaConstructor // Yup schema
  message: string
}

export interface FieldBaseProps extends StandardTextFieldProps {
  customValidation?: CustomValidationProps | CustomValidationProps[]
  // decimalScale?: any
  // exactLength?: number
  initialValue: any
  icon?: AdornmentProps
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
    minLength,
    name,
    placeholder = `Enter ${label}`,
    required,
    tooltip,
    customValidation,
    icon,
    ...rest
  } = props

  const initialRequired = useRef(required).current

  const validate = async (value: any) => {
    let error = ''

    if (required && (!value || value.length === 0)) {
      error = `${label} is required`
      return error
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

    // handle custom validations
    if (value && customValidation) {
      const customValidationArray = Array.isArray(customValidation)
        ? customValidation
        : [customValidation]

      await Promise.all(
        customValidationArray.map(async cv => {
          // check to see if the yup schema is valid
          if (typeof cv.schema !== 'object') {
            return
          }

          // check to see if the the field's value is valid; returns boolean
          const validateField = await cv.schema.isValid(value)

          if (!validateField) {
            error = cv.message
          }
        })
      )
    }

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
              margin="none"
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
              InputLabelProps={{
                shrink: true,
                required: false
              }}
              InputProps={{
                startAdornment: icon ? (
                  <Adornment
                    icon={{
                      name: icon.name
                    }}
                    position={icon.position}
                  />
                ) : (
                  undefined
                )
              }}
            />
          </div>
        )
      }}
    </Field>
  )
}

export default VemoForm
