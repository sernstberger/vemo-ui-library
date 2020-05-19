import React from 'react'
import ValidatedInputBase, {
  ValidatedInputBaseProps
} from '../ValidatedInputBase'

interface OptionProps {
  label: string
  value: string
}

interface ValidatedSelectProps extends ValidatedInputBaseProps {
  options: OptionProps[] | string[] | any
}

const ValidatedSelect = (props: ValidatedSelectProps) => {
  const { options, ...rest } = props

  return (
    <ValidatedInputBase
      {...rest}
      select
      SelectProps={{
        native: true
      }}
    >
      <option value="">Select {props.label}</option>
      {options.map((option: OptionProps | string | any, index: number) => {
        const isObject = typeof option === 'object' && option !== null
        const _value = isObject ? option.value : option
        const _label = isObject ? option.label : option
        return (
          <option key={index} value={_value}>
            {_label}
          </option>
        )
      })}
    </ValidatedInputBase>
  )
}

export default ValidatedSelect
