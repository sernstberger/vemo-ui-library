import React from 'react'
// import { StylesProvider } from '@material-ui/styles'
import { addDecorator, configure } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../src/theme';

const StylesDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
)

addDecorator(StylesDecorator)
