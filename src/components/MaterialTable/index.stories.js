import React from 'react'
import { storiesOf } from '@storybook/react'
// import Provider from '~/.storybook/Provider'
import MaterialTable from './index'

// import mockStore from '~/.storybook/store.mocks'

storiesOf('Components/MUI', module)
  // .addDecorator(Provider)
  .add('Table', () => (
    <MaterialTable
      columns={[
        {
          title: 'ISA Program Name',
          field: 'programName'
        },
        {
          title: 'Nope',
          field: 'nope'
        }
      ]}
      data={[
        { programName: 'thing', nope: 'huh' },
        { programName: 'what', nope: 'idunno' }
      ]}
    />
  ))
// .add('DashboardPanel--ZeroState', () => <DashboardPanel />, {
//   options: { store: zeroState }
// })
