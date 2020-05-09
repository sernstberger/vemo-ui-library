import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
  legal: {
    margin: '10px 0',
    textAlign: 'center'
  },
  legalLinks: {
    display: 'flex',
    justifyContent: 'center'
  },
  legalLink: {
    // ...theme.typography.footnote,
    textDecoration: 'none',
    border: '1px solid transparent',
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.divider}`
    }
  },
  legalLinkDivider: {
    background: theme.palette.divider,
    margin: theme.spacing(0, 1),
    width: '1px'
  },
  logo: {
    margin: theme.spacing(2, 4)
  }
}))

export default styles
