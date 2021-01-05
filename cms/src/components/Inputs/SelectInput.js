import React from 'react'
import { useController } from 'react-hook-form'
import ReactSelect from 'react-select'
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

const SelectInput = ({ control, name, error, label, defaultValue, ...props }) => {
  const classes = useStyles()
  const {
    field: { ref, ...inputProps }
  } = useController({
    name,
    control,
    defaultValue
  })

  return (
    <div>
      <div className={classes.inputLabel}>{label}</div>
      <ReactSelect
        defaultValue={{ defaultValue }}
        {...props}
        {...inputProps}
        inputRef={ref}
      />
    </div>
  )
}

export default SelectInput
