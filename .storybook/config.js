import React from 'react'
// import { StylesProvider } from '@material-ui/styles'
import { addDecorator, configure } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../src/theme';

const StylesDecorator = storyFn => (
  // <StylesProvider injectFirst>
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
  // </StylesProvider>
)

addDecorator(StylesDecorator)
