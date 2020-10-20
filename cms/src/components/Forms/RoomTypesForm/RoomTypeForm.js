import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'

import Input from '../../Inputs'
import Button from '../../misc/Button'
import RoomTypeSchema from './RoomTypeSchema'

const RoomTypeFormWrapper = styled.form`
  display: flex;
`

const ErrorMessage = styled.div`
  text-align: center;
  color: #DC3545;
`

const DeleteButton = styled.span`
  border: 2px solid whitesmoke;
  padding: 5px 5px;
  font-size: 10px;
  border-radius: 20px;
  margin-left: 10px;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  width: fit-content;
`

const RoomTypeForm = ({ serverFormState, handleFormSubmit, roomType, deleteRoomTypeProps }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(RoomTypeSchema),
    defaultValues: roomType
  })
  const { isSubmitting } = formState
  const { handleDeleteRoomType } = deleteRoomTypeProps
  const { error, message } = serverFormState
  const title = roomType ? 'Edit room type' : 'Add room type'
  return (
    <RoomTypeFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <p>{title}</p>
        <Input.TextInput
          name='name'
          register={register}
          error={errors.name}
          label='Type name'
          autoFocus
        />
        <Input.TextInput
          name='price'
          label='Price'
          register={register}
          error={errors.price}
        />
        <Input.TextInput
          name='desc'
          label='Description'
          register={register}
          multiline
          rows={4}
          error={errors.desc}
        />
        {error && <ErrorMessage>Error occured, try again.</ErrorMessage>}
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <Button
          label={`${roomType ? 'Edit' : 'Add'} Room Type`}
          type='submit'
          disabled={isSubmitting}
        />
        {roomType &&
          <DeleteButton onClick={handleDeleteRoomType}>
            Delete room type
          </DeleteButton>}

      </div>
    </RoomTypeFormWrapper>
  )
}

export default RoomTypeForm
