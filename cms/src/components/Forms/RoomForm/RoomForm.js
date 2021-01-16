import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'

import Input from '../../Inputs'
import Button from '../../misc/Button'
import RoomSchema from './RoomSchema'
import ErrorMessage from '../../misc/ErrorMessage'

const RoomForm = ({ serverFormState, handleFormSubmit, room }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(RoomSchema),
    defaultValues: room
  })

  const { isSubmitting } = formState
  const { error, message } = serverFormState
  const title = room && room._id ? 'Edit Room' : 'Add Room'
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
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
        <div>
          <ErrorMessage
            networkError={error}
            message={message}
          />
        </div>
        <Button
          label={`${room && room._id ? 'Edit' : 'Add'} Room`}
          type='submit'
          disabled={isSubmitting}
        />
      </div>

    </form>
  )
}

export default RoomForm
