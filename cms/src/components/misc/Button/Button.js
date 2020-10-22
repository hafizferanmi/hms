import React from 'react'
import styled from 'styled-components'
import MaterialButton from '@material-ui/core/Button'

const StyledButton = styled(MaterialButton)`
  box-shadow: none;
  border-radius: 20px;
`

const Button = ({ label, ...props }) => {
  return (
    <StyledButton
      variant='outlined'
      color='primary'
      {...props}
    >
      {label}
    </StyledButton>
  )
}

export default Button
