import React from 'react'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
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

const StaffForm = ({ serverFormState, handleFormSubmit, staff }) => {
  const { register, handleSubmit, errors, formState, control } = useForm({
    resolver: yupResolver(StaffFormSchema),
    defaultValues: staff
  })
  const { isSubmitting } = formState
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
          label='Name'
          autoFocus
          required
        />
        <Input.TextInput
          name='email'
          type='email'
          label='Email'
          register={register}
          error={errors.email}
          required
        />
        <Input.TextInput
          register={register}
          name='password'
          label='Password'
          type='password'
          error={errors.password}
          required
        />
        <Input.TextInput
          register={register}
          name='phone'
          label='Phone No.'
          error={errors.phone}
          required
        />
        <Controller
          as={
            <Input.SelectInput
              register={register}
              label='Staff Role'
              options={staffRoleOptions}
              error={errors.role}
            />
          }
          name='role'
          control={control}
        />
        <Button
          label={`${staff ? 'Edit' : 'Add'} staff`}
          type='submit'
          disabled={isSubmitting}
        />
      </div>
    </StaffFormWrapper>
  )
}

export default StaffForm
