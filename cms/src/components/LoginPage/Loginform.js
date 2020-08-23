import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import Button from '../misc/Button'

import Form from '../Form'
import LoginFormSchema from './LoginFormSchema'

const LoginFormWrapper = styled.form`
  border: 1px solid rgba(0, 102, 245, .5);
  background-color: rgba(0 ,0 , 0, .7);
  width: 360px;
  padding: 20px 20px;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  p {
    font-size: 15px;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  input {
    background: transparent;
    border-radius: 10px;
    color: white;
    border: 1px solid white;
    border-radius: 30px;
    padding-left: 20px;

    :nth-child(1) {
      margin: 30px 0;
    }
    
    ::placeholder {
      color: rgba(255 ,255 , 255, .7);
    }
  }

  button {
    width: 100%;
  }
`

const ErrorMessage = styled.div`
  text-align: center;
  color: red;
`

const Loginform = ({ error, submitForm, loading, message }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(LoginFormSchema)
  })
  const { isSubmitting } = formState

  return (
    <LoginFormWrapper onSubmit={handleSubmit(submitForm)}>
      <div>
        {error && <ErrorMessage>Error occured, try again.</ErrorMessage>}
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <Form.TextInput
          name='email'
          type='email'
          register={register}
          error={errors.email}
          placeholder='Enter email'
        />
        <Form.TextInput
          register={register}
          name='password'
          type='password'
          error={errors.password}
          placeholder='Enter password'
        />
        <Button
          label='Login'
          type='submit'
          disabled={isSubmitting}
        />
      </div>
    </LoginFormWrapper>
  )
}

export default Loginform
