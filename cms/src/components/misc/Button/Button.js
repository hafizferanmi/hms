import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialButton from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 40,
    boxShadow: 'none',
    color: 'white',
    height: 42,
    padding: '0 30px',
    outline: 0
  }
})

const Button = ({ label, ...props }) => {
  const classes = useStyles()
  return (
    <MaterialButton
      variant='outlined'
      color='primary'
      className={classes.root}
      {...props}
    >
      {label}
    </MaterialButton>
  )
}

export default Button
