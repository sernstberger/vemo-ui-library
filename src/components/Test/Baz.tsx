import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'

// const styles = makeStyles((theme: Theme) =>
const styles = makeStyles(() =>
  createStyles({
    Component: {
      backgroundColor: 'blue'
    }
  })
)

const Baz = () => {
  const classes = styles()
  return (
    <Card className={classes.Component}>This is my first component</Card>
  )
}

export default Baz
