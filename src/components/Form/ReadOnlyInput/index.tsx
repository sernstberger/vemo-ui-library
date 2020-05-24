import React, { useState } from 'react'
import clsx from 'clsx'
import { Typography, IconButton, Grid, Fab } from '@material-ui/core'

import FSMask from '../../FSMask'
import styles from './styles'
import Icon from '../../Icon'

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
  const { className, label, content, fsMasked, editable, input } = props
  const classes = styles()
  const [editing, setEditing] = useState(false)
  const containerClasses = clsx(classes.container, className)
  return (
    <div className={containerClasses}>
      {editing ? (
        <Grid container spacing={2}>
          <Grid item xs>
            {input}
          </Grid>

          <Grid item>
            <div style={{ marginTop: 38 }}>
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
            <div style={{ marginTop: 38 }}>
              <Fab onClick={() => setEditing(false)} size="small">
                <Icon name="Close" />
              </Fab>
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item>
            <Typography variant="h6" color="textSecondary">
              {label}
            </Typography>
            {content && (
              <Typography variant="h4" className={classes.ReadOnlyInputContent}>
                {fsMasked ? <FSMask>{content}</FSMask> : content}
              </Typography>
            )}
          </Grid>

          {editable && (
            <Grid item>
              <IconButton
                onClick={() => setEditing(true)}
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

// ReadOnlyInput.defaultProps = {
//   content: null,
//   className: '',
//   fsMasked: false
// }

export default ReadOnlyInput
