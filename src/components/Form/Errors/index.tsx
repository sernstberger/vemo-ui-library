import React from 'react'
import Snackbar, { SnackbarMessageProps } from '../../Snackbar'
import {
  FormikErrors,
  FormikValues,
  useFormikContext,
  ErrorMessage,
  getIn
} from 'formik'

const Errors = (props: ErrorsProps) => {
  const { errors, values, touched } = useFormikContext()
  // const foo = Object.entries(values)

  let finalArray: any = []

  const createErrorArray = (obj: any) => {
    Object.entries(obj).map((errorObj: any) => {
      if (Array.isArray(errorObj[1])) {
        errorObj[1].map((ErrorObjObj: any, index: number) => {

          Object.entries(ErrorObjObj).map((blah: any) => {

            // console.log('things!!!', blah)
            const foo = errorObj[0]
            finalArray = [...finalArray, `${foo}[${index}].${blah[0]}`]
          })
        })
      } else {
        finalArray = [
          ...finalArray,
          errorObj[0]
        ]
      }
    })
  }

  createErrorArray(values)

  // finalArray = ['firstName', 'lastName', 'loans[0].rate']

  console.log('!!!!!!!', finalArray, 'get', getIn(errors, 'loans[0].rate'))


  const formattedMessages = finalArray.map((obj: any) => {
    const error = getIn(errors, obj);
    const touch = getIn(touched, obj);
    const foo = touch && error ? error : null;

    // return <div>{foo}
    
    
    // </div>

    return {
      text: foo,
      // onClick: () => {
      //   document.getElementById(error.field)!.focus()
      // }
      onClick: () => alert('woot')
    } as SnackbarMessageProps
  })

  return (
    <div style={{ backgroundColor: 'yellow' }}>

      
      
      <Snackbar open status="success" messages={formattedMessages} />
    </div>
  )
}

export default Errors
