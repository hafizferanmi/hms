import React from 'react'
import CheckinForm from '../Forms/CheckinForm'
import ManagersLayout from '../ManagersPage/ManagersLayout'

const CheckinFormPage = ({ checkIn }) => {
  return (
    <ManagersLayout title='New guest'>
      <CheckinForm checkIn={checkIn} />
    </ManagersLayout>
  )
}

export default CheckinFormPage
