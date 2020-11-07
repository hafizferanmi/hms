import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'

import Input from '../../Inputs'
import Button from '../../misc/Button'
import ErrorMessage from '../../misc/ErrorMessage'
import CheckInSchema from './CheckInSchema'

const ChecInFormWrapper = styled.form`
  width: 100%;
`
const FormInputWrapper = styled.div`
  > div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    > div {
      width: 48%;
    }
  }
`

const CheckInForm = ({ serverFormState, handleFormSubmit, checkIn }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(CheckInSchema),
    defaultValues: checkIn
  })
  const { isSubmitting } = formState
  // const { handleDeleteRoomType } = deleteRoomTypeProps
  const { error, message } = serverFormState
  return (
    <ChecInFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <h3>New checkIn</h3>
      <FormInputWrapper>
        <div>
          <Input.TextInput
            name='title'
            required
            register={register}
            error={errors.title}
            label='Title'
            autoFocus
          />
          <Input.TextInput
            name='name'
            required
            register={register}
            error={errors.name}
            label='Guest name'
          />
        </div>
        <div>
          <Input.TextInput
            name='email'
            type='email'
            required
            register={register}
            error={errors.email}
            label='Guest email'
          />
          <Input.TextInput
            name='phone'
            required
            register={register}
            error={errors.phone}
            label='Guest Phone No.'
          />
        </div>
        <div>
          <Input.TextInput
            name='occupation'
            register={register}
            required
            error={errors.occupation}
            label='Occupation'
          />
          <Input.TextInput
            name='arrivingFrom'
            required
            register={register}
            error={errors.arrivingFrom}
            label='Arriving from'
          />
        </div>
        <div>
          <Input.TextInput
            name='purpose'
            required
            register={register}
            error={errors.purpose}
            label='Purpose'
          />
          <Input.TextInput
            name='meansOfTravel'
            required
            register={register}
            error={errors.meansOfTravel}
            label='Means of travel'
          />
        </div>

        <div>
          <Input.TextInput
            name='nextOfKin'
            register={register}
            error={errors.nextOfKin}
            label='Next of kin'
          />
          <Input.TextInput
            name='nextOfKinPhoneNo'
            required
            register={register}
            error={errors.nextOfKinPhoneNo}
            label='Next of kin Phone No.'
          />
        </div>
        <div>
          <Input.TextInput
            name='dateOfArrival'
            required
            type='date'
            register={register}
            error={errors.dateOfArrival}
            label='Date of arrival'
          />
          <Input.TextInput
            name='dateOfDeparture'
            required
            type='date'
            register={register}
            error={errors.dateOfDeparture}
            label='Date of departure'
          />
        </div>

        <div>
          <Input.TextInput
            name='paymentMethod'
            required
            register={register}
            error={errors.paymentMethod}
            label='Payment method'
          />
          <Input.TextInput
            name='note'
            label='Note'
            register={register}
            multiline
            rows={4}
            error={errors.note}
          />
        </div>
        <Input.TextInput
          name='room'
          required
          register={register}
          error={errors.room}
          label='Room'
        />
        <div>
          <ErrorMessage
            networkError={error}
            message={message}
          />
        </div>
        <Button
          label={`${checkIn ? 'Edit' : 'Add'} CheckIn`}
          type='submit'
          disabled={isSubmitting}
        />
      </FormInputWrapper>
    </ChecInFormWrapper>
  )
}

export default CheckInForm
