import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  Title: {
    alignItems: 'center',
    textTransform: 'uppercase'
  },
  TitleWithIcon: {
    alignItems: 'center',
    display: 'grid',
    gridGap: '.5rem',
    gridTemplate: '". ." / min-content 1fr',
    textTransform: 'uppercase'
  },
  EmptyState: {
    textAlign: 'center',
    padding: theme.spacing(3, 2),
    borderRadius: '.25em',
    border: `1px solid ${theme.palette.mask}`,
    display: 'flex',
    justifyContent: 'center'
  },
  EmptyStateContainer: {
    display: 'inline-grid',
    gridTemplate: '". . " / min-content 1fr',
    gridGap: '.5rem'
  }
}))
export default useStyles
