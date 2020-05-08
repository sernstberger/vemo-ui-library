import React from 'react'
import Snackbar, { SnackbarMessageProps } from '../../Snackbar'
import { FormikErrors, FormikValues } from 'formik'

interface ErrorsProps {
  errors: FormikErrors<FormikValues>
}

interface ErrorProps {
  field: string
  message: string
}

const Errors = (props: ErrorsProps) => {
  const { errors } = props

  // let errorArray: any[] = []

  // Object.keys(errors).map((key: string) => {
  //   let meh = errors

  //   const foo = errors[key]
  //   // let bar: any[] = []
  //   if (Array.isArray(foo)) {
  //     // bar = [...bar, ...errorArray(foo)]
  //     // bar = foo
  //     foo.map((blah: any) => {
  //       meh = { ...meh, ...blah }
  //     })
  //     delete meh['loans']
  //   }

  //   errorArray = Object.keys(meh).map((_key: string) => {
  //     return { field: _key, message: meh[_key] } as ErrorProps
  //   })

  //   return

  // })

  const foo = Object.entries(errors)
  let errorArray: any[] = []
  foo.forEach(([key, value]) => {
    let obj
    if (!Array.isArray(value)) {
      obj = { field: key, message: value }
    } else {
      // value.forEach(([_key, _value]) => {
      //   obj = { field: _key, message: _value }
      // })
      value.map((barf: any) => {
        const jeeze = Object.entries(barf)
        console.log('!!!!', jeeze)
        jeeze.forEach(([_key, _value]) => {
          obj = { field: _key, message: _value}
        })
        errorArray = [...errorArray, obj]
      })
    }
    errorArray = [...errorArray, obj]
    // console.log(key); // 'one'
    // console.log(value); // 1
  })
  // const bar = foo.flat()

  // console.log('errors', errorArray)

  const formattedMessages = errorArray.map((message: ErrorProps) => {
    return {
      text: message.message,
      onClick: () => {
        alert(message.field)
      }
    } as SnackbarMessageProps
  })

  // const scrolly = (elementId: any) => {
  //   const formFieldElement = document.getElementById(elementId)
  //   formFieldElement!.focus()
  // }

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
