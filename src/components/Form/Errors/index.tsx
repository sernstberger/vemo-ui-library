import React from 'react'
import Snackbar, { SnackbarMessageProps } from '../../Snackbar'

interface ErrorsProps {
  errors: any
}

const Errors = (props: ErrorsProps) => {
  const { errors } = props

  const errorArray = Object.keys(errors).map(function(key) {
    return { field: key, message: errors[key] }
  })

  const formattedMessages = errorArray.map((message: SnackbarMessageProps) => {
    return {
      text: message.message,
      onClick: () => {
        alert(message.field)
      }
    }
  })

  const scrolly = (elementId: any) => {
    const formFieldElement = document.getElementById(elementId)
    formFieldElement!.focus()
  }
  return (
    <Snackbar
      open
      status="error"
      title="Something is not right..."
      messages={formattedMessages}
    />
  )
}

export default Errors

// import { useFormikContext } from 'formik'
// import { Grid, Typography } from '@material-ui/core'
// import PropTypes from 'prop-types'

// // import ActionCard from '../ActionCard'
// import Snackbar from '../../Snackbar'
// import styles from '../styles'

// const Errors = props => {
//   const { errors } = useFormikContext()
//   const classes = styles()

//   const errorArray = Object.keys(errors).map(function(key) {
//     return { field: key, message: errors[key] }
//   })

//   // const errorItem = (error) => {
//   //   return (
//   //     <div key={error.field}>
//   //       {/* <ActionCard className={classes.SnackbarActionCard} onClick={() => scrolly(error.field)}> */}
//   //       <div className={classes.SnackbarActionCard} onClick={() => scrolly(error.field)}>
//   //         {error.message}
//   //       </div>
//   //       {/* </ActionCard> */}
//   //     </div>
//   //   )
//   // }

//   return (
//     <>
//       {errorArray.length > 0 && (
//         <Snackbar
//           open
//           className={classes.errorSnackbar}
//           status="error"
//           message={
//             <div className={classes.errorSnackbarMessage}>
//               <Typography
//                 className={classes.errorSnackbarTitle}
//                 style={{ margin: 0 }}
//               >
//                 Please fix invalid fields to see accurate data
//               </Typography>
//               {/* {errorArray.map((error, index) => {
//                     if (error.message.length > 0) {
//                       error.message.map((_error) => {
//                         const foo = { field: 'rate', message: _error.rate }
//                         // _error.rate
//                         return errorItem(foo)
//                       })
//                     }

//                     return errorItem(error)
//                   })} */}
//             </div>
//           }
//         />
//       )}
//     </>
//   )
// }

// Errors.propTypes = {
//   name: PropTypes.number.isRequired
// }
