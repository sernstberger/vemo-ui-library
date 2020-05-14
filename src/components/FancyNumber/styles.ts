import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import { Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) =>
  createStyles({
    largeNumber: {
      color: theme.palette.text.primary
    },
    sup: {
      fontSize: '0.5em', // this is intentionally using em's, so that no matter how big the text is, the size of the <sup> will proportionate
      position: 'relative',
      top: 2,
      color: theme.palette.text.primary
    },
    subLabel: {
      fontWeight: 500,
      marginLeft: theme.spacing(1),
      color: theme.palette.text.secondary
    }
  })
)

export default styles
