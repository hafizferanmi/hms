import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'

import Input from '../../Inputs'
import Button from '../../misc/Button'
import StaffFormSchema from './StaffSchema'
import { STAFF_ROLES_LABEL, STAFF_ROLES } from '../../../constants/staff'
import { buildSelectOptions } from '../../../helpers/misc'

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

const StaffForm = ({ serverFormState, handleFormSubmit, staff, deleteStaffProps }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(StaffFormSchema),
    defaultValues: staff
  })
  const { isSubmitting } = formState
  const { handleDeleteStaff } = deleteStaffProps
  const { error, message } = serverFormState
  const staffRoleOptions = buildSelectOptions(STAFF_ROLES, STAFF_ROLES_LABEL)
  return (
    <StaffFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        {error && <ErrorMessage>Error occured, try again.</ErrorMessage>}
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <Input.TextInput
          name='name'
          register={register}
          error={errors.name}
          placeholder='Name'
          label='Fullname'
        />
        <Input.TextInput
          name='email'
          type='email'
          label='Email'
          register={register}
          error={errors.email}
          placeholder='Enter email'
        />
        <Input.TextInput
          register={register}
          name='password'
          label='Password'
          type='password'
          error={errors.password}
          placeholder='Enter password'
        />
        <Input.TextInput
          register={register}
          name='phone'
          label='Phone No.'
          error={errors.phone}
          placeholder='Enter phone No.'
        />
        <Input.SelectInput
          register={register}
          name='role'
          label='role'
          options={staffRoleOptions}
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
