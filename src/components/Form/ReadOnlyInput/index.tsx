import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Typography, IconButton, Grid, Fab } from '@material-ui/core'

import FSMask from '../../FSMask'
import styles from './styles'
import Icon from '../../Icon'
import { ValidatedInputBase } from '..'

interface ReadOnlyInputProps {
  label: string
  // value: oneOfType([string, node])
  content?: string
  // content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  editable?: boolean
  valuePlaceholder?: string
  className?: string
  fsMasked?: boolean
  input?: any
}

const ReadOnlyInput = (props: ReadOnlyInputProps) => {
  const {
    className,
    label,
    content = null,
    fsMasked = false,
    editable,
    input
  } = props
  const classes = styles()
  const [editing, setEditing] = useState(false)
  const containerClasses = clsx(classes.container, className)

  useEffect(() => {
    document.getElementById('foo')?.focus()
  }, [editing])

  return (
    <div className={containerClasses} style={{ backgroundColor: 'salmon' }}>
      {editing ? (
        <Grid container spacing={2}>
          <Grid item xs>
            <ValidatedInputBase
              required
              field="foo"
              label="Foo"
              margin="none"
              defaultValue="foo"
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
            <Typography
              variant="h5"
              color="textSecondary"
              style={{ marginBottom: 4 }}
            >
              {label}
            </Typography>
            {content && (
              <div
                style={{
                  backgroundColor: 'yellow',
                  border: '2px solid red',
                  padding: '10px 12px'
                }}
              >
                <Typography
                  variant="h4"
                  className={classes.ReadOnlyInputContent}
                >
                  {fsMasked ? <FSMask>{content}</FSMask> : content}
                </Typography>
              </div>
            )}
          </Grid>

          {editable && (
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
          )}
        </Grid>
      )}
    </div>
  )
}

export default ReadOnlyInput
