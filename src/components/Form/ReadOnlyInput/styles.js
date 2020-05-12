import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2)
  },

  ReadOnlyInputContent: {
    border: '2px solid orange',
    borderRadius: 4,
    lineHeight: '44px',
    padding: '0 10px',
    wordBreak: 'break-word'
  }
}))

export default styles
