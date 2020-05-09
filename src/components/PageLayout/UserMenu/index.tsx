import React from 'react'
import { Avatar, Button, Menu } from '@material-ui/core'
import Icon from '../../Icon'
import UserMenuItem from './UserMenuItem'

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Name goes here
        <Icon icon="arrow-down" />
        <Avatar>SE</Avatar>
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        // open
        onClose={handleClose}
        style={{minWidth: 300}}
      >
        <UserMenuItem icon="students" text="fooooo" to="/" />
        <UserMenuItem icon="students" text="fooooo" secondary="laksjd flaksj flkasjfl kasjd" to="/" />
        <UserMenuItem icon="students" text="fooooo" to="/" />
        {/* <UserMenuItem
          to="/settings"
          onClick={handleClose}
          text="My account"
          secondary={
            showDetails ? 'View & edit your account and personal details' : ''
          }
          icon="student"
          selected={false}
        /> */}
      </Menu>
    </div>
  )
}

export default UserMenu
