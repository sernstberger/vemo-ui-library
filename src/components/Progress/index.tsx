import React from 'react'
import { LinearProgress, Typography, Grid, Tooltip } from '@material-ui/core'
import FancyNumber from '../FancyNumber'
import styles from './styles'
import { formatMoney } from '../../utils/format/money'
import Icon from '../Icon'

interface ProgressProps {
  heading: string
  currentProgress: number
  currentProgressLabel: string
  total: number
  money?: boolean
  totalProgressLabel?: string
  tooltip?: string
}

const Progress = (props: ProgressProps) => {
  const classes = styles()
  const {
    heading,
    currentProgress,
    currentProgressLabel,
    total,
    money = false,
    totalProgressLabel = 'total',
    tooltip = null
  } = props
  const formattedLabel = money ? formatMoney(total, true) : total
  const percentage = (currentProgress / total || 0) * 100
  const label = (
    <span>
      <strong>{currentProgressLabel}</strong> <span>/</span> {formattedLabel}{' '}
      {totalProgressLabel}
    </span>
  )
  return (
    <div>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs>
          <Typography variant="h6" color="textSecondary">
            {heading}
          </Typography>
        </Grid>
        <Grid item>
          {tooltip && (
            <Tooltip title={<span>{tooltip}</span>}>
              <span>
                <Icon name="Help" color="textSecondary" />
              </span>
            </Tooltip>
          )}
        </Grid>
      </Grid>

      <LinearProgress
        variant="determinate"
        color="secondary"
        value={percentage}
        className={classes.LinearProgress}
      />

      <FancyNumber number={currentProgress} label={label} money={money} />
    </div>
  )
}

export default Progress
