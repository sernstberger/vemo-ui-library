import React, { useState } from 'react'
import clsx from 'clsx'
import { Typography, Grid, Fab, IconButton } from '@material-ui/core'
import FSMask from '../../FSMask'
import styles from './styles'
import ValidatedTextInput from '../ValidatedTextInput'
import Icon from '../../Icon'

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
    <Grid container>
      <Grid item xs>
        <ValidatedTextInput
          field="fooooo"
          label={label}
          required
          //  autoFocus
        />
      </Grid>
      <Grid item>
        <Fab onClick={() => setEditing(false)} color="primary" size="small">
          <Icon icon="check" />
        </Fab>
      </Grid>
      <Grid item>
        <Fab onClick={() => setEditing(false)} size="small">
          <Icon icon="close" />
        </Fab>
      </Grid>
    </Grid>
  ) : (
    <div className={containerClasses}>
      <div>
        <Typography
          color="textSecondary"
          style={{ fontSize: 14, fontWeight: 500, marginBottom: 4, lineHeight: 1 }}
        >
          {label}
        </Typography>
        {value && (
          <Typography variant="h4" className={classes.ReadOnlyInputContent}>
            {fsMasked ? <FSMask>{value}</FSMask> : value}
          </Typography>
        )}
      </div>
      {editable && (
        <IconButton
          onClick={() => setEditing(true)}
          size="small"
          color="primary"
        >
          <Icon icon="edit" />
        </IconButton>
      )}
    </div>
  )
}

ReadOnlyInput.defaultProps = {
  value: null,
  className: ''
}

export default ReadOnlyInput
