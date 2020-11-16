import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

import loginformbackground from '../../assets/images/loginformbackground.jpg'

const useStyles = makeStyles({
  loginPageWrapper: {
    backgroundImage: `url(${loginformbackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh'
  },
  loginPageBackgroundFade: {
    background: 'rgba(0, 0, 0, .7)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: 'white'
  },
  loginFormWrapper: {
    position: 'absolute',
    top: '200px',
    right: '150px'
  },
  welcomeBackWrapper: {
    position: 'absolute',
    left: '200px',
    top: '150px',
    fontSize: '64px',
    fontWeight: 900,
    userSelect: 'none',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 0.96,
    '& p:first-of-type': {
      opacity: '0.8'
    },
    '& p:last-of-type': {
      opacity: '0.6',
      fontSize: 60
    }
  },
  agreementTextWrapper: {
    position: 'absolute',
    left: 200,
    bottom: 150,
    width: 400,
    opacity: 0.4
  }
})

const AuthPageTemplate = ({ bigHeader1, bigHeader2, smallText, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.loginPageWrapper}>
      <div className={classes.loginPageBackgroundFade}>
        <div className={classes.loginFormWrapper}>
          {children}
        </div>
        <div className={classes.welcomeBackWrapper}>
          <p>
            {bigHeader1}
          </p>
          <p>
            {bigHeader2}
          </p>
        </div>
        <div className={classes.agreementTextWrapper}>
          <Typography component='p' variant='body2'>
            {smallText}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default AuthPageTemplate
