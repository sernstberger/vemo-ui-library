import React from 'react'
import { storiesOf } from '@storybook/react'
// import Provider from '~/.storybook/Provider'
import MaterialTable from './index'
import Icon from '../Icon'

// import mockStore from '~/.storybook/store.mocks'

storiesOf('Components/MUI', module)
  // .addDecorator(Provider)
  .add('Table', () => (
    <MaterialTable
      title="Agreements"
      icon={
        <Icon
          name="IsaFill"
          size="small"
          // iconColor={palette.icons.agreements}
        />
      }
      options={{}}
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
      // onRowClick={(event, { agreementID }) => {
      //   history.push(`/agreements/agreement/${agreementID}/info`)
      // }}
    />
  ))
// .add('DashboardPanel--ZeroState', () => <DashboardPanel />, {
//   options: { store: zeroState }
// })
