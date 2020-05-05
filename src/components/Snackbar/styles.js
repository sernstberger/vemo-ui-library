import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => {
  const borderRadius = 30
  const minHeight = theme.spacing(7.5)

  return {
    SnackbarContent: {
      backgroundColor: theme.palette.background.paper,
      borderRadius,
      overflow: 'hidden',
      padding: 0,
      [theme.breakpoints.up('md')]: {
        width: '100%',
        marginRight: '20px'
      }
    },
    SnackbarContentMessage: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      minHeight
    },
    SnackbarContentMessageIconWrapper: {
      alignItems: 'center',
      borderRadius: `${borderRadius}px 0 0 ${borderRadius}px`,
      color: '#FFF',
      display: 'flex',
      minHeight,
      padding: theme.spacing(0, 1.5, 0, 2.25)
    },
    SnackbarContentWrapper: {
      display: 'flex',
      alignItems: 'stretch',
      width: '100%'
    },
    SnackbarContentMessageTextWrapper: {
      padding: theme.spacing(0, 1.75),
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    SnackbarContentLinkIcon: { marginRight: '10px' },
    SnackbarActionCard: {
      borderRadius: 0,
      border: 'none',
      flex: '1 0 auto'
    }
  }
})

export default styles
