import React from 'react'
import { Formik, Field } from 'formik'

const VemoForm = (props: any) => {
  const { fields } = props

  let initialValues: any[] = []
  fields.map((field: any) => {
    initialValues = { ...initialValues, ...{ [field]: 'hi' } }
  })

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <div>
        {fields.map((field: any) => {
          return <Field name={field} style={{ backgroundColor: 'yellow' }} />
        })}
      </div>
    </Formik>
  )
}

export default VemoForm
