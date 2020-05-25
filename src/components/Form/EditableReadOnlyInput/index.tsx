import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Typography, IconButton, Grid, Fab } from '@material-ui/core'

import styles from './styles'
import Icon from '../../Icon'
import { ValidatedInputBase } from '..'
import ReadOnlyInput, { ReadOnlyInputProps } from '../ReadOnlyInput'
import { useFormikContext } from 'formik'

interface EditableReadOnlyInputProps extends ReadOnlyInputProps {
  field: string
  className?: string
  input?: any
}

const EditableReadOnlyInput = (props: EditableReadOnlyInputProps) => {
  const { className, field, input, label, ...readOnlyInputProps } = props
  const classes = styles()
  const [editing, setEditing] = useState(false)
  const containerClasses = clsx(classes.container, className)
  const { values } = useFormikContext()

  useEffect(() => {
    document.getElementById(field)?.focus()
  }, [editing])

  return (
    <div className={containerClasses} style={{ backgroundColor: '#eaeaea' }}>
      {editing ? (
        <Grid container spacing={2}>
          <Grid item xs>
            <ValidatedInputBase
              required
              field={field}
              label={label}
              margin="none"
            />
          </Grid>

          <Grid item>
            <div style={{ marginTop: 18 }}>
              <Fab
                onClick={() => setEditing(false)}
                color="primary"
                size="small"
              >
                <Icon name="Check" />
              </Fab>
            </div>
          </Grid>

          <Grid item>
            <div style={{ marginTop: 18 }}>
              <Fab onClick={() => setEditing(false)} size="small">
                <Icon name="Close" />
              </Fab>
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item>
            <ReadOnlyInput
              {...readOnlyInputProps}
              content={values[field]}
              label={label}
            />
          </Grid>

          <Grid item>
            <IconButton
              onClick={() => {
                setEditing(true)
              }}
              // size="small"
              color="primary"
            >
              <Icon name="Edit" />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default EditableReadOnlyInput
