import React from 'react'
import Icon from './Icon'
import iconsArray from './src/iconsArray'
import { Grid } from '@material-ui/core'

export default {
  title: 'Icons'
  // component: Icon
}

export const IconsStory = () => (
  <Grid container spacing={2}>
    {iconsArray.map((icon: any) => {
      return (
        <Grid item xs={3} key={icon.name}>
          <div style={{ backgroundColor: 'red' }}>
            <Icon name={icon.name} />
            {icon.name}
          </div>
        </Grid>
      )
    })}
  </Grid>
)
