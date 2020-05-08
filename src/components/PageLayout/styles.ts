import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    display: 'flex',
    minHeight: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      // marginLeft: theme.drawer.width,
      // width: `calc(100% - ${theme.drawer.width}px)`
    }
  }
}))

export default styles
