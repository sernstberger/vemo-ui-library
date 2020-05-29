import React from 'react'
import { number } from 'yup'
import NumberFormat from 'react-number-format'
import FieldBase, { FieldBaseProps, CustomValidationProps } from './FieldBase'

interface NumberProps extends FieldBaseProps {
  decimalScale?: number
  minValue?: number
  maxValue?: number
  stepValue?: number
}

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
  decimalScale?: number
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, decimalScale, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        })
      }}
      thousandSeparator
      isNumericString
      decimalScale={decimalScale}
    />
  )
}

const Number = (props: NumberProps) => {
  const {
    minValue = 0,
    maxValue = 99999999999999,
    stepValue = undefined,
    // label,
    decimalScale,
    inputProps,
    customValidation,
    ...rest
  } = props

  const maxValueValidation: CustomValidationProps = {
    schema: number().max(maxValue),
    message: `${props.label} can't be more than ${maxValue}`
  }

  const minValueValidation: CustomValidationProps = {
    schema: number().min(minValue),
    message: `${props.label} can't be less than ${minValue}`
  }

  return (
    <FieldBase
      {...rest}
      inputMode="numeric"
      type="number"
      inputProps={{
        ...inputProps,
        step: stepValue,
        min: minValue,
        max: maxValue
      }}
      InputProps={{
        inputComponent: NumberFormatCustom as any
      }}
      customValidation={
        customValidation || [maxValueValidation, minValueValidation]
      }
      placeholder="0.00"
    />
  )
}

export default Number
