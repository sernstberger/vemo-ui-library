import React from 'react'
import { AppBar, Hidden, Drawer, Divider } from '@material-ui/core'
import styles from './styles'
import Legal from './Legal'

interface PageLayoutProps {
  children: any
  title: string
}

const PageLayout = (props: PageLayoutProps) => {
  const { children, title } = props
  const classes = styles()
  return (
    <div style={{ backgroundColor: 'orange', display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper
        }}
        open
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png"
          alt="logo"
          style={{ maxWidth: 100, padding: '0 30px' }}
        />
        <nav>lakdsjflkj</nav>
        {/* {navigation} */}
        <div>
          <Divider />
          <Legal />
        </div>
      </Drawer>

      <div>
        <div style={{ backgroundColor: 'purple' }}>
          <AppBar position="static" className={classes.appBar} elevation={0}>
            {title}
            <Hidden smDown>
              {/* <Header.Desktop {...{ title, logo }} /> */}
              desktop header
            </Hidden>

            <Hidden mdUp>
              {/* <Header.Mobile
              {...{ title, hideBackButton, hideAvatar, logo, navigation }}
            /> */}
              Mobile header
            </Hidden>
          </AppBar>
        </div>

        <div style={{ backgroundColor: 'white', padding: 32 }}>{children}</div>
      </div>
    </div>
  )
}

export default PageLayout
