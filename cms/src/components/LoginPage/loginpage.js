import React from 'react'
import Loginform from './LoginFormContainer'
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
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 0.96,
    '& p:first-of-type': {
      opacity: '0.8'
    },
    '& p:last-of-type': {
      opacity: '0.6'
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

const Loginpage = () => {
  const classes = useStyles()
  return (
    <div className={classes.loginPageWrapper}>
      <div className={classes.loginPageBackgroundFade}>
        <div className={classes.loginFormWrapper}>
          <Loginform />
        </div>
        <div className={classes.welcomeBackWrapper}>
          <p>
            Welcome Back,
          </p>
          <p>
            Sign in to continue
          </p>
        </div>
        <div className={classes.agreementTextWrapper}>
          <Typography component='p' variant='body2'>
            By continuing, you're confirming that you've read our Terms &amp; Conditions and Cookie Policy
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
