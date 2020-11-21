import React from 'react'

const CheckInDesc = ({ checkIn }) => {
  return (
    <div>
      {checkIn && checkIn.name}
    </div>
  )
}

export default CheckInDesc
