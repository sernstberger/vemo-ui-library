import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    display: 'flex',
    minHeight: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.drawerWidth,
      width: `calc(100% - ${theme.drawerWidth}px)`
    }
  },

  drawerPaper: {
    backgroundColor: '#FFF',
    borderRadius: '0 30px 0 0',
    height: '100vh',
    borderRight: `1px solid ${theme.palette.divider}`,
    borderTop: `1px solid ${theme.palette.divider}`,
    overflowX: 'hidden',
    paddingTop: 30,
    width: theme.drawerWidth
  },

  LayoutContent: {
    backgroundColor: 'white',
    padding: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: `calc(${theme.drawerWidth}px + ${theme.spacing(4)}px)`
    }
  }
}))

export default styles
