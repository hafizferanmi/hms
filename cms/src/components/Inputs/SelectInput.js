import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  margin-bottom: 10px;
`
const Select = styled.select`
  border: none;
  outline: none;
  padding: 10px;
  display: block;
  background: #edf2f7;
  border-radius: 0.25rem;
  width: 100%;
  font-size: 12px;
`

const InputLabel = styled.label`
  font-size: 12px;
  margin: 0;
`

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`

const SelectInput = ({ label, register, name, error, options, ...props }) => {
  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        ref={register}
        name={name}
        {...props}
      >
        {options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
      </Select>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputWrapper>
  )
}

export default SelectInput
