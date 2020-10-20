import React from 'react'
import Button from '../misc/Button'

const CreateStaffButton = ({ handleClick }) => {
  return (
    <>
      <Button
        label='Add staff'
        onClick={() => handleClick()}
      />
    </>
  )
}

export default CreateStaffButton
