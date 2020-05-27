import React from 'react'
import { Typography } from '@material-ui/core'
import Tooltip from './Tooltip'

interface LabelProps {
  label: React.ReactNode
  required?: boolean
  tooltip?: any
}

const Label = (props: LabelProps) => {
  const { label, required, tooltip } = props
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      {label}
      {required && (
        <Typography
          variant="body2"
          color="textSecondary"
          component="span"
          style={{
            lineHeight: 1,
            fontSize: 12,
            margin: '0 8px 0 4px'
          }}
        >
          {' '}
          (optional)
        </Typography>
      )}
      {/* show the tooltip if provided */}
      {tooltip && <Tooltip content={tooltip} />}
    </span>
  )
}

export default Label
