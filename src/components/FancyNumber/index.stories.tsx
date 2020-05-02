import React from 'react'
// import { action } from '@storybook/addon-actions'
import FancyNumber from './index'

export default {
  title: 'Fancy Number',
  component: FancyNumber
}

export const FancyNumberStory = () => <FancyNumber number={23433} money />




// import { BrowserRouter } from 'react-router-dom'
// import { storiesOf } from '@storybook/react'
// import { text, boolean, number } from '@storybook/addon-knobs'
// import { Typography, Button } from '@material-ui/core'
// import FancyNumber from './index'

// storiesOf('FancyNumber', module)
//   .add('basic', () => {
//     const defaultNumber = number('number', 123)
//     const money = boolean('money', false)
//     const label = text('label', 'Some Label')
//     return (
//       <FancyNumber number={defaultNumber} money={money} label={label} />
//     )
//   })