import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    display: 'flex',
    minHeight: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.drawerWidth,
      width: `calc(100% - ${theme.drawerWidth}px)`
    }
  },

  drawerPaper: {
    backgroundColor: '#FFF',
    borderRadius: '0 30px 0 0',
    height: '100vh',
    borderRight: '1px solid red',
    borderTop: '1px solid red',
    overflowX: 'hidden',
    paddingTop: 30,
    width: theme.drawerWidth
  }
}))

export default styles
