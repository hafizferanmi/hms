import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'

import Form from '../Form'
import Button from '../misc/Button'
import StaffFormSchema from './StaffSchema'

const StaffFormWrapper = styled.form`
  display: flex;
`

const ErrorMessage = styled.div`
  text-align: center;
  color: #DC3545;
`

const DeleteButton = styled.span`
  border: 2px solid whitesmoke;
  padding: 10px 10px;
  border-radius: 20px;
  margin-left: 10px;
  cursor: pointer;
`

const StaffForm = ({ serverFormState, submitForm, staff, deleteStaffProps }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(StaffFormSchema),
    defaultValues: staff
  })
  const { isSubmitting } = formState
  const { handleDeleteStaff } = deleteStaffProps
  const { error, message } = serverFormState
  return (
    <StaffFormWrapper onSubmit={handleSubmit(submitForm)}>
      <div>
        {error && <ErrorMessage>Error occured, try again.</ErrorMessage>}
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <Form.TextInput
          name='name'
          register={register}
          error={errors.name}
          placeholder='Name'
          label='Fullname'
        />
        <Form.TextInput
          name='email'
          type='email'
          label='Email'
          register={register}
          error={errors.email}
          placeholder='Enter email'
        />
        <Form.TextInput
          register={register}
          name='password'
          label='Password'
          type='password'
          error={errors.password}
          placeholder='Enter password'
        />
        <Form.TextInput
          register={register}
          name='phone'
          label='Phone No.'
          error={errors.phone}
          placeholder='Enter phone No.'
        />
        <Form.SelectInput
          register={register}
          name='role'
          label='role'
          options={['GENERAL_MANAGER', 'FRONT_DESK_OFFICER']}
          error={errors.role}
        />
        <Button
          label={`${staff ? 'Edit' : 'Add'} staff`}
          type='submit'
          disabled={isSubmitting}
        />
        {staff &&
          <DeleteButton onClick={handleDeleteStaff}>
            Delete staff
          </DeleteButton>}

      </div>
    </StaffFormWrapper>
  )
}

export default StaffForm
