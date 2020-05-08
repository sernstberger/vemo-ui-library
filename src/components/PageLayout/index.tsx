import React from 'react'
import { AppBar, Hidden } from '@material-ui/core'
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
      <div
        style={{
          backgroundColor: '#FFF',
          borderRadius: '0 30px 0 0',
          height: '100vh',
          borderRight: '1px solid red',
          borderTop: '1px solid red',
          overflowX: 'hidden',
          paddingTop: 30,
          width: 210
        }}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png"
            alt="logo"
            style={{ maxWidth: '100%', padding: '0 30px' }}
          />
          <nav>lakdsjflkj</nav>
          <Legal />
        </div>
      </div>

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
