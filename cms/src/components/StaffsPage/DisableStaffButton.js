import React from 'react'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import CrossIcon from '@material-ui/icons/HighlightOff'

const DisableStaffButton = ({ staff, onClick }) => {
  const disabled = staff.disabled
  const Component = disabled ? CheckIcon : CrossIcon

  return (
    <div>
      <Component onClick={onClick} />
    </div>
  )
}

export default DisableStaffButton
