import React from 'react'
import Button from '../misc/Button'

const CreateRoomTypesButton = ({ handleClick }) => {
  return (
    <Button
      label='Add RoomType'
      onClick={() => handleClick()}
    />
  )
}

export default CreateRoomTypesButton
