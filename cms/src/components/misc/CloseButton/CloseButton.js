import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Close as CloseIcon } from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'
import cn from 'clsx'

const useStyles = makeStyles((theme) => ({
  cancelButton: {
    cursor: 'pointer',
    padding: 5,
    borderRadius: '50%',
    background: grey[100],
    color: grey[500],
    '&:hover': {
      background: grey[300],
      color: grey[800]
    }
  }
}))

const CloseButton = ({ className, onClick }) => {
  const styles = useStyles()
  return (
    <CloseIcon onClick={onClick} className={cn(styles.cancelButton, className)} />
  )
}

export default CloseButton
