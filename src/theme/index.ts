import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'


const vemoBlue = '#0073D1'

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      // light: '#7986cb',
      main: vemoBlue,
      // dark: '#303f9f',
      contrastText: '#fff'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e'
    }
    // success: {
    //   xLight: green[50],
    //   main: green[500],
    //   dark: green[700],
    // },
  }
  // typography: {
  //   fontFamily: "'Work Sans', sans-serif",
  //   fontSize: 14,
  //   fontWeightLight: 300, // Work Sans
  //   fontWeightRegular: 400, // Work Sans
  //   fontWeightMedium: 700, // Roboto Condensed
  //   fontFamilySecondary: "'Roboto Condensed', sans-serif",
  // },
})

// A custom theme for this app

const theme = {
  ...rawTheme,
  overrides: {
    MuiInputBase: {
      root: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: rawTheme.palette.common.white,
        border: '2px solid #ced4da',
        fontSize: '1rem',
        fontWeight: 600,
        transition: rawTheme.transitions.create(['border-color', 'box-shadow']),
        width: '100%',

        // 'label + &': {
        //   marginTop: spacing(2.25)
        // },

        '&$focused': {
          borderColor: rawTheme.palette.primary.main
        },
        '&$disabled': {
          backgroundColor: rawTheme.palette.background.default
        },
        '&$error': {
          borderColor: rawTheme.palette.error.main
        }
      }
    }
  },
  props: {
    MuiCard: {
      elevation: 0
    },
    MuiFormControl: {
      fullWidth: true
    },
    MuiMenu: {
      getContentAnchorEl: null,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      }
    },
    MuiTextField: {
      fullWidth: true,
      variant: 'standard',
      margin: 'normal'
    },
    MuiInput: {
      disableUnderline: true
    },
    MuiInputLabel: {
      shrink: true
    },
    MuiLink: {
      underline: 'always'
    },
    MuiSelect: {
      native: true
      // IconComponent: () => (
      //   <div
      //     style={{
      //       borderLeft: `1px solid #CCC`,
      //       pointerEvents: 'none',
      //       display: 'flex',
      //       alignItems: 'center',
      //       position: 'absolute',
      //       paddingLeft: theme.spacing(1.5),
      //       marginLeft: theme.spacing(1.5),
      //       right: theme.spacing(1.5),
      //       height: '75%',
      //       width: theme.spacing(4.5)
      //     }}
      //   >
      //     <Icon icon="arrow-down" />
      //   </div>
      // )
    },
    MuiSlider: {
      color: 'primary'
      // ThumbComponent: (props) => (
      //   <span {...props}>
      //     <Icon icon="slider-thumb" size="small" />
      //   </span>
      // )
    },

    MuiSnackbar: {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    },

    MuiTooltip: {
      disableTouchListener: true
    }
  }
}

export default theme
