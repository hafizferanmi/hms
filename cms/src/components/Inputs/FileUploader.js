import React from 'react'
import { TextField } from '@material-ui/core'
import { useController } from 'react-hook-form'

export const FileUploader = ({ control, name }) => {
  const {
    field: { ref, ...inputProps }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: ''
  })

  console.log({ inputProps })

  return <TextField {...inputProps} inputRef={ref} />
}
