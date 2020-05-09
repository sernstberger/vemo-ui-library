import React from 'react'
import { Avatar, Button, Menu } from '@material-ui/core'
// import Icon from '../../Icons'
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
        {/* <Icon icon="arrow-down" /> */}
        <Avatar>SE</Avatar>
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        // open={Boolean(anchorEl)}
        open
        onClose={handleClose}
      >
        <UserMenuItem
          to="/settings"
          onClick={handleClose}
          text="My account"
          secondary={
            showDetails ? 'View & edit your account and personal details' : ''
          }
          icon="student"
          highlight={false}
        />
      </Menu>
    </div>
  )
}

export default UserMenu
