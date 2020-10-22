import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'

import Input from '../../Inputs'
import Button from '../../misc/Button'
import RoomSchema from './RoomSchema'
import ServerErrorMessage from '../../misc/ErrorMessage'

const RoomFormWrapper = styled.form``

const ErrorMessage = styled.div`
  color: #DC3545;
`

const RoomForm = ({ serverFormState, handleFormSubmit, room }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(RoomSchema),
    defaultValues: room
  })

  const { isSubmitting } = formState
  const { error, message, success } = serverFormState
  const title = room && room._id ? 'Edit Room' : 'Add Room'
  return (
    <RoomFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <p>{title}</p>
        <Input.TextInput
          name='roomNumber'
          register={register}
          error={errors.roomNumber}
          label='Room number'
          autoFocus
        />
        <Input.TextInput
          name='desc'
          label='Description'
          register={register}
          multiline
          rows={4}
          error={errors.desc}
        />
        <Input.TextInput
          name='roomType'
          label='Room type'
          register={register}
          error={errors.roomType}
        />
        <div>
          {error && <ErrorMessage>Error occured, try again.</ErrorMessage>}
          {message && !success && <ServerErrorMessage message={message} />}
        </div>
        <Button
          label={`${room && room._id ? 'Edit' : 'Add'} Room`}
          type='submit'
          disabled={isSubmitting}
        />
      </div>

    </RoomFormWrapper>
  )
}

export default RoomForm
