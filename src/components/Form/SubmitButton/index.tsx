import React from 'react'
import { useFormikContext, getIn } from 'formik'
import { Button, CircularProgress } from '@material-ui/core'

const SubmitButton = (props: any) => {
  const { handleSubmit, isSubmitting, isValidating } = useFormikContext()

  return (
    <Button
      onClick={() => {
        handleSubmit()
      }}
      variant="contained"
      color="primary"
      disabled={isSubmitting}
      size="large"
      startIcon={
        isSubmitting && (
          // isValidating &&
          <CircularProgress color="inherit" size={24} />
        )
      }
    >
      Submit
    </Button>
  )
}

export default SubmitButton
