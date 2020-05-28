import React from 'react'
import Text, { TextProps } from './Text'

interface TextareaProps extends TextProps {
  minHeight?: number
}

const Textarea = (props: TextareaProps) => {
  const { minHeight = 200, ...rest } = props

  return (
    <Text
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
