import React from 'react'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import {
  MenuItem,
  MenuItemProps,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import Icon from '../../VemoIcons'
import styles from './styles'

interface UserMenuItemProps extends MenuItemProps {
  icon: string
  secondary?: string
  text: string
  to?: string
}

const UserMenuItem = (props: UserMenuItemProps) => {
  const classes = styles()
  const { icon, text, to, onClick, secondary, selected } = props
  const path = useLocation().pathname
  const isCurrentPage = to === path
  const iconName = isCurrentPage ? `${icon}Fill` : `${icon}Line`

  const renderLink = React.forwardRef((itemProps, ref) => (
    <NavLink
      activeClassName={selected ? 'is-active' : ''}
      to={to}
      {...itemProps}
      innerRef={ref}
    />
  ))

  return (
    <MenuItem
      button
      component={to && renderLink}
      className={classes.NavLink}
      onClick={onClick}
    >
      <ListItemIcon className={classes.ListItemIcon}>
        <Icon name={iconName} className={classes.Icon} />
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
