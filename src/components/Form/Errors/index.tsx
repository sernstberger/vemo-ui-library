import React, { useEffect, useState, useRef } from 'react'
import Snackbar, { SnackbarMessageProps } from '../../Snackbar'
import { useFormikContext, getIn } from 'formik'

const Errors = (props: any) => {
  const { errors, values, touched, submitCount } = useFormikContext()

  const [snackbarMessages, setSnackbarMessages] = useState([])

  useEffect(() => {
    let messagesArray: any = []
    const createErrorArray = (obj: any) => {
      Object.entries(obj).map((errorObj: any) => {
        if (Array.isArray(errorObj[1])) {
          errorObj[1].map((ErrorObjObj: any, index: number) => {
            Object.entries(ErrorObjObj).map((blah: any) => {
              const foo = errorObj[0]
              messagesArray = [...messagesArray, `${foo}[${index}].${blah[0]}`]
            })
          })
        } else {
          messagesArray = [...messagesArray, errorObj[0]]
        }
      })
    }

    createErrorArray(values)

    const formattedMessages = messagesArray.map((obj: any) => {
      const error = getIn(errors, obj)
      const touch = getIn(touched, obj)
      const errorMessageText = touch && error ? error : null

      if (errorMessageText !== null) {
        return {
          text: errorMessageText,
          onClick: () => {
            document.getElementById(obj)!.focus()
          }
        } as SnackbarMessageProps
      }
    })

    const filteredMessages = formattedMessages.filter(
      (item: any) => item !== undefined
    )

    setSnackbarMessages(filteredMessages)
  }, [submitCount])

  if (snackbarMessages.length && submitCount > 0) {
    return (
      <Snackbar
        open
        status="error"
        title="Something is not right..."
        messages={snackbarMessages}
      />
    )
  }

  return null
}

export default Errors
