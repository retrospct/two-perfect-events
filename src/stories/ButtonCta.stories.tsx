import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { ButtonCta } from '../components/common/Button'

export const myProps = {
  id: '1',
  className: 'mySampleClass',
  sampleString: 'Test Task',
  sampleDate: new Date(2018, 0, 1, 9, 0),
}

export const actions = {
  onActionOne: action('onActionOne'),
  onActionTwo: action('onActionTwo'),
}

storiesOf('ButtonCta', module)
  .add('default', () => <ButtonCta {...myProps} {...actions} />)
  .add('pinned', () => <ButtonCta {...myProps} pinned={true} {...actions} />)
  .add('archived', () => (
    <ButtonCta {...myProps} archived={true} {...actions} />
  ))
