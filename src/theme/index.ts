import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },

  overrides: {
    MuiInputBase: {
      root: {
        borderRadius: 4,
        position: 'relative',
        // backgroundColor: theme.palette.common.white,
        border: '2px solid #ced4da',
        fontSize: '1rem',
        fontWeight: 600,
        // transition: theme.transitions.create(['border-color', 'box-shadow']),
        width: '100%',

        'label + &': {
          // marginTop: theme.spacing(2.25)
        },

        '&$focused': {
          // borderColor: theme.palette.primary.main
        },
        '&$disabled': {
          // backgroundColor: theme.palette.background.default
        },
        '&$error': {
          // borderColor: theme.palette.error.main
        }
      }
    }
  },
  props: {
    MuiTextField: {
      fullWidth: true,
      variant: 'outlined',
      margin: 'normal'
    }
  }
})

export default theme
