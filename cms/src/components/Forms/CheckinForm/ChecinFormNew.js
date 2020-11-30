import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  formWrapper: {
    width: '90%',
    margin: '30px auto'
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

const CheckInForm = () => {
  const classes = useStyles()
  const [selected, setSelected] = React.useState(0)
  return (
    <Box display='flex' className={classes.formWrapper} justifyContent='space-between'>
      <Box className={classes.formMenuWrapper}>
        <div onClick={() => setSelected(0)}>Guest information</div>
        <div onClick={() => setSelected(1)}>Guest information</div>
        <div onClick={() => setSelected(2)}>Guest information</div>
        <div onClick={() => setSelected(3)}>Guest information</div>
        <div onClick={() => setSelected(4)}>Guest information</div>
      </Box>
      <Box className={classes.formBox}>
        {selected === 0 && <GuestDetailsForm />}
        {selected === 1 && <GuestNextOfKinForm />}
        {selected === 2 && <GuestPaymentDetailsForm />}
      </Box>
    </Box>
  )
}

const GuestDetailsForm = () => {
  return (
    <div>This is the guest details form</div>
  )
}

const GuestNextOfKinForm = () => {
  return (
    <div>This is the guest next of kin form</div>
  )
}

const GuestPaymentDetailsForm = () => {
  return (
    <div>This is the guest payment details form</div>
  )
}

export default CheckInForm
