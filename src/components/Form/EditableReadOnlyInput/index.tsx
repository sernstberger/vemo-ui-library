import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useFormikContext } from 'formik'
import { IconButton, Grid, Fab } from '@material-ui/core'

import styles from './styles'
import Icon from '../../Icon'
import { ValidatedInputBase } from '..'
import ReadOnlyInput, { ReadOnlyInputProps } from '../ReadOnlyInput'
import ConfirmationModal from '../../ConfirmationModal'

interface EditableReadOnlyInputProps extends ReadOnlyInputProps {
  field: string
  className?: string
  input?: any
}

const EditableReadOnlyInput = (props: EditableReadOnlyInputProps) => {
  const { className, field, input, label, ...readOnlyInputProps } = props
  const { values, setFieldValue } = useFormikContext()
  const classes = styles()
  const [editing, setEditing] = useState(false)
  const [confirmationOpen, setConfirmationOpen] = useState<boolean>(false)
  const [initialValue, setInitialValue] = useState(values[field])
  const containerClasses = clsx(classes.container, className)

  useEffect(() => {
    document.getElementById(field)?.focus()
    setInitialValue(values[field])
  }, [editing])

  const handleCancelAction = () => {
    if (initialValue !== values[field]) {
      setConfirmationOpen(true)
    }
  }

  return (
    <div className={containerClasses}>
      {editing ? (
        <>
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
                <Fab onClick={() => handleCancelAction()} size="small">
                  <Icon name="Close" />
                </Fab>
              </div>
            </Grid>
          </Grid>
          <ConfirmationModal
            open={confirmationOpen}
            cancelAction={() => {
              setConfirmationOpen(false)
            }}
            confirmAction={() => {
              setFieldValue(field, initialValue)
              setEditing(false)
              setConfirmationOpen(false)
            }}
          />
        </>
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
