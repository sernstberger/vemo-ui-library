import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'

// const styles = makeStyles((theme: Theme) =>
const styles = makeStyles(() =>
  createStyles({
    Component: {
      backgroundColor: 'green'
    }
  })
)

const Bar = () => {
  const classes = styles()
  return (
    <div className={classes.Component}>This is my first component</div>
  )
}

export default Bar
