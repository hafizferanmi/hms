import React from 'react'
import Form from '../Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import CompanySchema from './CompanyFormSchema'
import Button from '../misc/Button'

const CompanyForm = ({ error, loading, data, company, submitForm }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(CompanySchema)
  })
  const { isSubmitting } = formState
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <div>{error}</div>}
      <Form.TextInput
        name='company'
        placeholder='Company'
        label='Company Name'
        register={register}
        error={errors.company}
      />
      <Form.TextInput
        name='subdomain'
        placeholder='Subdomain'
        label='Company Subdomain'
        register={register}
        error={errors.subdomain}
      />
      <Form.TextInput
        name='manager'
        placeholder='Managers name'
        label='Managers name'
        register={register}
        error={errors.manager}
      />
      <Form.TextInput
        name='email'
        placeholder='Email'
        label='Managers Email'
        register={register}
        error={errors.email}
      />
      <Form.TextInput
        name='password'
        placeholder='Password'
        label='Managers Password'
        register={register}
        error={errors.password}
      />
      <Button
        label='Add company'
        disabled={isSubmitting}
        type='submit'
      />
    </form>
  )
}

export default CompanyForm
