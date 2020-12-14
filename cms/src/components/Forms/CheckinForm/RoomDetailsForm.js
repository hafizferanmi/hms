import React from 'react'
import Input from '../../Inputs'
import { Grid, Box, Button, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Controller } from 'react-hook-form'
import { useNavigate } from '@reach/router'

const useStyles = makeStyles({
  formWrapper: {
    padding: '10px 15px'
  }
})

const RoomDetailsForm = ({ register, errors, control, handleValidateRoomDetails }) => {
  const classes = useStyles()
  const navigateTo = useNavigate()
  const rooms = useSelector(state => state.rooms.data)
  console.log('rooms', rooms)
  const handlePrevButtonClick = () => {
    navigateTo('/secure/admin/checkin/guest-details')
  }
  const emptyRoomsOption = rooms.filter(room => room.status === 'EMPTY').map(room => ({ label: `Room ${room.number}`, value: room._id }))
  console.log({ emptyRoomsOption })

  return (
    <Box className={classes.formWrapper}>
      <h2>Room info.</h2>
      <Grid spacing={2} container>
        <Grid item xs={12} md={12}>
          <Controller
            as={
              <Input.SelectInput
                register={register}
                label='room'
                options={emptyRoomsOption}
                error={errors.room}
              />
            }
            defaultValue=''
            name='room'
            control={control}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='dateOfArrival'
            label='Date of arrival'
            type='date'
            register={register}
            error={errors.dateOfArrival}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='dateOfDeparture'
            label='Date of departure'
            type='date'
            register={register}
            error={errors.dateOfDeparture}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Input.TextInput
            name='note'
            label='Note'
            register={register}
            multiline
            rows={4}
            error={errors.note}
          />
        </Grid>

      </Grid>
      <Box style={{ marginTop: '30px', marginBottom: '20px' }} display='flex' justifyContent='space-between'>
        <div>
          <Button
            variant='outlined'
            color='primary'
            onClick={handlePrevButtonClick}
          >Previous
          </Button>
        </div>
        <div>
          <Button
            variant='outlined'
            color='primary'
            onClick={handleValidateRoomDetails}
          >Next
          </Button>
        </div>
      </Box>
    </Box>
  )
}

export default RoomDetailsForm
