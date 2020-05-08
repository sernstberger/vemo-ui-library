import React from 'react'
// import { action } from '@storybook/addon-actions'
import PageLayout from './index'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Page Layout',
  component: PageLayout,
  decorators: [withKnobs]
}

export const Base = () => <PageLayout title="Page title goes here">page content</PageLayout>
