import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

const vemoBlue = '#0073D1'

// A custom theme for this app

const palette = {
  primary: {
    main: vemoBlue
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
}

const overrides = {
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
        borderColor: palette.primary.main
      },
      '&$disabled': {
        backgroundColor: palette.background.default
      },
      '&$error': {
        borderColor: palette.error.main
      }
    }
  }
}

const props = {
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

const theme = createMuiTheme({ palette, overrides, props })

export default theme
