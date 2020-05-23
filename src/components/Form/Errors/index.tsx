import React from 'react'
import Snackbar, { SnackbarMessageProps } from '../../Snackbar'
import { useFormikContext, getIn } from 'formik'

const Errors = (props: ErrorsProps) => {
  const { errors, values, touched, submitCount } = useFormikContext()

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
    const foo = touch && error ? error : null

    if (foo !== null) {
      return {
        text: foo,
        onClick: () => {
          document.getElementById(obj)!.focus()
        }
      } as SnackbarMessageProps
    }
  })

  const filteredMessages = formattedMessages.filter((item: any) => item !== undefined)

  if (filteredMessages.length && submitCount > 0) {
    return <Snackbar open status="error" messages={filteredMessages} />
  }

  return null
}

export default Errors
