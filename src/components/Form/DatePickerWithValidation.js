import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { Field } from 'formik'
import {
  isValid,
  isBefore,
  subDays,
  isAfter,
  format,
  isWeekend,
  isFuture,
  isPast,
  endOfDay,
  startOfDay
} from 'date-fns'
import Holidays from 'date-holidays'
import { Typography } from '@material-ui/core'

const DatePickerWithValidation = (props) => {
  const {
    field,
    maxDate,
    minDate,
    label,
    required,
    helperText,
    disableWeekendsAndHolidays,
    disablePast,
    disableFuture,
    disabled
  } = props
  const holidayArray = new Holidays('US')

  const initialRequired = useRef(required).current

  const isHolidayOrWeekend = (date) => {
    return holidayArray.isHoliday(date).type === 'public' || isWeekend(date)
  }

  const validate = (value) => {
    let error

    if (required && !value) {
      error = `${label} is required`
    } else if (!!value && !isValid(value)) {
      error = `${label} must be a valid date`
    } else if (isBefore(value, subDays(minDate, 1))) {
      error = `${label} must be after ${format(minDate, 'MM/dd/yyyy')}`
    } else if (isAfter(value, maxDate)) {
      error = `${label} must be before ${format(maxDate, 'MM/dd/yyyy')}`
    } else if (disablePast && isPast(endOfDay(value))) {
      error = `${label} cannot be in the past`
    } else if (disableFuture && isFuture(startOfDay(value))) {
      error = `${label} cannot be in the future`
    } else if (disableWeekendsAndHolidays && isHolidayOrWeekend(value)) {
      error = `${label} must be a business day (Monday – Friday not including federal holidays)`
    }
    return error
  }

  const handleDisableDates = (date) => {
    return isHolidayOrWeekend(date)
  }

  return (
    <Field name={field} validate={validate}>
      {({ field: { value, onBlur, name }, form: { touched, errors, setFieldValue, isSubmitting } }) => {
        return (
          <KeyboardDatePicker
            required={required}
            id={name}
            name={name}
            label={
              <span>
                {label}
                {!initialRequired && !required && (
                  <Typography variant="body2" color="textSecondary" component="span">
                    {' '}
                    (optional)
                  </Typography>
                )}
              </span>
            }
            InputLabelProps={{ required: false }}
            autoOk
            value={value}
            onBlur={onBlur(name)}
            onChange={(_date) => setFieldValue(name, _date)}
            variant="inline"
            fullWidth
            format="MM/dd/yyyy"
            placeholder="MM/DD/YYYY"
            error={errors[name] && touched[name]}
            shouldDisableDate={disableWeekendsAndHolidays ? handleDisableDates : null}
            helperText={(errors[name] && touched[name] && errors[name]) || helperText}
            disabled={isSubmitting || disabled}
            maxDate={maxDate}
            minDate={minDate}
            disablePast={disablePast}
            disableFuture={disableFuture}
          />
        )
      }}
    </Field>
  )
}

DatePickerWithValidation.defaultProps = {
  helperText: undefined,
  disableWeekendsAndHolidays: false,
  minDate: undefined,
  maxDate: undefined,
  required: false,
  disablePast: false,
  disableFuture: false,
  disabled: false
}

DatePickerWithValidation.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  disableWeekendsAndHolidays: PropTypes.bool,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  required: PropTypes.bool,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disabled: PropTypes.bool
}

export default DatePickerWithValidation
