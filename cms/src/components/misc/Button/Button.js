import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialButton from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    background: '#177488',
    color: 'white',
    borderRadius: 5,
    '& .MuiButton-text': {
      fontSize: 10
    },
    '&:hover': {
      background: '#177488'
    }
  }
})

const Button = ({ label, icon: Icon, ...props }) => {
  const classes = useStyles()
  return (
    <MaterialButton
      variant='outlined'
      color='primary'
      disableElevation
      startIcon={Icon && <Icon />}
      className={classes.root}
      {...props}
    >
      {label}
    </MaterialButton>
  )
}

export default Button
