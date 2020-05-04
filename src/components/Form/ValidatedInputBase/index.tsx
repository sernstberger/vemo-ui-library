import React, { useState, useRef } from 'react'
// import { isValid } from 'yup'
import { Field } from 'formik'
import {
  TextField,
  InputAdornment,
  Typography,
  Tooltip,
  CircularProgress,
  StandardTextFieldProps
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
// import Icon from '../Icon'
import styles from '../styles'
import { StudentsLine } from '../../Icons'

export interface ValidatedInputBaseProps extends StandardTextFieldProps {
  //   // This should take a Yup validation or an array of Yup validations
  // customValidation: oneOfType([
  //   shape({
  //     schema: any,
  //     message: string
  //   }),
  //   arrayOf(
  //     shape({
  //       schema: any,
  //       message: string
  //     })
  //   )
  // ])
  customValidation?: any
  decimalScale?: any
  exactLength?: number
  field: string
  hasCounter?: boolean
  icon?: {
    name: React.ReactNode
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
  minHeight?: number
  minLength?: number
  // size?: 'small' | 'medium' | 'large' | undefined
  tooltip?: any
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
    inputProps,
    InputProps,
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
    // these should NOT be used, just here so they don't get added with ...rest
    minHeight = undefined,
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
  const Component = onlyAcceptsNumbers ? NumberFormat : TextField

  return (
    <Field name={field} validate={validate}>
      {({
        field: { value, onBlur, name, onChange },
        form: { touched, errors, setFieldValue, isSubmitting }
      }) => {
        const adornmentPosition = icon
          ? `${icon.position}Adornment`
          : 'startAdornment'

        if (value === 'blank') {
          setFieldValue(name, '')
        }

        const onValueChange = values => {
          setFieldValue(name, values.floatValue)
        }

        const isLarge = size === 'large'

        const adornment = (isLoading || icon) && {
          [adornmentPosition]: (
            <InputAdornment
              position={(icon && icon.position) || 'start'}
              className={isLarge ? classes.largeInput : ''}
            >
              {isLoading ? (
                <CircularProgress size={20} />
              ) : (
                // <Icon
                //   color={icon.color}
                //   icon={icon.name}
                //   size={isLarge ? 'inherit' : undefined}
                // />
                icon.name
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
                  color="textSecondary"
                >{`${counter} / ${maxLength} characters`}</Typography>
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
              {...(onlyAcceptsNumbers ? { customInput: TextField } : undefined)}
              // //////////////////////////////////////
              error={errors[field] && touched[field]}
              helperText={
                (errors[field] && touched[field] && errors[field]) || helperText
              }
              onBlur={onBlur(name)}
              label={
                <span>
                  {label}
                  {!initialRequired && !required && !disabled && (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                    >
                      {' '}
                      (optional)
                    </Typography>
                  )}
                  {/* show the tooltip if provided */}
                  {tooltip && (
                    <Tooltip title={<span>{tooltip}</span>}>
                      <span>
                        <StudentsLine color="textSecondary" fontSize="small" />
                        {/* <Icon icon="help" color="textSecondary" /> */}
                      </span>
                    </Tooltip>
                  )}
                </span>
              }
              InputLabelProps={{ required: false }}
              disabled={isLoading || isSubmitting || disabled}
              InputProps={{
                ...InputProps,
                ...adornment,
                className: isLarge ? classes.largeInputProps : undefined
              }}
              inputProps={{
                ...inputProps,
                className: isLarge ? classes.largeHtmlInputProps : undefined
              }}
              {...rest}
            >
              {props.children}
            </Component>
          </div>
        )
      }}
    </Field>
  )
}

export default ValidatedInputBase
