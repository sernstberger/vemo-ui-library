import React from 'react'
import ValidatedInputBase from '../ValidatedInputBase'

const ValidatedSelect = (props) => {
  const { options, ...rest } = props

  return (
    <ValidatedInputBase {...rest} select>
      <option value="">
        Select {props.label}
      </option>
      {options.map((option, index) => {
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

// const ValidatedSelectProps = {
//   ...InputWithValidationBaseProps,
//   options: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         value: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired
//       })
//     ),
//     PropTypes.arrayOf(PropTypes.string.isRequired)
//   ]).isRequired
// }

// ValidatedSelect.propTypes = ValidatedSelectProps

export default ValidatedSelect
