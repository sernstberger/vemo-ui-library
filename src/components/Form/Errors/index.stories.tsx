import React from 'react'
// import { action } from '@storybook/addon-actions'
import ValidatedInputBase from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Formik } from 'formik'
import Errors from '../Errors'

export default {
  title: 'Errors',
  component: ValidatedInputBase,
  decorators: [withKnobs]
}

export const Base = () => (
  <Errors
    errors={{
      employer: 'Employer name is required',
      employmentStartDate: 'Employment start date is required',
      files: 'At least one file is required',
      hourlyRate: 'Hourly rate is required',
      hoursPerWeek: 'Average hours per week is required',
      jobLocationCity: 'City is required',
      jobLocationState: 'State is required',
      jobTitle: 'Job title is required'
    }}
  />
)
