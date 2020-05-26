import { CustomValidationProps } from './ValidatedInputBase'

interface ValidationsProps {
  exactLength?: number
  label: string
  required?: boolean
  value: any
  maxLength?: number
  minLength?: number
  customValidation?: CustomValidationProps | CustomValidationProps[]
}

const validations = async (props: ValidationsProps) => {
  const {
    value,
    label,
    required,
    maxLength,
    minLength,
    exactLength,
    customValidation
  } = props

  let error = ''

  if (required && (!value || value.length === 0)) {
    error = `${label} is required`
    return error
  }

  if (value) {
    if (maxLength && value.length > maxLength) {
      error = `${label} can't be more than ${maxLength} characters`
      return error
    }
    if (minLength && value.length < minLength) {
      error = `${label} can't be less than ${minLength} characters`
      return error
    }
  }

  // if value is numeric, validate length of digits only (no dashes)
  if (exactLength && value && value.length && exactLength) {
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

export default validations
