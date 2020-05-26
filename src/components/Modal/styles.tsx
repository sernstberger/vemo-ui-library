import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
  ModalScrollWrapper: {
    height: '100%',
    overflowY: 'scroll',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center'
    }
  },
  ModalWrapper: {
    marginTop: 'auto',
    width: '100%',
    borderRadius: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      margin: 'auto',
      width: 900
    }
  },
  Modal: {
    margin: theme.spacing(3, 0, 0, 0),
    minHeight: '70%',
    borderRadius: theme.spacing(4, 4, 0, 0),
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      borderRadius: theme.spacing(4),
      minHeight: 'auto',
      margin: theme.spacing(3, 0)
    }
  },





  // MuiDialogContent: {
  //   root: {
  //     borderTop: `1px solid ${theme.palette.divider}`,
  //     padding: theme.spacing(2),

  //     [theme.breakpoints.up('sm')]: {
  //       padding: theme.spacing(3, 12)
  //     },

  //     [theme.breakpoints.up('md')]: {
  //       padding: theme.spacing(3, 22)
  //     },

  //     '&:nth-child(even)': {
  //       backgroundColor: theme.palette.background.default
  //     }
  //   }
  // },





  // HiddenActions: {
  //   padding: theme.spacing(2, 0, 4)
  // },
  // ModalActions: {
  //   display: 'flex',
  //   padding: theme.spacing(2)
  // },
  // ModalSubTitle: {
  //   marginTop: theme.spacing(2)
  // },
  // ModalSubTitle2: {
  //   marginTop: theme.spacing(1)
  // },
  // ModalTitle: {
  //   // padding: theme.spacing(4, 8)
  //   [theme.breakpoints.up('sm')]: {
  //     // padding: theme.spacing(4, 8)
  //   }
  // },
  // SaveAsDraftButtonGroup: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   padding: theme.spacing(4, 4, 0, 4)
  // },
  // TitleIcon: {
  //   marginBottom: theme.spacing(1)
  // },
  // ConfirmationContainer: {
  //   borderTop: `1px solid ${theme.palette.divider}`,
  //   textAlign: 'center',
  //   padding: theme.spacing(3)
  // },
  // ConfirmationButton: {
  //   marginTop: theme.spacing(2)
  // },

  // errorSnackbar: {
  //   marginTop: theme.spacing(3),
  //   transform: 'initial !important',
  //   position: 'static !important',
  //   '& > div > div > div > div > div + div': {
  //     padding: theme.spacing(0, 0, 2.5, 0)
  //   }
  // },

  // errorSnackbarMessage: {
  //   display: 'flex',
  //   width: '100%',
  //   flexDirection: 'column'
  // },
  // errorSnackbarTitle: {
  //   margin: theme.spacing(3, 3, 0, 3)
  // },

  // SnackbarActionCard: {
  //   background: 'none !important',
  //   border: 'none !important',
  //   borderRadius: '0px !important',

  //   '& > button > div': {
  //     backgroundColor: 'none',
  //     padding: theme.spacing(1, 3),
  //     '& > div': {
  //       justifyContent: 'center'
  //     }
  //   }
  // }
}))

export default styles
