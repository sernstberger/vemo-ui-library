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

  foo.map((baz: any) => {
    
    if (typeof baz[1] === 'object') {
      baz[1].map((bat: any) => {
        const hit = Object.entries(bat)
        hit.map((ball: any) => {
          const ugh = {field: ball[0], message: ball[1]}
          finalArray = [...finalArray, ugh]
        })

        // console.log('*****', hit)
      })
    } else {
      const thing = {field: baz[0], message: baz[1]}
      finalArray = [...finalArray, thing]
    }
  })


// console.log('^^^^^^^', finalArray)






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
