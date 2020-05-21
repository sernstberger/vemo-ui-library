import React from 'react'
// import { action } from '@storybook/addon-actions'
import ValidatedInputBase from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import Errors from '../Errors'
import ValidatedTextInput from '../ValidatedTextInput'

export default {
  title: 'Errors',
  component: ValidatedInputBase,
  decorators: [withKnobs]
}

export const Base = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      loans: [
        { name: 'Student loan', rate: 0, term: 0 },
        { name: 'Parent loan', rate: 0, term: 0 }
      ]
    }}
    onSubmit={() => {}}
  >
    {props => {
      const foo = Object.keys(props.errors).length !== 0

      // const bleh = {
      //   loans: [
      //     {
      //       rate: 'Interest Rate is required 111111',
      //       term: "Term can't be less than 0 111111"
      //     }
      //     // {
      //     //   rate: 'Interest Rate is required 222222',
      //     //   term: "Term can't be less than 0 222222"
      //     // },
      //     // {
      //     //   rate: 'Interest Rate is required 333333',
      //     //   term: "Term can't be less than 0 333333"
      //     // }
      //   ],
      //   field1: 'field1 is required',
      //   field2: 'field2 is required'
      // }

      return (
        <>
          {foo && <Errors />}
          <ValidatedTextInput field="firstName" label="First name" required />
          <ValidatedTextInput field="lastName" label="Last name" required />

          <FieldArray
            name="loans"
            render={arrayHelpers => (
              <div>
                {props.values.loans.map((loan, index) => (
                  <div key={index}>
                    <ValidatedTextInput
                      label={`${loan.name} rate`}
                      field={`loans[${index}].rate`}
                      required
                    />
                    <ValidatedTextInput
                      label={`${loan.name} term`}
                      field={`loans.${index}.term`}
                      required
                    />
                  </div>
                ))}
              </div>
            )}
          />
        </>
      )
    }}
  </Formik>
)

// errors={{
//   fundingAmount: "Funding amount can't be less than $2,000.00",
//   loans: [
//     { rate: 'Interest Rate is required', term: "Term can't be less than 0" }
//   ]
// }}

// errors={{
//   fundingAmount: 'Funding amount is required',

//   loans: [
//     {
//       rate: "Interest Rate can't be less than 0",
//       term: 'Term is required'
//     },

//     { rate: 'Interest Rate is required', term: "Term can't be less than 0" }
//   ],
//   startingSalary: 'Starting salary is required'
// }}
