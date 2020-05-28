import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = makeStyles((theme: Theme) =>
  createStyles({
    SelectIcon: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      // paddingLeft: theme.spacing(1.5),
      // marginLeft: theme.spacing(1.5),
      // right: theme.spacing(1.5),
      right: 0,
      height: '75%'
      // width: theme.spacing(4.5)
    }
  })
)

export default styles
