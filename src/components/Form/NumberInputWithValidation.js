import React from 'react'
import PropTypes from 'prop-types'
import { number } from 'yup'
import InputWithValidationBase, { InputWithValidationBaseProps } from './InputWithValidationBase'

const NumberInputWithValidation = (props) => {
  const { minValue, maxValue, stepValue, label, decimalScale, inputProps, customValidation } = props

  return (
    <InputWithValidationBase
      {...props}
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

NumberInputWithValidation.defaultProps = {
  minValue: 0,
  maxValue: 99999999999999,
  stepValue: undefined
}

const NumberInputWithValidationProps = {
  ...InputWithValidationBaseProps,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  stepValue: PropTypes.number
}

NumberInputWithValidation.propTypes = NumberInputWithValidationProps

export default NumberInputWithValidation
export { NumberInputWithValidationProps }
