import React, { useState, useRef } from 'react'
import { Field, Formik, Form } from 'formik'
import {
  TextField,
  InputAdornment,
  Typography,
  CircularProgress,
  BaseTextFieldProps
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
import Icon from '../../Icon'
import styles from '../styles'
import Label from './Label'

export interface CustomValidationProps {
  schema: any // not sure what the right type is here
  message: string
}

export interface ValidatedInputBaseProps extends BaseTextFieldProps {
  // This should take a Yup validation or an array of Yup validations
  customValidation?: CustomValidationProps | CustomValidationProps[]
  decimalScale?: any
  exactLength?: number
  field: string
  hasCounter?: boolean
  icon?: {
    name: React.ReactNode | string
    position?: 'start' | 'end'
    color?: string
  }
  inputMode?:
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'url'
  isLoading?: boolean
  maxLength?: number
  minLength?: number
  // size?: 'small' | 'medium' | 'large' | undefined
  tooltip?: any
  readOnly?: boolean
}

// This is meant to be a common component for several input types. It shouldn't be used on its own.
const ValidatedInputBase = (props: ValidatedInputBaseProps) => {
  const {
    customValidation = undefined,
    disabled = false,
    field,
    hasCounter = false,
    helperText = undefined,
    icon,
    inputMode = 'none',
    isLoading = false,
    label,
    placeholder = undefined,
    required = false,
    size,
    tooltip = undefined,
    type = 'text',
    maxLength = 100,
    minLength = 0,
    decimalScale,
    exactLength = undefined,
    readOnly = false,
    ...rest
  } = props

  const classes = styles()

  const [counter, setCounter] = useState(0)
  const initialRequired = useRef(required).current

  const validate = async (value: any) => {
    let error = ''

    if (required && (!value || value.length === 0)) {
      error = `${label} is required`
      return error
    }

    if (hasCounter) {
      setCounter(value.length)
    }

    if (value) {
      if (value.length > maxLength) {
        error = `${label} can't be more than ${maxLength} characters`
        return error
      }
      if (value.length < minLength) {
        error = `${label} can't be less than ${minLength} characters`
        return error
      }
    }

    // if value is numeric, validate length of digits only (no dashes)
    if (value && value.length && exactLength) {
      let strippedValue
      strippedValue = value.replace('+1', '')
      strippedValue = strippedValue.replace(/\D/g, '')

      if (strippedValue.length !== exactLength) {
        error = `${label} must be ${exactLength} characters`
        return error
      }
    }

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

  const isNumber = type === 'number'
  const onlyAcceptsNumbers = inputMode === 'numeric' || isNumber // some fields like phone numbers need numbers, but SF expects their value as a string
  const Component: any = onlyAcceptsNumbers ? NumberFormat : TextField

  return (
    <Formik initialValues={{ foo: '' }} onSubmit={() => {}}>
      <Form>
        <Field name={field} validate={validate}>
          {({
            // @ts-ignore
            field: { value, onBlur, name, onChange },
            // @ts-ignore
            form: { touched, errors, setFieldValue, isSubmitting }
          }) => {
            const adornmentPosition = icon
              ? `${icon.position}Adornment`
              : 'startAdornment'

            if (value === 'blank') {
              setFieldValue(name, '')
            }

            const onValueChange = (values: any) => {
              setFieldValue(name, values.floatValue)
            }

            // const isLarge = size === 'large'

            const adornment = (isLoading || icon) && {
              [adornmentPosition]: (
                <InputAdornment
                  position={(icon && icon.position) || 'start'}
                  // className={isLarge ? classes.largeInput : ''}
                >
                  {isLoading ? (
                    <CircularProgress size={20} />
                  ) : (
                    <Icon
                      color={icon!.color}
                      name={icon!.name}
                      // size={isLarge ? 'inherit' : undefined}
                    />
                  )}
                </InputAdornment>
              )
            }

            return (
              <div className={classes.textWrapper}>
                {hasCounter && (
                  <div className={classes.characterLimitText}>
                    <Typography
                      variant="body2"
                      color={errors[field] ? 'error' : 'textSecondary'}
                    >
                      {`${counter} / ${maxLength} characters`}
                    </Typography>
                  </div>
                )}
                <Component
                  id={name}
                  placeholder={placeholder || `Enter ${label}`}
                  {...{
                    required,
                    // name,
                    inputMode,
                    value
                    // type
                  }}
                  // NumberFormat props
                  {...(isNumber
                    ? {
                        thousandSeparator: true,
                        decimalScale,
                        onValueChange
                      }
                    : undefined)}
                  onChange={isNumber ? undefined : onChange}
                  {...(onlyAcceptsNumbers
                    ? { customInput: TextField }
                    : undefined)}
                  // //////////////////////////////////////
                  error={errors[field] && touched[field]}
                  helperText={
                    (errors[field] && touched[field] && errors[field]) ||
                    helperText
                  }
                  onBlur={onBlur(name)}
                  label={
                    <Label
                      {...{ label, tooltip }}
                      required={!initialRequired && !required && !disabled}
                    />
                  }
                  InputLabelProps={{ shrink: true, required: false }}
                  disabled={isLoading || isSubmitting || disabled}
                  InputProps={{
                    ...adornment,
                    disableUnderline: true,
                    className: classes.root,
                    // className: isLarge ? classes.largeInputProps : undefined,
                    style: readOnly
                      ? {
                          backgroundColor: 'transparent',
                          borderColor: 'transparent',
                          fontSize: 20,
                          transition: '250ms all'
                        }
                      : {}
                  }}
                  inputProps={
                    {
                      // className: isLarge ? classes.largeHtmlInputProps : undefined
                    }
                  }
                  fullWidth
                  {...rest}
                >
                  {props.children}
                </Component>
              </div>
            )
          }}
        </Field>
      </Form>
    </Formik>
  )
}

export default ValidatedInputBase
