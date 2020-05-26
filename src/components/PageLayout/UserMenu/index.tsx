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
        <Icon name="ArrowDown" />
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
        // @ts-ignore
        <UserMenuItem icon="Students" text="fooooo" to="/" />
        // @ts-ignore
        <UserMenuItem icon="Students" text="fooooo" secondary="laksjd flaksj flkasjfl kasjd" to="/" />
        // @ts-ignore
        <UserMenuItem icon="Students" text="fooooo" to="/" />
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
