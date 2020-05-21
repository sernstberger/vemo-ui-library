import React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles'

const Button = (props: any) => {
  return (
    <StylesProvider injectFirst>
      <MuiButton {...props}>
        Gooooooo
      </MuiButton>
    </StylesProvider>
  )
}

export default Button
