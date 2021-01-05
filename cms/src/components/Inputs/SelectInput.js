import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Controller } from 'react-hook-form'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles({
  inputLabel: {
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.7)',
    textTransform: 'uppercase',
    marginTop: 20,
    fontSize: 10,
    marginBottom: 5
  },
  options: {
    cursor: 'pointer',
    padding: 10,
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.4)',
      color: 'white'
    }
  }
})

const SelectInput = ({ name, control, register, error, options, label, placeholder, ...props }) => {
  const classes = useStyles()
  const [value, setFieldValue] = React.useState('')

  const placeholderData = { label: placeholder || 'Select to choose...', value: '' }

  const handleChange = (event) => {
    setFieldValue(event.target.value)
  }
  return (
    <div>
      <div className={classes.inputLabel}>{label}</div>
      <Controller
        as={
          <TextField
            select
            value={value}
            inputRef={register}
            onChange={handleChange}
            error={error}
            fullWidth
            size='small'
            helperText={error && error.message}
            variant='outlined'
            {...props}
          >
            {[placeholderData, ...options].map(option => <option className={classes.options} value={option.value} key={option.value}>{option.label}</option>)}
          </TextField>
        }
        name='role'
        control={control}
      />
    </div>
  )
}

export default SelectInput
