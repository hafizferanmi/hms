import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  fileUploadLabel: {
    background: 'rgba(0, 0, 0, .3)',
    color: 'white',
    width: '100%',
    padding: '10px 5px'
  },
  inputLabel: {
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.7)',
    textTransform: 'uppercase',
    marginTop: 20,
    fontSize: 10,
    marginBottom: 5
  },
  fileInput: {
    display: 'none'
  }
})

export const FileUploader = ({ register, name, label }) => {
  const classes = useStyles()

  return (
    <>
      <label htmlFor='file' className={classes.inputLabel}>
        {label}
      </label>
      <input type='file' id='file' name={name} ref={register} />
    </>
  )
}
