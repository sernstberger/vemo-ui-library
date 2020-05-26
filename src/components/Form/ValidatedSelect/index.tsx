import React from 'react'
import ValidatedInputBase, {
  ValidatedInputBaseProps
} from '../ValidatedInputBase'
// import {ArrowDown} from '../../Icon'
import Icon from '../../Icon'

interface OptionProps {
  label: string
  value: string
  disabled?: boolean
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
        native: true,
        IconComponent: () => (
        <div
          style={{
            borderLeft: `1px solid #CCC`,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            // paddingLeft: theme.spacing(1.5),
            // marginLeft: theme.spacing(1.5),
            // right: theme.spacing(1.5),
            right: 0,
            height: '75%',
            // width: theme.spacing(4.5)
          }}
        >
          <Icon name="ArrowDown" />
        </div>
      )
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
