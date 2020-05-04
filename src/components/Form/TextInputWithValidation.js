import React from 'react'
import InputWithValidationBase, { InputWithValidationBaseProps } from './InputWithValidationBase'

const TextInputWithValidation = (props) => {
  return <InputWithValidationBase {...props} />
}

const TextInputWithValidationProps = {
  ...InputWithValidationBaseProps
}

TextInputWithValidation.propTypes = TextInputWithValidationProps

export default TextInputWithValidation
export { TextInputWithValidationProps }
