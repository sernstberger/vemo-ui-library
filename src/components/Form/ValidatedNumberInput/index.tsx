import React from 'react'
import { number } from 'yup'
import ValidatedInputBase, {
  ValidatedInputBaseProps
} from '../ValidatedInputBase'

export interface ValidatedNumberInputProps extends ValidatedInputBaseProps {
  minValue?: number
  maxValue?: number
  stepValue?: number
}

const ValidatedNumberInput = (props: ValidatedNumberInputProps) => {
  const {
    minValue = 0,
    maxValue = 99999999999999,
    stepValue = undefined,
    label,
    decimalScale,
    inputProps,
    customValidation,
    ...rest
  } = props

  return (
    <ValidatedInputBase
      {...rest}
      {...{ label }}
      inputMode="numeric"
      type="number"
      inputProps={{
        ...inputProps,
        step: stepValue,
        min: minValue,
        max: maxValue
      }}
      customValidation={
        customValidation || [
          {
            schema: maxValue && number().max(maxValue),
            message: maxValue && `${label} can't be more than ${maxValue}`
          },
          {
            schema: number().min(minValue),
            message: `${label} can't be less than ${minValue}`
          }
        ]
      }
      decimalScale={decimalScale}
      placeholder="0.00"
    />
  )
}

export default ValidatedNumberInput
