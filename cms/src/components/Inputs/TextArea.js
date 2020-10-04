import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  margin-bottom: 10px;
`
const StyledTextArea = styled.textarea`
  border: none;
  outline: none;
  padding: 10px;
  display: block;
  background: #edf2f7;
  border-radius: 0.25rem;
  width: 100%;
`

const InputLabel = styled.label`
  font-size: 12px;
  margin: 0;
`
const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`

const TextInput = ({ label, register, name, error, type = 'text', ...props }) => {
  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledTextArea
        type={type}
        ref={register}
        name={name}
        {...props}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputWrapper>
  )
}

export default TextInput
