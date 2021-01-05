import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'

import Input from '../../Inputs'
import Button from '../../misc/Button'
import ErrorMessage from '../../misc/ErrorMessage'
import CheckInSchema from './CheckInSchema'
import { GUEST_TITLE, GUEST_TITLE_LABEL, NEXT_OF_KIN_RELATIONSHIP, NEXT_OF_KIN_RELATIONSHIP_LABEL, MEANS_OF_TRAVEL, MEANS_OF_TRAVEL_LABEL } from '../../../constants/guest'
import { buildSelectOptions } from '../../../helpers/misc'
import { makeStyles, Box } from '@material-ui/core'
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined'

const useStyles = makeStyles({
  topDetailsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > div': {
      flexBasis: '38%'
    },
    '& > div:first-child': {
      flexBasis: '20%'
    }
  },
  detailsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& > div': {
      flexBasis: '48%'
    }
  },
  formSeperator: {
    marginTop: 40,
    position: 'relative',
    background: '#f6f9fd',
    padding: '10px 0',
    textTransform: 'uppercase'
  }
})

const CheckInForm = ({ serverFormState, handleFormSubmit, checkIn }) => {
  const { register, handleSubmit, errors, formState, control } = useForm({
    resolver: yupResolver(CheckInSchema),
    defaultValues: checkIn
  })
  const { isSubmitting } = formState
  const { error, message } = serverFormState
  const classes = useStyles()
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <p>Guest details</p>
      <Box className={classes.topDetailsWrapper}>
        <Input.SelectInput
          name='title'
          options={buildSelectOptions(GUEST_TITLE, GUEST_TITLE_LABEL)}
          control={control}
          error={errors.title}
          register={register}
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
      </Box>
      <div className={classes.detailsWrapper}>
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
        <Input.TextInput
          name='occupation'
          register={register}
          error={errors.occupation}
          label='Occupation'
        />
      </div>

      <p className={classes.formSeperator}>Next of kin details</p>
      <div className={classes.detailsWrapper}>
        <Input.TextInput
          name='nextOfKin'
          register={register}
          error={errors.nextOfKin}
          label='Next of kin name'
        />
        <Input.TextInput
          name='nextOfKinPhoneNo'
          register={register}
          error={errors.nextOfKinPhoneNo}
          label='Next of kin Phone No.'
        />
        <Input.TextInput
          name='nextOfKinEmail'
          register={register}
          error={errors.nextOfKinEmail}
          label='Next of kin email address'
        />
        <Input.SelectInput
          name='nextOfKinRelationship'
          options={buildSelectOptions(NEXT_OF_KIN_RELATIONSHIP, NEXT_OF_KIN_RELATIONSHIP_LABEL)}
          control={control}
          error={errors.nextOfKinRelationship}
          register={register}
          label='Next of kin relationship'
          placeholde='Select next of kin relationship'
        />
      </div>

      <p className={classes.formSeperator}>Others</p>
      <div className={classes.detailsWrapper}>
        <Input.TextInput
          name='purpose'
          register={register}
          error={errors.purpose}
          label='Purpose of visit'
        />
        <Input.SelectInput
          name='meansOfTravel'
          control={control}
          options={buildSelectOptions(MEANS_OF_TRAVEL, MEANS_OF_TRAVEL_LABEL)}
          error={errors.meansOfTravel}
          label='Means of travel'
          placeholder='Select means of travel'
        />
        <Input.TextInput
          name='arrivingFrom'
          register={register}
          error={errors.arrivingFrom}
          label='Arriving from'
        />
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
          name='note'
          label='Note'
          register={register}
          multiline
          rows={4}
          error={errors.note}
        />
      </div>
      <Input.SelectInput
        name='room'
        control={control}
        register={register}
        options={buildSelectOptions(GUEST_TITLE, GUEST_TITLE_LABEL)}
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
        icon={SaveOutlinedIcon}
        label='save'
        // label={`${checkIn ? 'Edit' : 'Add'} CheckIn`}
        type='submit'
        disabled={isSubmitting}
      />

      {/* Todo : Add save and add new button */}
    </form>
  )
}

export default CheckInForm
