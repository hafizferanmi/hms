import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextInput = ({ register, error, ...props }) => {
  return (
    <TextField
      variant='outlined'
      margin='normal'
      inputRef={register}
      fullWidth
      size='small'
      error={error}
      helperText={error && error.message}
      {...props}
    />
  )
}

export default TextInput
