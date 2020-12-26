import React from 'react'
import FormDrawer from '../misc/FormDrawer'
import useModal from '../../hooks/useModal'
import CheckInForm from '../Forms/CheckinForm'
import ManagersLayout from '../ManagersPage/ManagersLayout'

const LaunchPadPage = () => {
  const modal = useModal()
  const handleOpenDrawer = () => modal.openModal()
  return (
    <ManagersLayout title='Launchpad'>
      <button onClick={handleOpenDrawer}>Open form Drawer</button>
      <FormDrawer
        isOpen={modal.isOpen}
        close={modal.closeModal}
        title='Guest form'
      >
        <CheckInForm />
      </FormDrawer>
    </ManagersLayout>

  )
}

export default LaunchPadPage
