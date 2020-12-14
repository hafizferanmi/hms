import React from 'react'
import Input from '../../Inputs'
import { makeStyles, Grid, Box, Button } from '@material-ui/core'
import { GUEST_TITLE, GUEST_TITLE_LABEL } from '../../../constants/guest'
import { buildSelectOptions } from '../../../helpers/misc'

const useStyles = makeStyles({
  formWrapper: {
    padding: '10px 15px'
  }
})

const GuestDetailsForm = ({ register, errors, handleValidateClientDetails, ...props }) => {
  const classes = useStyles()
  return (
    <Box className={classes.formWrapper}>
      <h2>Guest Details</h2>
      <Grid spacing={2} container>
        <Grid item xs={12} md={2}>
          <Input.SelectInput
            name='title'
            options={buildSelectOptions(GUEST_TITLE, GUEST_TITLE_LABEL)}
            register={register}
            error={errors.title}
            label='Title'
            autoFocus
          />
        </Grid>
        <Grid item x2={12} md={5}>
          <Input.TextInput
            name='firstName'
            register={register}
            error={errors.firstName}
            label='First name'
          />
        </Grid>
        <Grid item x2={12} md={5}>
          <Input.TextInput
            name='lastName'
            register={register}
            error={errors.lastName}
            label='Last name'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='email'
            type='email'
            register={register}
            error={errors.email}
            label='Guest email'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='phone'
            register={register}
            error={errors.phone}
            label='Guest Phone No.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='occupation'
            register={register}
            error={errors.occupation}
            label='Occupation'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='purpose'
            register={register}
            error={errors.purpose}
            label='Purpose'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='meansOfTravel'
            register={register}
            error={errors.meansOfTravel}
            label='Means of travel'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='arrivingFrom'
            register={register}
            error={errors.arrivingFrom}
            label='Arriving from'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='nextOfKin'
            register={register}
            error={errors.nextOfKin}
            label='Next of kin'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='nextOfKinPhoneNo'
            register={register}
            error={errors.nextOfKinPhoneNo}
            label='Next of kin Phone No.'
          />
        </Grid>
      </Grid>
      <Box style={{ marginTop: '30px', marginBottom: '20px' }} display='flex' justifyContent='space-between'>
        <div />
        <div>
          <Button
            variant='outlined'
            color='primary'
            onClick={handleValidateClientDetails}
          >Next
          </Button>
        </div>
      </Box>
    </Box>
  )
}

export default GuestDetailsForm
