import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => {
  return {
    ScrollButton: {
      position: 'fixed',
      left: '50%',
      width: '10rem',
      zIndex: 9999,
      [theme.breakpoints.down('md')]: {
        marginLeft: '-5rem'
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: '0'
      }
    },
    BtnPositionWithoutBanner: {
      [theme.breakpoints.down('md')]: {
        bottom: '1.5rem'
      },
      [theme.breakpoints.up('md')]: {
        bottom: '2.5rem'
      }
    },
    BtnPositionWithBanner: {
      [theme.breakpoints.down('md')]: {
        bottom: '8.5rem'
      },
      [theme.breakpoints.up('md')]: {
        bottom: '5.5rem'
      }
    }
  }
})

export default styles
