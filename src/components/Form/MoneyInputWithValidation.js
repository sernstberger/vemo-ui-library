import React from 'react'
import { number } from 'yup'
import formatMoney from '../../helpers/formatMoney'
import NumberInputWithValidation, { NumberInputWithValidationProps } from './NumberInputWithValidation'

const MoneyInputWithValidation = (props) => {
  const { minValue, maxValue, label } = props
  return (
    <NumberInputWithValidation
      icon={{
        name: 'money',
        position: 'start'
      }}
      decimalScale={2}
      customValidation={[
        {
          schema: maxValue && number().max(maxValue),
          message: maxValue && `${label} can't be more than ${formatMoney(maxValue)}`
        },
        {
          schema: number().min(minValue),
          message: `${label} can't be less than ${formatMoney(minValue)}`
        }
      ]}
      {...props}
    />
  )
}

MoneyInputWithValidation.defaultProps = {
  minValue: 0,
  maxValue: 99999999999999
}

MoneyInputWithValidation.propTypes = {
  ...NumberInputWithValidationProps
}

export default MoneyInputWithValidation
