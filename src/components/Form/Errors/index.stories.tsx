import React from 'react'
// import { action } from '@storybook/addon-actions'
import ValidatedInputBase from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Formik, FieldArray, Field } from 'formik'
import Errors from '../Errors'
import ValidatedTextInput from '../ValidatedTextInput'

export default {
  title: 'Errors',
  component: ValidatedInputBase,
  decorators: [withKnobs]
}

export const Base = () => (
  <Formik
    initialValues={{ field1: '', field2: '', loans: ['jared', 'ian', 'brent'] }}
    onSubmit={() => {}}
  >
    {props => {
      const foo = Object.keys(props.errors).length !== 0

      const bleh = {
        loans: [
          { rate: 'Interest Rate is required 111111', term: "Term can't be less than 0 111111" },
          { rate: 'Interest Rate is required 222222', term: "Term can't be less than 0 222222" },
          { rate: 'Interest Rate is required 333333', term: "Term can't be less than 0 333333" }
        ],
        field1: 'field1 is required',
        field2: 'field2 is required'
      }

      return (
        <>
          {foo && (
            <Errors
              // errors={{
              //   employer: 'Employer name is required',
              //   employmentStartDate: 'Employment start date is required',
              //   files: 'At least one file is required',
              //   hourlyRate: 'Hourly rate is required',
              //   hoursPerWeek: 'Average hours per week is required',
              //   jobLocationCity: 'City is required',
              //   jobLocationState: 'State is required',
              //   jobTitle: 'Job title is required'
              // }}
              errors={props.errors}
              // errors={bleh}
            />
          )}
          <ValidatedTextInput field="nope" label="asdfsdaf" required />
          <ValidatedTextInput field="meh" label="test" required />

          <FieldArray
            name="loans"
            render={arrayHelpers => (
              <div>
                {props.values.loans.map((loan, index) => (
                  <div key={index}>
                    <ValidatedTextInput
                      label="rate"
                      field={`loans[${index}].rate`}
                      required
                    />
                    <ValidatedTextInput
                      label="term"
                      field={`loans.${index}.term`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => arrayHelpers.push({ name: '', age: '' })}
                >
                  +
                </button>
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
