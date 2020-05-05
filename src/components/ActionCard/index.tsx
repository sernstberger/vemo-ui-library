import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardProps } from '@material-ui/core'
import clsx from 'clsx'
// import Icon from '~/app/components/Icon'
import styles from './styles'

interface ActionCardProps extends CardProps {
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
    actionAreaClassName,
    children,
    className,
    hasIcon,
    iconClassName,
    isMasked,
    onClick,
    primaryActionIcon,
    secondaryAction,
    style,
    to,
    zeroState,
    disabled

    //   actionAreaClassName: '',
    //   className: '',
    //   hasIcon: true,
    //   iconClassName: '',
    //   isMasked: false,
    //   onClick: () => {},
    //   primaryActionIcon: 'arrow-right',
    //   secondaryAction: null,
    //   style: undefined,
    //   to: undefined,
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
        className={actionAreaClasses}
        component={to && AdapterLink}
        to={to && to}
        onClick={onClick && onClick}
        style={style}
        disabled={disabled}
      >
        <div
          className={clsx(
            classes.buttonContainer,
            secondaryAction ? classes.withSecondaryAction : ''
          )}
        >
          <div className={classes.actionContainer}>{children}</div>
          {/* {hasIcon && !secondaryAction && (
            <div className={classes.iconContainer}>
              <div className={iconClasses}>
                {<Icon icon={primaryActionIcon} />}
              </div>
            </div>
          )} */}
        </div>
      </CardActionArea>
      {secondaryAction && (
        <div className={classes.secondaryContainer}>{secondaryAction}</div>
      )}
    </Card>
  )
}

export default ActionCard
