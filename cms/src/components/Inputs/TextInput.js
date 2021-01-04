import React from 'react'
import TextField from '@material-ui/core/TextField'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles({
  inputLabel: {
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.7)',
    textTransform: 'uppercase',
    marginTop: 20,
    fontSize: 10,
    marginBottom: 5
  }
})

const TextInput = ({ register, error, label, ...props }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.inputLabel}>{label}</div>
      <TextField
        variant='outlined'
        inputRef={register}
        fullWidth
        size='small'
        error={!!error}
        placeholder={label}
        helperText={error && error.message}
        {...props}
      />
    </>
  )
}

export default TextInput
