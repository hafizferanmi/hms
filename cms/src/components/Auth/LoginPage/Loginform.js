import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import { Link } from '@reach/router'
import { Person, Visibility, VisibilityOff, LockOutlined } from '@material-ui/icons'

import ErrorMessage from '../../misc/ErrorMessage'
import LoginFormSchema from './LoginFormSchema'

const useStyles = makeStyles({
  loginFormWrapper: {
    backgroundColor: 'rgba(255 ,255 , 255, 1)',
    width: 350,
    padding: 20,
    minHeight: 200,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 4,
    border: 'solid 1px #0066f5',
    // boxShadow: '0 10px 10px -5px black',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
  },
  signInText: {
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 20,
    color: '#0c2e67',
    textTransform: 'uppercase'
  },
  signInDesc: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#b7bcc0',
    marginTop: 20
  },
  forgotPasswordText: {
    marginTop: 10,
    '& a': {
      color: '#e0e2e5'
    },
    '& a:hover': {
      color: 'black'
    }
  },
  button: {
    background: '#0066f5',
    borderRadius: 30,
    color: 'white',
    padding: '10px 20px',
    fontSize: 13,
    border: 0,
    outline: 0,
    cursor: 'pointer',
    '&:hover': {
      background: '#0066f5'
    }
  },
  newAccountWrapper: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 11,
    textAlign: 'center',
    color: '#0066f5'
  },
  iconInputWrapper: {
    display: 'flex',
    border: 'solid 1.5px #e0e2e5',
    marginTop: 15
  },
  iconWrapper: {
    color: ' #e0e2e5',
    borderRight: 'solid 1.5px #e0e2e5',
    marginLeft: 10,
    paddingRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    border: 0,
    outline: 0,
    paddingBottom: 10,
    padding: 10,
    background: 'none',
    width: '100%',
    fontSize: 15,
    marginLeft: 5,
    paddingRight: 40,
    color: 'black',
    '&::placeholder': {
      color: '#e0e2e5'
    }
  },
  errorMessage: {
    marginTop: 10
  },
  error: {
    fontSize: 12,
    color: 'rgba(214, 10, 46)'
  }
})

const Loginform = ({ serverState, submitForm }) => {
  const classes = useStyles()
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(LoginFormSchema)
  })
  const { isSubmitting } = formState
  const { message, serverError } = serverState

  const [passwordVisible, setPasswordVisibility] = React.useState(false)
  const handleEyeClick = () => {
    setPasswordVisibility(!passwordVisible)
  }

  return (
    <form className={classes.loginFormWrapper} onSubmit={handleSubmit(submitForm)}>
      <p className={classes.signInText}>Sign in</p>
      <span className={classes.signInDesc}>Enter your credentials to sign in</span>
      <div>
        <div className={classes.iconInputWrapper}>
          <div className={classes.iconWrapper}><Person /></div>
          <input className={classes.input} type='email' ref={register} name='email' placeholder='email address' />
        </div>
        <div style={{ position: 'relative' }}>
          <div className={classes.iconInputWrapper}>
            <div className={classes.iconWrapper}><LockOutlined /></div>
            <input className={classes.input} type={passwordVisible ? 'text' : 'password'} ref={register} name='password' placeholder='password' />
          </div>
          <div onClick={handleEyeClick} style={{ position: 'absolute', top: '7px', right: '10px', fontSize: '6px', color: '#e0e2e5', cursor: 'pointer' }}>
            {passwordVisible ? <Visibility /> : <VisibilityOff />}
          </div>
        </div>

        <div className={classes.errorMessage}>
          {errors && <p className={classes.error}>{errors && errors.email && errors.email.message}</p>}
          {errors && <p className={classes.error}>{errors && errors.password && errors.password.message}</p>}
          <ErrorMessage
            networkError={serverError}
            message={message}
          />
        </div>
        <div className={classes.buttonWrapper}>
          <span className={classes.forgotPasswordText}><Link to='/forgot-password'>Forgot password ?</Link></span>
          <Button
            className={classes.button}
            label='Login'
            type='submit'
            color='primary'
            disabled={isSubmitting}
          >
            LOGIN
          </Button>
        </div>
        <div className={classes.newAccountWrapper}>
          <span>New user? Create an account</span>
        </div>
      </div>
    </form>
  )
}

export default Loginform
