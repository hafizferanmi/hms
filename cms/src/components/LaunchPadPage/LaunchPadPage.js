import React from 'react'
import FormDrawer from '../misc/FormDrawer'
import useModal from '../../hooks/useModal'
import CheckInForm from '../Forms/CheckinForm'
import ManagersLayout from '../ManagersPage/ManagersLayout'

const LaunchPadPage = () => {
  const modal = useModal()
  const handleOpenDrawer = () => modal.openModal()
  const handleCloseDrawer = () => modal.closeModal()
  return (
    <ManagersLayout title='Launchpad'>
      <button onClick={handleOpenDrawer}>Open form Drawer</button>
      <FormDrawer
        isOpen={modal.isOpen}
        close={modal.closeModal}
        title='Guest form'
      >
        <CheckInForm closeDrawer={handleCloseDrawer} />
      </FormDrawer>
    </ManagersLayout>

  )
}

export default LaunchPadPage
