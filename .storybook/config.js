import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { addDecorator, configure } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../src/theme'
import { CssBaseline } from '@material-ui/core'

const StylesDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      {storyFn()}
    </BrowserRouter>
  </ThemeProvider>
)

addDecorator(StylesDecorator)
