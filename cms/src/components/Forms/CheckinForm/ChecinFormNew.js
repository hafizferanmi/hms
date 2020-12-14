import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import cn from 'clsx'
import { Router, useNavigate } from '@reach/router'

import Button from '../../misc/Button'
import ErrorMessage from '../../misc/ErrorMessage'
import CheckInSchema from './CheckInSchema'
import GuestDetailsForm from './GuestDetailsForm'
import RoomDetailsForm from './RoomDetailsForm'

const useStyles = makeStyles({
  formWrapper: {
    width: '70%',
    margin: '30px auto'
  },
  formMenuWrapper: {
    width: '30%',
    marginTop: 30,
    marginRight: 10,
    '& > div': {
      cursor: 'pointer',
      padding: 5,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    }
  },
  activeMenu: {
    fontWeight: 'bold',
    color: 'red',
    textTransform: 'uppercase'
  },
  formBox: {
    width: '95%',
    background: 'white'
  }
})

const CheckInForm = ({ serverFormState, handleFormSubmit, checkIn }) => {
  const classes = useStyles()
  const navigateTo = useNavigate()

  const { register, handleSubmit, errors, formState, trigger, control } = useForm({
    resolver: yupResolver(CheckInSchema),
    defaultValues: checkIn
  })
  const { isSubmitting } = formState
  const { error, message } = serverFormState

  const handleValidateClientDetails = async () => {
    const clientDetailsValid = await trigger(['title', 'firstName', 'lastName', 'email', 'phone', 'occupation', 'arrivingFrom', 'purpose', 'meansOfTravel', 'nextOfKin', 'nextOfKinPhoneNo'])
    if (clientDetailsValid) navigateTo('/secure/admin/checkin/room-details')
  }

  const handleValidateRoomDetails = async () => {
    const roomDetailsValid = await trigger(['room', 'dateOfArrival', 'dateOfDeparture', 'note'])
    if (roomDetailsValid) handleSubmit(handleFormSubmit)
  }
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Box display='flex' className={classes.formWrapper} justifyContent='space-between'>
        <Grid className={classes.formMenuWrapper}>
          <div className={cn(classes.activeMenu)}>Guest information</div>
          <div className={cn(classes.activeMenu)}>Payment info</div>
          <div className={cn(classes.activeMenu)}>ID </div>
        </Grid>
        <Grid item xs={8} md={8} className={classes.formBox}>
          <Router>
            <GuestDetailsForm
              path='/guest-details'
              handleValidateClientDetails={handleValidateClientDetails}
              register={register}
              errors={errors}
            />
            <RoomDetailsForm
              path='/room-details'
              handleValidateRoomDetails={handleValidateRoomDetails}
              register={register}
              errors={errors}
              control={control}
            />
          </Router>
        </Grid>
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

export default CheckInForm
