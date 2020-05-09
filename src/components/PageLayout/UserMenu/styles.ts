import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
  Button: {
    height: theme.spacing(8),
    margin: theme.spacing(-0.5, 0)
  },
  Avatar: {
    height: theme.spacing(5),
    width: theme.spacing(5)
  },
  UserMenu: {
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: 'unset',
      left: '0 !important'
    }
  },

  SecondaryText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  UserMenuItemList: {
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0.5, 2),
      borderRadius: theme.spacing(1),
      overflow: 'hidden'
    }
  }
}))

export default styles
