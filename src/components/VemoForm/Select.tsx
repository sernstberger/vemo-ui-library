import React from 'react'
import FieldBase, { FieldBaseProps } from './FieldBase'
import Icon from '../Icon'
import { OptionProps } from './types'
import styles from './styles'

interface SelectProps extends FieldBaseProps {
  options: OptionProps[] | string[] | any
}

const ValidatedSelect = (props: SelectProps) => {
  const { options, ...rest } = props
  const classes = styles()

  return (
    <FieldBase
      {...rest}
      select
      SelectProps={{
        native: true,
        IconComponent: () => (
          <div className={classes.SelectIcon}>
            <Icon name="ArrowDown" />
          </div>
        )
      }}
    >
      <option value="">Select {props.label}</option>
      {options &&
        options.map((option: OptionProps | string | any, index: number) => {
          const isObject = typeof option === 'object' && option !== null
          const _value = isObject ? option.value : option
          const _label = isObject ? option.label : option
          return (
            <option key={index} value={_value}>
              {_label}
            </option>
          )
        })}
    </FieldBase>
  )
}

export default ValidatedSelect
