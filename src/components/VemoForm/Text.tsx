import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import { useField } from 'formik'
import FieldBase, { FieldBaseProps } from './FieldBase'
import styles from './styles'
import { string } from 'yup'

export interface TextProps extends FieldBaseProps {
  maxLength?: number
  minLength?: number
}

const Text = (props: TextProps) => {
  const { maxLength = undefined, minLength = undefined, ...rest } = props
  const classes = styles()
  const [counter, setCounter] = useState<number>(0)
  const [field, meta, helpers] = useField(props.name as string)
  useEffect(() => {
    setCounter(field.value ? field.value.length : 0)
  }, [field])
  const hasError = meta.error && meta.touched

  return (
    <div className={classes.TextWrapper}>
      {maxLength && (
        <div className={classes.Counter}>
          <Typography
            variant="body2"
            color={hasError ? 'error' : 'textSecondary'}
          >
            {`${counter} / ${maxLength} characters`}
          </Typography>
        </div>
      )}
      <FieldBase
        {...rest}
        customValidation={[
          {
            schema: field.value && maxLength && string().max(maxLength),
            message:
              field.value &&
              maxLength &&
              `${props.label} can't be more than ${maxLength} characters`
          },
          {
            schema: field.value && minLength && string().min(minLength),
            message:
              field.value &&
              minLength &&
              `${props.label} can't be less than ${minLength} characters`
          }
        ]}
      />
    </div>
  )
}

export default Text
