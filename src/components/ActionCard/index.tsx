import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardActionAreaProps } from '@material-ui/core'
import clsx from 'clsx'
import Icon from '../Icon'
import styles from './styles'

export interface ActionCardProps extends CardActionAreaProps {
  actionAreaClassName?: string
  iconClassName?: string
  isMasked?: boolean
  hasIcon?: boolean
  primaryActionIcon?: string
  secondaryAction?: React.ReactNode
  to?: string
  zeroState?: boolean
  disabled?: boolean
}

const ActionCard = (props: ActionCardProps) => {
  const {
    actionAreaClassName = '',
    children,
    className,
    hasIcon = true,
    iconClassName,
    isMasked = false,
    onClick,
    primaryActionIcon = 'arrow-right',
    secondaryAction,
    style,
    to,
    zeroState,
    disabled

    //   iconClassName: '',
    //   secondaryAction: null,
    //   zeroState: false,
    //   disabled: false
  } = props

  const classes = styles()
  const cardClasses = clsx(
    classes.actionCard,
    zeroState ? classes.zeroState : '',
    className
  )
  const actionAreaClasses = clsx(
    classes.actionArea,
    isMasked ? classes.isMasked : '',
    actionAreaClassName
  )
  const iconClasses = clsx(
    classes.icon,
    !secondaryAction ? classes.notClickable : '',
    iconClassName
  )
  const AdapterLink = React.forwardRef((linkProps, ref) => (
    <Link innerRef={ref} {...linkProps} />
  ))

  return (
    <Card className={cardClasses}>
      <CardActionArea
        {...{ to, style, disabled }}
        onClick={onClick}
        className={actionAreaClasses}
        component={to ? AdapterLink : 'button'}
      >
        <div
          className={clsx(
            classes.buttonContainer,
            secondaryAction ? classes.withSecondaryAction : ''
          )}
        >
          <div className={classes.actionContainer}>{children}</div>
          {hasIcon && !secondaryAction && (
            <div className={classes.iconContainer}>
              <div className={iconClasses}>
                <Icon icon={primaryActionIcon} />
              </div>
            </div>
          )}
        </div>
      </CardActionArea>
      {secondaryAction && (
        <div className={classes.secondaryContainer}>{secondaryAction}</div>
      )}
    </Card>
  )
}

export default ActionCard
