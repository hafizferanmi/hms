import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import Button from '../misc/Button'

import ErrorMessage from '../misc/ErrorMessage'
import Inputs from '../Inputs'
import LoginFormSchema from './LoginFormSchema'

const LoginFormWrapper = styled.form`
  background-color: rgba(255 ,255 , 255, .7);
  width: 360px;
  padding: 20px 20px;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
`

const Loginform = ({ serverState, submitForm }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(LoginFormSchema)
  })
  const { isSubmitting } = formState
  const { message, serverError } = serverState

  return (
    <LoginFormWrapper onSubmit={handleSubmit(submitForm)}>
      <div>
        <Inputs.TextInput
          name='email'
          type='email'
          label='Email address'
          register={register}
          error={errors.email}
          placeholder='Enter email'
        />
        <Inputs.TextInput
          register={register}
          name='password'
          type='password'
          label='Enter password'
          error={errors.password}
          placeholder='Enter password'
        />
        <div>
          <ErrorMessage
            networkError={serverError}
            message={message}
          />
        </div>
        <Button
          fullWidth
          label='Login'
          type='submit'
          disabled={isSubmitting}
        />
      </div>
    </LoginFormWrapper>
  )
}

export default Loginform
