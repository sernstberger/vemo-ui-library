import React from 'react'
import Snackbar, { SnackbarMessageProps } from '../../Snackbar'

interface ErrorsProps extends SnackbarMessageProps {}

const foo = {
  employer: 'Employer name is required',
  employmentStartDate: 'Employment start date is required',
  files: 'At least one file is required',
  hourlyRate: 'Hourly rate is required',
  hoursPerWeek: 'Average hours per week is required',
  jobLocationCity: 'City is required',
  jobLocationState: 'State is required',
  jobTitle: 'Job title is required'
}

const errorArray = Object.keys(foo).map(function(key) {
  return { field: key, message: foo[key] }
})

const bar = errorArray.map(baz => {
  return {
    text: baz.message,
    onClick: () => {
      alert(baz.field)
    }
  }
})

// const errorItem = (error) => {
//   return (
//     <div key={error.field}>
//       {/* <ActionCard className={classes.SnackbarActionCard} onClick={() => scrolly(error.field)}> */}
//       <div className={classes.SnackbarActionCard} onClick={() => scrolly(error.field)}>
//         {error.message}
//       </div>
//       {/* </ActionCard> */}
//     </div>
//   )
// }

const scrolly = (elementId: any) => {
  const formFieldElement = document.getElementById(elementId)
  formFieldElement!.focus()
}

const Errors = (props: ErrorsProps) => {
  return (
    <Snackbar
      open
      status="error"
      title="Something is not right..."
      messages={bar}
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
