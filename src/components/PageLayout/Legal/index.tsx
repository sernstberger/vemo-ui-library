import React from 'react'

import Link from '@material-ui/core/Link'
import { Typography } from '@material-ui/core'
import VemoLogo from '../../VemoLogo'
import styles from './styles'
import config from '../../../theme/config'

const Legal = () => {
  const classes = styles()
  const currentYear = new Date().getFullYear()
  const copyrightSymbol = '\xA9'

  return (
    <div className={classes.legal}>
      <div className={classes.legalLinks}>
        <Link
          component="a"
          href={config.links.terms_of_use}
          target="_blank"
          className={classes.legalLink}
        >
          Terms of Use
        </Link>
        <div className={classes.legalLinkDivider} />
        <Link
          component="a"
          href={config.links.privacy_policy}
          target="_blank"
          className={classes.legalLink}
        >
          Privacy Policy
        </Link>
      </div>

      <VemoLogo className={classes.logo} width="105px" />

      <Typography variant="h6" component="div">
        {`${copyrightSymbol} ${currentYear} Vemo Education`}
      </Typography>
    </div>
  )
}

export default Legal
