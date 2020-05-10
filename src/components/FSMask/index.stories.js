import React from 'react'
import { storiesOf } from '@storybook/react'
import FSMask from './index'
import Icon from '../Icon'

storiesOf('Components', module).add('Fullstory Mask', () => (
  <>
    <FSMask>Test</FSMask>
    <FSMask>1234</FSMask>
    <FSMask>
      <span>Test</span>
    </FSMask>
    <FSMask>
      <div>Test</div>
    </FSMask>
    <FSMask>
      <input type="text" value="test" />
    </FSMask>
    <FSMask>
      <button type="button">Test</button>
    </FSMask>
    <FSMask>
      <Icon icon="close" />
    </FSMask>
  </>
))
