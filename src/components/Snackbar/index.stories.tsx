import React from 'react'
// import { action } from '@storybook/addon-actions'
import Snackbar from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Snackbar',
  component: Snackbar,
  decorators: [withKnobs]
}

export const SnackbarStory = () => (
  <>
    <Snackbar
      open={boolean('Open', true)}
      status="success"
      messages={[{ text: 'asdlkfjasf', link: '/' }]}
    />

    {/* <Snackbar
      open={boolean('Open', true)}
      status="success"
      messages={[
        { text: 'asdlkfjasf', link: '/' },
        { text: 'oierioe aklsjdf lkasj falksdjflasdkjf aslkjf aslkjfasdlkfj aslkfjasdlk fjasrioe aklsjdf lkasj falksdjflasdkjf aslkjf aslkjfasdlkfj aslkfjasdlk fjasrioe aklsjdf lkasj falksdjflasdkjf aslkjf aslkjfasdlkfj aslkfjasdlk fjasrioe aklsjdf lkasj falksdjflasdkjf aslkjf aslkjfasdlkfj aslkfjasdlk fjasf lkjasdfadkflkaf', link: '/' }
      ]}
    /> */}
  </>
)

// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import { text, boolean, select } from '@storybook/addon-knobs'
// import Snackbar from './index'
// import RequestErrorMessage from './RequestErrorMessage'
// import ErrorMessageWithVemoSupport from './ErrorMessageWithVemoSupport'

// storiesOf('Snackbar', module)
//   .add('basic', () => {
//     const open = boolean('open', true)
//     const status = select(
//       'status',
//       {
//         success: 'success',
//         error: 'error',
//         warning: 'warning',
//         bank: 'bank',
//         bankUpdate: 'bank-update',
//         pending: 'pending'
//       },
//       'success'
//     )
//     const link = boolean('link', true)
//     const message = text('message', 'things go here')
//     return <Snackbar open={open} status={status} message={message} link={link} />
//   })
//   .add('RequestErrorMessage', () => {
//     return <Snackbar open status="error" message={<RequestErrorMessage />} />
//   })
//   .add('ErrorMsgWithVemoSupport', () => {
//     return <Snackbar open status="error" message={<ErrorMessageWithVemoSupport />} />
//   })
