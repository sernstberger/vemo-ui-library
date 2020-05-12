import React from 'react'
import { action } from '@storybook/addon-actions'
import Foo from './Foo'
import iconsArray from './build/iconsArray'
import { Grid } from '@material-ui/core'

export default {
  title: 'Icons'
  // component: Icon
}

console.log('!!!!', iconsArray)

export const IconsStory = () => (
  <Grid container spacing={2}>
    {iconsArray.map((icon: any) => {
      return (
        <Grid item xs={3}>
          <div style={{ backgroundColor: 'red' }}>
            <Foo name={icon.name} />
            {icon.name}
          </div>
        </Grid>
      )
    })}
  </Grid>
)
