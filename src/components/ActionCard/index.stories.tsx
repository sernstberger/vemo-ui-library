import React from 'react'
// import { action } from '@storybook/addon-actions'
import ActionCard from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Typography } from '@material-ui/core'

export default {
  title: 'ActionCard',
  component: ActionCard,
  decorators: [withKnobs]
}

export const ActionCardStory = () => (
  <ActionCard>
    <Typography>Some Text</Typography>
  </ActionCard>
)

// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import { text, boolean } from '@storybook/addon-knobs'
// import { Typography, Button } from '@material-ui/core'
// import ActionCard from './index'
// import ActionCardContent from '../ActionCardContent'

// storiesOf('ActionCard', module)
//   .add('with basic text', () => {
//     return (
//       <ActionCard>
//         <Typography>Some Text</Typography>
//       </ActionCard>
//     )
//   })

//   .add('with action card content', () => {
//     const zeroState = boolean('zeroState', false)

//     return (
//       <ActionCard zeroState={zeroState}>
//         <ActionCardContent heading="Some header content" content="Content goes here" />
//       </ActionCard>
//     )
//   })

//   .add('with link', () => {
//     const to = text('to', 'http://google.com')
//     const zeroState = boolean('zeroState', false)

//     return (
//       <>
//         <ActionCard to={to} zeroState={zeroState}>
//           <Typography>Some Text</Typography>
//         </ActionCard>
//       </>
//     )
//   })

//   .add('with secondary action', () => {
//     const to = text('to', 'http://google.com')
//     const zeroState = boolean('zeroState', false)

//     return (
//       <>
//         <ActionCard onClick={()=> {alert('primary click')}} zeroState={zeroState} secondaryAction={<Button onClick={()=>{ alert('secondary click')}}>Secondary Action</Button>}>
//           <Typography>Some Text</Typography>
//         </ActionCard>
//       </>
//     )
//   })
