import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'

import Input from '../../Inputs'
import Button from '../../misc/Button'
import HallSchema from './HallSchema'
import ServerErrorMessage from '../../misc/ErrorMessage'

const HallFormWrapper = styled.form`
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

const HallForm = ({ serverFormState, handleFormSubmit, hall, deleteProps }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(HallSchema),
    defaultValues: hall
  })
  const { isSubmitting } = formState
  const { handleDelete } = deleteProps
  const { error, message } = serverFormState
  const title = hall ? 'Edit Hall' : 'Add hall'
  return (
    <HallFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <p>{title}</p>
        <Input.TextInput
          name='name'
          register={register}
          error={errors.name}
          label='Hall name'
          autoFocus
        />
        <Input.TextInput
          name='price'
          label='Price'
          register={register}
          error={errors.price}
        />
        <Input.TextInput
          name='capacity'
          label='Capacity'
          register={register}
          error={errors.capacity}
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
          {error && <ErrorMessage>Error occured, try again.</ErrorMessage>}
          {message && <ServerErrorMessage message={message} />}
        </div>
        <Button
          label={`${hall ? 'Edit' : 'Add'} hall`}
          type='submit'
          disabled={isSubmitting}
        />
        {hall &&
          <DeleteButton onClick={handleDelete}>
            Delete hall
          </DeleteButton>}

      </div>
    </HallFormWrapper>
  )
}

export default HallForm
