import React from 'react'
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'
import clsx from 'clsx'

// const styles = makeStyles((theme: Theme) =>
const styles = makeStyles(() =>
  createStyles({
    Component: {
      backgroundColor: 'blue'
    }

    // root: {
    //   overflow: 'hidden',
    // },
  })
)

const Bax = React.forwardRef(function Bax(props: any, ref) {
  const { classes, className, ...other } = props

  return (
    <Card className={clsx(classes.Component, className)} ref={ref} {...other}>
      This is my first component
    </Card>
  )
})

export default withStyles(styles as any, { name: 'MuiCard' })(Bax)
