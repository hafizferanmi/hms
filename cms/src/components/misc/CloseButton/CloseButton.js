import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Close as CloseIcon } from '@material-ui/icons'
import cn from 'clsx'

const useStyles = makeStyles((theme) => ({
  cancelButton: {
    cursor: 'pointer',
    padding: 5,
    borderRadius: '50%',
    border: '1px solid #9baabd',
    color: '#9baabd',
    background: '#f6f9fd'
  }
}))

const CloseButton = ({ className, onClick }) => {
  const styles = useStyles()
  return (
    <CloseIcon onClick={onClick} className={cn(styles.cancelButton, className)} />
  )
}

export default CloseButton
