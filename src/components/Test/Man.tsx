import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'

const styles = makeStyles((theme: Theme) =>
  createStyles({
    Component: {
      backgroundColor: theme.palette.primary.main
    }
  })
)

const Man = (props: any) => {
  const classes = styles()
  return (
    <ThemeProvider theme={theme}>
      <Card {...props} className={classes.Component}>
        This is my first Batman component
      </Card>
    </ThemeProvider>
  )
}

export default Man
