import React from 'react'
import MaterialButton from '@material-ui/core/Button'

const Button = ({ label, ...props }) => {
  return (
    <MaterialButton
      variant='contained'
      color='primary'
      {...props}
    >
      {label}
    </MaterialButton>
  )
}

export default Button
