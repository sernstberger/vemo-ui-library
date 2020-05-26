import React, { useRef } from 'react'
import { useFormikContext, useField } from 'formik'
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio
} from '@material-ui/core'
import Label from '../ValidatedInputBase/Label'

const ValidatedRadios = (props: any) => {
  const { field, label, options, tooltip, required, disabled } = props
  const { setFieldValue, values } = useFormikContext()
  const initialRequired = useRef(required).current
  // const {value} = useField

  // field: { value, onBlur, name, onChange },

  // form: { touched, errors, setFieldValue, isSubmitting }
  const [error, setError] = React.useState(false)
  const [helperText, setHelperText] = React.useState('Choose wisely')

  // const [value, setValue] = React.useState('female')

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(field, (event.target as HTMLInputElement).value)
    setHelperText(' ')
    setError(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (values[field] === 'best') {
      setHelperText('You got it!')
      setError(false)
    } else if (values[field] === 'worst') {
      setHelperText('Sorry, wrong answer!')
      setError(true)
    } else {
      setHelperText('Please select an option.')
      setError(true)
    }
  }

  return (
    <FormControl component="fieldset" error={error} required>
      <Label
        {...{ label, tooltip }}
        required={!initialRequired && !required && !disabled}
      />
      {/* <FormLabel component="legend">{label}</FormLabel> */}
      <RadioGroup
        aria-label={values[field]}
        name={label}
        value={values[field]}
        onChange={handleRadioChange}
      >
        {options.map((option: any, index: number) => {
          return (
            <FormControlLabel
              key={index}
              value={option.value}
              control={<Radio color="primary" />}
              label={option.label}
              disabled={option.disabled}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default ValidatedRadios
