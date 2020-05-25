import React from 'react'
import { Typography } from '@material-ui/core'

import FSMask from '../../FSMask'
import styles from './styles'


export interface ReadOnlyInputProps {
  label: string
  // value: oneOfType([string, node])
  content?: string
  // content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  valuePlaceholder?: string
  className?: string
  fsMasked?: boolean
}

const ReadOnlyInput = (props: ReadOnlyInputProps) => {
  const { className, label, content = null, fsMasked = false } = props
  const classes = styles()

  return (
    <>
      <Typography
        variant="h5"
        color="textSecondary"
        style={{ marginBottom: 4, lineHeight: 1 }}
      >
        {label}
      </Typography>
      {content && (
        <div>
          <Typography variant="h4" className={classes.ReadOnlyInputContent}>
            {fsMasked ? <FSMask>{content}</FSMask> : content}
          </Typography>
        </div>
      )}
    </>
  )
}

export default ReadOnlyInput
