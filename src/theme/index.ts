import red from '@material-ui/core/colors/red'
import { createMuiTheme, fade, darken } from '@material-ui/core/styles'

const vemoBlue = '#0073D1'

let theme = createMuiTheme({
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
