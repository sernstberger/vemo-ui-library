import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = makeStyles((theme: Theme) =>
  createStyles({
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

      // '&$focused': {
      //   // boxShadow: 'inset 0 0 7px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.15)',
      //   // boxShadow: `0 0 0.5rem ${fade('#000', 0.25)}`,
      //   borderColor: theme.palette.primary.main
      // },
      // '&$disabled': {
      //   backgroundColor: theme.palette.background.default
      // },
      // '&$error': {
      //   borderColor: theme.palette.error.main
      // }
    },

    SubmitLoadingSpinner: {
      marginRight: theme.spacing(1),

      '& svg': {
        margin: 0
      }
    },

    textWrapper: {
      position: 'relative'
    },
    characterLimitText: {
      position: 'absolute',
      top: 14,
      right: 0
    },

    largeInput: {
      fontSize: 50,
      width: 60
    },

    largeInputProps: {
      fontSize: 50
    },
    largeHtmlInputProps: {
      paddingLeft: 90
    }
  })
)

export default styles

// MuiInputBase: {
//   root: {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.common.white,
//     border: '2px solid #ced4da',
//     fontSize: '1rem',
//     fontWeight: 600,
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     width: '100%',

//     'label + &': {
//       marginTop: theme.spacing(2.25)
//     },

//     '&$focused': {
//       // boxShadow: 'inset 0 0 7px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.15)',
//       // boxShadow: `0 0 0.5rem ${fade('#000', 0.25)}`,
//       borderColor: theme.palette.primary.main
//     },
//     '&$disabled': {
//       backgroundColor: theme.palette.background.default
//     },
//     '&$error': {
//       borderColor: theme.palette.error.main
//     }
//   },

//   input: {
//     minHeight: theme.spacing(3),
//     padding: '10px 12px',

//     '&:focus': {
//       boxShadow: '0 0 7px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.15)'
//     },

//     '&::-webkit-credentials-auto-fill-button': {
//       backgroundColor: 'white'
//     }
//   },

//   inputAdornedStart: {
//     paddingLeft: theme.spacing(7.5)
//   },

//   inputAdornedEnd: {
//     paddingRight: theme.spacing(7)
//   },

//   multiline: {
//     padding: 0
//   },

//   inputMultiline: {
//     lineHeight: '1.5rem',
//     padding: '10px 12px'
//   },

//   formControl: {
//     marginTop: '0 !important'
//   }
// },
