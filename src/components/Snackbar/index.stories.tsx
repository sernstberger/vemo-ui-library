import React from 'react'
// import { action } from '@storybook/addon-actions'
import Snackbar from './index'
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs'

export default {
  title: 'Snackbar',
  component: Snackbar,
  decorators: [withKnobs]
}

//         bank: 'bank',
//         bankUpdate: 'bank-update',
//         pending: 'pending'

export const SnackbarStory = () => (
  <>
    <Snackbar
      open={boolean('Open', true)}
      status={select(
        'Status',
        ['success', 'error', 'warning', 'pending'],
        'success'
      )}
      title="With a title"
      messages="With a message. There's no link here."
      style={{ position: 'relative' }}
    />

    <Snackbar
      open={boolean('Open', true)}
      status={select(
        'Status',
        ['success', 'error', 'warning', 'pending'],
        'success'
      )}
      messages="Just a message. There's no link or title here."
      style={{ position: 'relative' }}
    />

    <Snackbar
      open={boolean('Open', true)}
      status={select(
        'Status',
        ['success', 'error', 'warning', 'pending'],
        'success'
      )}
      title="Now for a linked message with a title"
      messages={{
        text:
          'This message is object. Notice that the whole card is a link, icluding the header',
        link: '/'
      }}
      style={{ position: 'relative' }}
    />
    <Snackbar
      open={boolean('Open', true)}
      status={select(
        'Status',
        ['success', 'error', 'warning', 'pending'],
        'success'
      )}
      title="Title"
      messages={[
        {
          text:
            'This message is in an array, but there is only one object in the array.',
          link: '/'
        }
      ]}
      style={{ position: 'relative' }}
    />

    <Snackbar
      open={boolean('Open', true)}
      status={select(
        'Status',
        ['success', 'error', 'warning', 'pending'],
        'success'
      )}
      title="Now for an array of linked messages"
      messages={[
        { text: 'message 1 goes here', link: '/' },
        {
          text:
            'Here is a very long message to show that the box will expand as the text gets longer. I am tired of typing but I have to keep going to make this long enough. Wow, not even close. Is it over yet? I could probably shrink the width of this snackbar, but I do not really want to do that.',
          link: '/'
        }
      ]}
      style={{ position: 'relative' }}
    />

    <Snackbar
      open={boolean('Open', true)}
      status={select(
        'Status',
        ['success', 'error', 'warning', 'pending'],
        'success'
      )}
      messages={[
        { text: 'Still an an array, but no title here', link: '/' },
        {
          text:
            'This is nonsense. Oierioe aklsjdf lkasj falksdjflasdkjf aslkjf aslkjfasdlkfj aslkfjasdlk fjasrioe aklsjdf lkasj falksdjflasdkjf aslkjf aslkjfasdlkfj aslkfjasdlk fjasrioe aklsjdf lkasj falksdjflasdkjf aslkjf aslkjfasdlkfj aslkfjasdlk fjasrioe aklsjdf lkasj falksdjflasdkjf aslkjf aslkjfasdlkfj aslkfjasdlk fjasf lkjasdfadkflkaf',
          link: '/'
        }
      ]}
      style={{ position: 'relative' }}
    />
  </>
)

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
