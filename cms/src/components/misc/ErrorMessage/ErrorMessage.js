import React from 'react'
import styled from 'styled-components'

const ErrorMessageWrapper = styled.ul`
  color: rgba(214, 10, 46);
  padding: 5px;
  margin-bottom: 0;

  li {
    list-style-type: none;
    font-size: 13px;
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
