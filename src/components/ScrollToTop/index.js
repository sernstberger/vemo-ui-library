import React, { useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

import Icon from '~/app/components/Icon'
import styles from './styles'

const ScrollToTop = (props) => {
  let { certBannerOpen } = props
  const classes = styles()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onScroll = () => {
    if (window.document.body.scrollTop > 100 && !isScrolled) {
      setIsScrolled(true)
    } else if (window.document.body.scrollTop < 100 && isScrolled) {
      setIsScrolled(false)
    }
  }
  useEffect(() => {
    window.document.body.addEventListener('scroll', onScroll)
    return () => {
      window.document.body.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return isScrolled ? (
    <Button
      variant="contained"
      color="primary"
      className={classNames(
        classes.ScrollButton,
        certBannerOpen
          ? classes.BtnPositionWithBanner
          : classes.BtnPositionWithoutBanner
      )}
      onClick={scrollToTop}
      startIcon={<Icon icon="arrow-up" />}
    >
      Back to Top
    </Button>
  ) : null
}

ScrollToTop.propTypes = {
  certBannerOpen: PropTypes.bool
}

ScrollToTop.defaultProps = {
  certBannerOpen: false
}

export default ScrollToTop
