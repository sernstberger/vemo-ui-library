import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'
import clsx from 'clsx'
import styles from '../styles'

export interface IconProps extends SvgIconProps {
  // color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'success'
  // | 'disabled'
  // | 'textSecondary'
  // | 'warning'
}

const BuildIcon = (props: IconProps) => {
  const classes = styles()
  const { color = 'inherit', path, className, fontSize = 'default' } = props

  // const iconColor = statusColors(color).color
  const iconColor = color || '#000'
  const iconClasses = clsx(classes.Icon, className)

  return (
    <SvgIcon className={iconClasses} htmlColor={iconColor} {...{ fontSize }}>
      <path d={path} />
    </SvgIcon>
  )
}

export default BuildIcon
