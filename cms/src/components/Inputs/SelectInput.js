import React from 'react'
import TextField from '@material-ui/core/TextField'

const SelectInput = ({ name, register, error, options, ...props }) => {
  const [value, setFieldValue] = React.useState('')

  const handleChange = (event) => {
    setFieldValue(event.target.value)
  }
  return (
    <TextField
      select
      name={name}
      value={value}
      inputRef={register}
      onChange={handleChange}
      error={error}
      fullWidth
      size='small'
      margin='normal'
      helperText={error && error.message}
      variant='outlined'
      {...props}
    >
      {options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
    </TextField>
  )
}

export default SelectInput
