import React from 'react'
import { Typography, TypographyProps } from '@material-ui/core'
import styles from './styles'
import { getDollars, getChange } from '../../utils/format/money'

export interface FancyNumberProps extends TypographyProps {
  number: number
  label?: string | React.ReactNode
  money?: boolean
}

const FancyNumber = (props: FancyNumberProps) => {
  const { number, label = null, money = false, ...rest } = props
  const classes = styles()

  const largeNumber = number > 0 ? getDollars(number) : 0
  const smallNumber = number > 0 ? getChange(number) : '00'

  return (
    <span style={{ display: 'flex' }}>
      <Typography variant="h1" component="span" {...rest}>
        {money && <sup className={classes.sup}>$</sup>}
        <span className={classes.largeNumber}>{largeNumber}</span>
        <sup className={classes.sup}>
          {money && `.${smallNumber}`}
          {label && <span className={classes.subLabel}>{label}</span>}
        </sup>
      </Typography>
    </span>
  )
}

export default FancyNumber
