import React, { useState } from 'react'
import clsx from 'clsx'
import { Typography, Button } from '@material-ui/core'
import FSMask from '../../FSMask'
import styles from './styles'
import ValidatedTextInput from '../ValidatedTextInput'

interface ReadOnlyInputProps {
  label: string
  // value: oneOfType([string, node])
  value?: string
  editable?: boolean
  valuePlaceholder?: string
  className?: string
  fsMasked?: boolean
}

const ReadOnlyInput = (props: ReadOnlyInputProps) => {
  const {
    label,
    value,
    className,
    fsMasked = false,
    valuePlaceholder = 'N/A',
    editable = false
  } = props
  const classes = styles()
  const [editing, setEditing] = useState(false)
  const containerClasses = clsx(classes.container, className)
  return editing ? (
    <>
      <ValidatedTextInput field="fooooo" label={label} required />
      <Button onClick={() => setEditing(false)}>save</Button>
    </>
  ) : (
    <div className={containerClasses}>
      <Typography variant="h6" color="textSecondary">
        {label}
      </Typography>
      {value && (
        <Typography variant="h4" className={classes.ReadOnlyInputContent}>
          {fsMasked ? <FSMask>{value}</FSMask> : value}
        </Typography>
      )}
      {editable && <Button onClick={() => setEditing(true)}>Edit</Button>}
    </div>
  )
}

ReadOnlyInput.defaultProps = {
  value: null,
  className: ''
}

export default ReadOnlyInput
