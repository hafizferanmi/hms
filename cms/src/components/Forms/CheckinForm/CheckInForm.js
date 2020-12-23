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
  const { error, message } = serverFormState
  return (
    <ChecInFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <FormInputWrapper>
        <div>
          <Input.TextInput
            name='title'
            register={register}
            error={errors.title}
            label='Title'
            autoFocus
          />
          <Input.TextInput
            name='firstName'
            register={register}
            error={errors.firstName}
            label='First Name'
          />
          <Input.TextInput
            name='lastName'
            register={register}
            error={errors.lastName}
            label='Last Name'
          />
        </div>
        <div>
          <Input.TextInput
            name='email'
            type='email'
            register={register}
            error={errors.email}
            label='Guest email'
          />
          <Input.TextInput
            name='phone'
            register={register}
            error={errors.phone}
            label='Guest Phone No.'
          />
        </div>
        <div>
          <Input.TextInput
            name='occupation'
            register={register}
            error={errors.occupation}
            label='Occupation'
          />
          <Input.TextInput
            name='arrivingFrom'
            register={register}
            error={errors.arrivingFrom}
            label='Arriving from'
          />
        </div>
        <div>
          <Input.TextInput
            name='purpose'
            register={register}
            error={errors.purpose}
            label='Purpose'
          />
          <Input.TextInput
            name='meansOfTravel'
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
            register={register}
            error={errors.nextOfKinPhoneNo}
            label='Next of kin Phone No.'
          />
        </div>
        <div>
          <Input.TextInput
            name='dateOfArrival'
            type='date'
            register={register}
            error={errors.dateOfArrival}
            label='Date of arrival'
          />
          <Input.TextInput
            name='dateOfDeparture'
            type='date'
            register={register}
            error={errors.dateOfDeparture}
            label='Date of departure'
          />
        </div>

        <div>
          <Input.TextInput
            name='paymentMethod'
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
