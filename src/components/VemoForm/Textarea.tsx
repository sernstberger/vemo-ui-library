import React, { useState } from 'react'
import FieldBase, { FieldBaseProps } from './FieldBase'
import { Typography } from '@material-ui/core'

interface TextareaProps extends FieldBaseProps {
  // hasCounter?: boolean
  minHeight?: number
  // maxLength?: number
}

const Textarea = (props: TextareaProps) => {
  const {
    minHeight = 200,
    // hasCounter = false,
    // maxLength = false,
    ...rest
  } = props
  const [counter, setCounter] = useState(0)
  return (
    <FieldBase
      {...rest}
      multiline
      inputProps={{
        style: {
          minHeight
        }
      }}
    />
  )
}

export default Textarea
