import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import Button from '../misc/Button'
import { useNavigate } from '@reach/router'

import Form from '../Form'
import LoginFormSchema from './LoginFormSchema'
import { adminLogin } from '../../helpers/api'
import { setAuthToken } from '../../helpers/auth'

const LoginFormWrapper = styled.form`
  border: 1px solid rgba(0, 102, 245, .15);
  background-color: #fff;
  width: 350px;
  padding: 20px 20px;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 15px 18px rgba(0 ,0 , 0, .03);
  border-radius: 6px;

  p {
    font-size: 15px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`

const Loginform = props => {
  const [error, setError] = useState(null)
  const navigateTo = useNavigate()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(LoginFormSchema)
  })
  const onSubmit = data => {
    adminLogin(data)
      .then((res) => {
        if (res && res.result) {
          setAuthToken(res.result.token)
          navigateTo('/dashboard')
        } else {
          setError('Invalid login credentials.')
        }
      })
      .catch((e) => setError('Error Occured, try again.'))
  }
  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        {error && <div>{error}</div>}
        <Form.TextInput
          label='Email'
          name='email'
          type='email'
          register={register}
          error={!!errors.email}
          placeholder='Enter email'
        />
        <Form.TextInput
          register={register}
          label='Password'
          name='password'
          type='password'
          error={errors.password}
          placeholder='Enter password'
        />
        <Button
          label='Login'
          type='submit'
        />
      </div>
    </LoginFormWrapper>
  )
}

export default Loginform
