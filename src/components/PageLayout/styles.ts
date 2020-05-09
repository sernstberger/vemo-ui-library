import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
  appBar: {
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: theme.spacing(8),
    padding: theme.spacing(0, 4),
    [theme.breakpoints.up('md')]: {
      paddingLeft: `calc(${theme.drawerWidth}px + ${theme.spacing(4)}px)`,
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
    [theme.breakpoints.up('md')]: {
      paddingLeft: `calc(${theme.drawerWidth}px + ${theme.spacing(4)}px)`
    }
  }
}))

export default styles
