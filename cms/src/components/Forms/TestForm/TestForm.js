import React from 'react'
import Input from '../../Inputs'
import Button from '../../misc/Button'
import { useForm } from 'react-hook-form'
import { groupCodeWithCountry, buildFromArrayOfObject } from '../../../helpers/misc'

const FunnyForm = () => {
  const { handleSubmit, errors, formState, control, register } = useForm()
  const { isSubmitting } = formState
  // const { error, message } = serverFormState

  const handleFormSubmit = (data) => console.log({ data })

  const options = buildFromArrayOfObject(groupCodeWithCountry(), 'country', 'countryCode')

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input.FileUploader
        name='firstName'
        register={register}
        error={errors.firstName}
        label='First Name'
      />
      <Input.SelectInput
        control={control}
        name='lastName'
        options={options}
        error={errors.lastName}
        label='Last Name'
      />
      <Button
        label='Submit'
        type='submit'
        disabled={isSubmitting}
      />
    </form>
  )
}

export default FunnyForm
