import React from 'react'
import Snackbar, { SnackbarMessageProps } from '../../Snackbar'
import { FormikErrors, FormikValues, useFormikContext } from 'formik'

interface ErrorsProps {
  // errors: FormikErrors<FormikValues>
  title?: string
}

interface ErrorProps {
  field: string
  message: string
}

const Errors = (props: ErrorsProps) => {
  const {  title = 'Something is not right...' } = props
  const {errors} = useFormikContext()





  let finalArray: ErrorProps[] = []

  const foo = Object.entries(errors)
  console.log('!!!!!', foo)

  foo.map((baz: any) => {
    // console.log(thing, typeof baz[1] === 'object')
    
    if (typeof baz[1] === 'object') {
      const thing = baz[1].map((bat: any) => {
        console.log('*****', bat)
      })
    } else {
      const thing = {field: baz[0], message: baz[1]}
      finalArray = [...finalArray, thing]
    }
  })


console.log('^^^^^^^', finalArray)






  const formattedMessages = finalArray.map((error: ErrorProps) => {
    return {
      text: error.message,
      onClick: () => {
        alert(error.field)
      }
    } as SnackbarMessageProps
  })






  return (
    <Snackbar open status="error" title={title} messages={formattedMessages} />
    // <Snackbar open status="success" messages="yeah!" />
  )
}

export default Errors
