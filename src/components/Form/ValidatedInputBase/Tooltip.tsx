import React from 'react'
import { Tooltip as MuiTooltip } from '@material-ui/core'
import Icon from '../../Icon'

interface TooltipProps {
  content: any
}

const Tooltip = (props: TooltipProps) => {
  const { content } = props
  return (
    <MuiTooltip title={<span>{content}</span>}>
      <span>
        <Icon name="Help" color="textSecondary" />
      </span>
    </MuiTooltip>
  )
}

export default Tooltip
