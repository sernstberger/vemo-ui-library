import React from 'react'
import { AppBar, Hidden, Drawer, Divider, Typography } from '@material-ui/core'
import styles from './styles'
import Legal from './Legal'
import UserMenu from './UserMenu'

interface PageLayoutProps {
  children: any
  title: string
  subtitle?: string
}

const PageLayout = (props: PageLayoutProps) => {
  const { children, title, subtitle } = props
  const classes = styles()
  return (
    <div style={{ display: 'flex' }}>
      <Hidden smDown>
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
            style={{ maxWidth: '100%', padding: '0 30px' }}
          />
          <nav>erisque. Nam venenatis malesuada ipsum. Integer vitae convallis mauris. Ut at congue urna, ac pellentesque velit. Duis interdum pellentesque tortor in suscipit. Aenean suscipit venenatis dapibus. Phasellus commodo ex vel arcu ultricies maximus. Pellentesque dapibus porta metus. Etiam sit amet pellentesque ante. Duis quis eros vitae libero varius placerat. Etiam vel leo lacus. Vivamus congue, tellus ut ultrices consequat, mi mauris feugiat turpis, ac pellentesque neque urna eget eros. Proin porttitor metus et lobortis tincidunt. Ut venenatis nisi non nibh condimentum rhoncus. Fusce nec bibendum purus. Curabitur cursus pharetra ex et vulputate. In aliquam porta nunc, non fermentum sem fermentum a. Suspendisse ut quam id felis aliquet convallis eget sed dui. Morbi id sollicitudin diam, ut luctus lor</nav>
          {/* {navigation} */}
          <div>
            <Divider />
            <Legal />
          </div>
        </Drawer>
      </Hidden>

      <div>
        <AppBar position="static" className={classes.appBar} elevation={0}>
          <div>
            <Typography variant="h1">{title}</Typography>
            {subtitle && <Typography variant="h3">{subtitle}</Typography>}
          </div>
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
          <UserMenu />
        </AppBar>

        <div className={classes.LayoutContent}>
          {/* <Snackbar
            open={snackbar.open}
            status={snackbar.status}
            message={snackbar.message}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          /> */}
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageLayout
