import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'

import Input from '../../Inputs'
import Button from '../../misc/Button'
import ErrorMessage from '../../misc/ErrorMessage'
import CheckInSchema from './CheckInSchema'

const useStyles = makeStyles({
  formWrapper: {
    width: '70%',
    margin: '50px auto'
  },
  formMenuWrapper: {
    width: '20%',
    '& > div': {
      cursor: 'pointer',
      padding: 5
    }
  },
  formBox: {
    background: 'white',
    width: '75%'
  }
})

const CheckInForm = ({ serverFormState, handleFormSubmit, checkIn }) => {
  const classes = useStyles()
  const [selected, setSelected] = React.useState(0)

  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(CheckInSchema),
    defaultValues: checkIn
  })
  const { isSubmitting } = formState
  // const { handleDeleteRoomType } = deleteRoomTypeProps
  const { error, message } = serverFormState
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Box display='flex' className={classes.formWrapper} justifyContent='space-between'>
        <Box className={classes.formMenuWrapper}>
          <div onClick={() => setSelected(0)}>Guest Details</div>
          <div onClick={() => setSelected(1)}>Next of kin</div>
          <div onClick={() => setSelected(2)}>Room info</div>
          <div onClick={() => setSelected(3)}>Payment Details</div>
          <div onClick={() => setSelected(4)}>View full info</div>
        </Box>
        <Box className={classes.formBox}>
          {selected === 0 && <GuestDetailsForm register={register} errors={errors} />}
          {selected === 1 && <GuestNextOfKinForm register={register} errors={errors} />}
          {selected === 2 && <GuestPaymentDetailsForm register={register} errors={errors} />}
        </Box>
      </Box>

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
    </form>

  )
}

const GuestDetailsForm = ({ register, errors }) => {
  React.useEffect(() => {
    console.log('ade')

    return () => console.log('Unmounted')
  })
  return (
    <>
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
    </>
  )
}

const GuestNextOfKinForm = ({ errors, register }) => {
  return (
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
  )
}

const GuestPaymentDetailsForm = ({ register, errors }) => {
  return (
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
  )
}

export default CheckInForm
