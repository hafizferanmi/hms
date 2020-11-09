import React from 'react'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import CrossIcon from '@material-ui/icons/HighlightOff'

const DisableStaffButton = ({ staff, onClick }) => {
  const disabled = staff.disabled
  const Button = disabled ? CheckIcon : CrossIcon

  return (
    <Button onClick={onClick} />
  )
}

export default DisableStaffButton
