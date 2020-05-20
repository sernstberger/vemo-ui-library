import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'

const styles = makeStyles((theme: Theme) =>
  createStyles({
    Component: {
      backgroundColor: theme.palette.primary.main
    }
  })
)

const Bat = () => {
  const classes = styles()
  return (
    <Card className={classes.Component}>This is my first Batman component</Card>
  )
}

export default Bat
