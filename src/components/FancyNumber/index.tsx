import React from 'react'
import styled from 'styled-components'
import { Typography, TypographyProps } from '@material-ui/core'
import styles from './styles'
import { getDollars, getChange } from '../../utils/format/money'

interface FancyNumberProps extends TypographyProps {
  number: number
  label?: JSX.Element
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

// const Sup = styled('sup')`
//   ${({ theme }) => `
//   font-size: 0.5em, // this is intentionally using em's, so that no matter how big the text is, the size of the <sup> will proportionate
//   position: relative,
//   top: 2px,
//   color: 'green'
// `}
// `

// color: ${theme.palette.text.primary}

// largeNumber: {
//   color: theme.palette.text.primary
// },
// sup: {
//   fontSize: '0.5em', // this is intentionally using em's, so that no matter how big the text is, the size of the <sup> will proportionate
//   position: 'relative',
//   top: 2,
//   color: theme.palette.text.primary
// },
// subLabel: {
//   fontWeight: 500,
//   marginLeft: theme.spacing(1),
//   color: theme.palette.text.secondary
// }

export default FancyNumber
