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
  const { title = 'Something is not right...' } = props
  const { errors } = useFormikContext()

  let finalArray: ErrorProps[] = []

  const createErrorArray = (obj: any) => {
    Object.entries(obj).map((errorObj: any) => {
      if (Array.isArray(errorObj[1])) {
        errorObj[1].map((ErrorObjObj: any) => {
          createErrorArray(ErrorObjObj)
        })
      } else {
        finalArray = [
          ...finalArray,
          { field: errorObj[0], message: errorObj[1] }
        ]
      }
    })
  }

  createErrorArray(errors)

  const formattedMessages = finalArray.map((error: ErrorProps) => {
    return {
      text: error.message,
      onClick: () => {
        alert(error.field)
      }
    } as SnackbarMessageProps
  })

  if (formattedMessages.length) {
    return (
      <Snackbar
        open
        status="error"
        title={title}
        messages={formattedMessages}
      />
    )
  }

  return null
}

export default Errors
