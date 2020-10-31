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

const ErrorMessage = ({ networkError, message }) => {
  const serverMessage = message && message.split('-')
  const networkErrorMessage = networkError && 'Network error occured. Try again.'
  let messages
  if (serverMessage) {
    messages = [...serverMessage, networkErrorMessage]
  } else {
    messages = [networkErrorMessage]
  }

  return (
    <ErrorMessageWrapper>
      {messages.map((message, i) => (<li key={i}>{message}</li>))}
    </ErrorMessageWrapper>
  )
}

export default ErrorMessage
