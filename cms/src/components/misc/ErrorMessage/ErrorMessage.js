import React from 'react'
import styled from 'styled-components'

const ErrorMessageWrapper = styled.ul`
  background-color: red;
  color: blue;
  padding: 5px;

  li {
    list-style-type: none;
    font-weight: bold;
  }
`

const ErrorMessage = ({ message }) => {
  return (
    <ErrorMessageWrapper>
      {message.split(',').map((error, i) => (<li key={i}>{error}</li>))}
    </ErrorMessageWrapper>
  )
}

export default ErrorMessage
