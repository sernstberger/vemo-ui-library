import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = makeStyles((theme: Theme) =>
  createStyles({
    SubmitLoadingSpinner: {
      marginRight: theme.spacing(1),

      '& svg': {
        margin: 0
      }
    },

    textWrapper: {
      position: 'relative'
    },
    characterLimitText: {
      position: 'absolute',
      top: 14,
      right: 0
    },

    largeInput: {
      fontSize: 50,
      width: 60
    },

    largeInputProps: {
      fontSize: 50
    },
    largeHtmlInputProps: {
      paddingLeft: 90
    }
  })
)

export default styles
