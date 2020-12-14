import React from 'react'
import Input from '../../Inputs'
import { Grid, Box, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  formWrapper: {
    padding: '10px 15px'
  }
})

const GusetPaymentForm = ({ register, errors, setSelected }) => {
  const classes = useStyles()
  return (
    <Box className={classes.formWrapper}>
      <h2>Payment info.</h2>
      <Grid spacing={2} container>
        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='paymentMethod'
            required
            register={register}
            error={errors.paymentMethod}
            label='Payment method'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input.TextInput
            name='ammountPaid'
            label='Ammount paid'
            register={register}
            error={errors.ammountPaid}
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
            onClick={() => setSelected(0)}
          >Previous
          </Button>
        </div>
        <div>
          <Button
            variant='outlined'
            color='primary'
            onClick={() => setSelected(2)}
          >Next
          </Button>
        </div>
      </Box>
    </Box>
  )
}

export default GusetPaymentForm
