import React from 'react'
import { NavLink, useLocation, NavLinkProps } from 'react-router-dom'
import {
  MenuItem,
  MenuItemProps,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import Icon from '../../Icon'
import styles from './styles'

interface UserMenuItemProps extends MenuItemProps {
  icon: string
  secondary?: string
  text: string
  to?: any
}

const UserMenuItem = (props: UserMenuItemProps) => {
  const classes = styles()
  const { icon, text, to, onClick, secondary, selected } = props
  const path = useLocation().pathname
  const isCurrentPage = to === path
  const iconName = isCurrentPage ? `${icon}Fill` : `${icon}Line`

  const renderLink = React.forwardRef<any, Omit<NavLinkProps, 'to'>>(
    (props, ref) => (
      <NavLink
        activeClassName={selected ? 'is-active' : ''}
        ref={ref}
        to={to}
        {...props}
      />
    )
  )

  return (
    <MenuItem
      button
      component={to ? renderLink : 'li'}
      // className={classes.NavLink}
      onClick={onClick}
    >
      <ListItemIcon>
        <Icon name={iconName} />
      </ListItemIcon>
      <ListItemText
        primary={text}
        primaryTypographyProps={{ variant: 'h5' }}
        secondary={secondary}
        secondaryTypographyProps={{ className: classes.SecondaryText }}
      />
    </MenuItem>
  )
}

export default UserMenuItem
