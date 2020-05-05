import React from 'react'
import ValidatedInputBase, {
  ValidatedInputBaseProps
} from '../ValidatedInputBase'

interface ValidatedTextAreaProps extends ValidatedInputBaseProps {
  minHeight?: number
}

const ValidatedTextArea = (props: ValidatedTextAreaProps) => {
  const { minHeight = 200 } = props

  return (
    <ValidatedInputBase
      {...props}
      hasCounter
      multiline
      inputProps={{
        style: {
          minHeight
        }
      }}
    />
  )
}

export default ValidatedTextArea
