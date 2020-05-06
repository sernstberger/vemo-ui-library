import { createMuiTheme, fade, darken } from '@material-ui/core/styles'

// Colors
const catskill_white = 'rgb(245, 248, 250)'
const mystic_grey = 'rgb(218, 224, 230)'
const raven_grey = 'rgb(109, 115, 120)'
// const dark_grey = 'rgb(102, 102, 102)'
const success_green = '#009F74'
const green_haze = 'rgb(0, 159, 116)'
const error_red = '#D92D27'
// const caution_yellow = 'rgb(247, 220, 62)'
// const dark_yellow = 'rgb(245, 187, 61)'
const midnight = 'rgb(0, 28, 51)'
const vemo_blue = '#0073D1'
const vemo_dark_blue = 'rgb(3, 65, 111)'

// const highlight_blue = 'rgb(0, 146, 255)'
// const horizon_blue = 'rgb(92, 125, 153)'
const bismark_blue = 'rgb(64, 99, 128)'
const saffron = '#F5BB3D'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: vemo_blue,
      darker: vemo_dark_blue,
      darkest: midnight
    },
    secondary: {
      main: bismark_blue
    },

    success: {
      main: success_green,
      contrastText: '#FFF'
    },

    warning: {
      main: saffron
    },

    error: {
      main: error_red
    },

    text: {
      primary: midnight,
      secondary: raven_grey,
      success: green_haze,

      error: error_red
    },
    divider: mystic_grey,
    border: mystic_grey,
    mask: mystic_grey,
    background: {
      default: catskill_white,
      secondary: mystic_grey
    }
  },
  spacing: 8,
  typography: {
    fontFamily: '"proxima-nova", "Montserrat", "Helvetica", "Arial", sans-serif',

    h1: {
      fontSize: '1.625rem',
      fontWeight: 700
    },
    h2: {
      fontSize: '0.8125rem',
      fontWeight: 700,
      letterSpacing: 1.5,
      textTransform: 'uppercase'
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 500
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 600
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 500
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 700
    },
    subtitle2: {
      fontSize: '1.4rem',
      fontWeight: 500
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 500
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400
    },
    caption: {
      // fontSize: '1.6rem',
    },
    overline: {
      // fontSize: '1.4rem',
    },
    footnote: {
      fontSize: '0.8125rem',
      fontWeight: 'normal'
    }
  }
})

// A custom theme for this app

theme = {
  ...theme,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50,
        fontSize: '0.8125rem',
        fontWeight: 700,
        letterSpacing: '0.125rem',
        lineHeight: '1.5rem',
        padding: theme.spacing(1, 3),
        whiteSpace: 'nowrap'
      },
      sizeSmall: {
        fontSize: '0.875rem',
        padding: '15px 30px'
      },
      sizeLarge: {
        fontSize: '0.8125rem',
        padding: theme.spacing(2, 4)
      },
      contained: {
        boxShadow: 'none',
        minWidth: theme.spacing(22)
      },
      outlined: {
        padding: theme.spacing(1, 3),
        // backgroundColor: catskill_white
      },
      fullWidth: {
        borderRadius: 0
      },
      text: {
        fontSize: '1rem',
        fontWeight: 600,
        letterSpacing: 'normal',
        lineHeight: 1,
        textTransform: 'none'
      }
    },
    MuiCard: {
      root: {
        border: '1px solid #dee4e9',
        borderRadius: theme.shape.borderRadius * 2.5
      }
    },
    MuiDialog: {
      paper: {
        [theme.breakpoints.down('sm')]: {
          margin: theme.spacing(2)
        }
      }
    },
    MuiDialogContent: {
      root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing(2),

        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(3, 12)
        },

        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(3, 22)
        },

        '&:nth-child(even)': {
          backgroundColor: theme.palette.background.default
        }
      }
    },
    MuiFab: {
      root: {
        backgroundColor: theme.palette.background.secondary,
        boxShadow: 'none',
        color: theme.palette.text.secondary
      }
    },
    MuiFormLabel: {
      root: {
        color: theme.palette.text.primary,

        '&$error': {
          color: theme.palette.text.error,
          fontWeight: 700
        },
        '&$focused': {
          // boxShadow: 'inset 0 0 7px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.15)',
          // boxShadow: `0 0 0.5rem ${fade('#000', 0.25)}`,
          borderColor: theme.palette.primary.main,
          fontWeight: 700
        }
      }
    },
    MuiFormHelperText: {
      root: {
        '&$error': {
          color: theme.palette.text.error,
          fontWeight: 600
        }
      }
    },
    MuiInputBase: {
      root: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '2px solid #ced4da',
        fontSize: '1rem',
        fontWeight: 600,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        width: '100%',

        'label + &': {
          marginTop: theme.spacing(2.25)
        },

        '&$focused': {
          // boxShadow: 'inset 0 0 7px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.15)',
          // boxShadow: `0 0 0.5rem ${fade('#000', 0.25)}`,
          borderColor: theme.palette.primary.main
        },
        '&$disabled': {
          backgroundColor: theme.palette.background.default
        },
        '&$error': {
          borderColor: theme.palette.error.main
        }
      },

      input: {
        minHeight: theme.spacing(3),
        padding: '10px 12px',

        '&:focus': {
          boxShadow: '0 0 7px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.15)'
        },

        '&::-webkit-credentials-auto-fill-button': {
          backgroundColor: 'white'
        }
      },

      inputAdornedStart: {
        paddingLeft: theme.spacing(7.5)
      },

      inputAdornedEnd: {
        paddingRight: theme.spacing(7)
      },

      multiline: {
        padding: 0
      },

      inputMultiline: {
        lineHeight: '1.5rem',
        padding: '10px 12px'
      },

      formControl: {
        marginTop: '0 !important'
      }
    },
    MuiInputAdornment: {
      root: {
        position: 'absolute',
        height: '75%',
        width: theme.spacing(4.5)
      },

      positionStart: {
        borderRight: `1px solid #CCC`,
        left: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        pointerEvents: 'none',
        marginRight: 0
      },

      positionEnd: {
        borderLeft: `1px solid #CCC`,
        right: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        marginLeft: 0
      }
    },
    MuiInputLabel: {
      formControl: {
        fontSize: '0.875rem',
        left: 'auto',
        marginBottom: theme.spacing(0.5),
        position: 'initial',
        top: 'auto',
        transform: 'initial'
      },
      shrink: {
        transform: 'none',
        transformOrigin: 'unset'
      }
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 7,
        height: 14
      },
      colorPrimary: {
        backgroundColor: theme.palette.divider
      },
      colorSecondary: {
        backgroundColor: theme.palette.divider
      }
    },
    MuiLink: {
      root: {
        color: theme.palette.text.secondary
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 'auto'
      }
    },
    MuiSelect: {
      select: {
        borderRadius: 4
      }
    },
    MuiSlider: {
      root: {
        height: 6
      },
      thumb: {
        // color: raven_grey,
        height: theme.spacing(4),
        width: theme.spacing(4),
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -theme.spacing(2),
        marginLeft: -theme.spacing(2),
        boxShadow: '0 0 3px 0 rgba(92,125,153,0.5)',
        '&:focus,&:hover,&$active': {
          boxShadow: '0 0 4px 0 rgba(92,125,153,0.6)'
        },
        '& .bar': {
          height: 6,
          width: 1,
          backgroundColor: 'currentColor'
        }
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)'
      },
      track: {
        height: 6
      },
      rail: {
        color: theme.palette.secondary.main,
        opacity: 1,
        height: 6
      },
      mark: {
        backgroundColor: theme.palette.divider,
        marginTop: 16,
        height: 16,
        width: 2,
        marginLeft: -1
      },
      markActive: {
        backgroundColor: theme.palette.divider
      },
      markLabel: {
        top: theme.spacing(5.5)
      }
    },
    MuiSnackbarContent: {
      message: {
        padding: 0,
        width: '100%'
      }
    },
    MuiTabs: {
      root: {
        // background: 'blue'
      },
      indicator: {
        height: 0
      },
      fixed: {
        textAlign: 'center'
      },
      flexContainer: {
        display: 'inline-block',
        boxShadow: `inset 0 0 0 1px ${theme.palette.divider}`,
        borderRadius: 50
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        minHeight: theme.spacing(4.5),

        [theme.breakpoints.up('sm')]: {
          fontWeight: 600,
          minWidth: theme.spacing(10)
        }
      },
      selected: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 50,
        color: theme.palette.primary.contrastText
      }
    },

    MuiTooltip: {
      tooltip: {
        maxWidth: 300,
        backgroundColor: `${fade(
          darken(theme.palette.primary.main, 0.5),
          0.9
        )}`,
        padding: 16,
        fontSize: '0.875rem',
        fontWeight: 500
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
