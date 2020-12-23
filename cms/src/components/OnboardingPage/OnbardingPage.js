import React from 'react'
import FormDrawer from '../misc/FormDrawer'
import useModal from '../../hooks/useModal'
import CheckInForm from '../Forms/CheckinForm'

const OnbardingPage = () => {
  const modal = useModal()
  const handleOpenDrawer = () => modal.openModal()
  return (
    <>
      <button onClick={handleOpenDrawer}>Open form Drawer</button>
      <FormDrawer
        isOpen={modal.isOpen}
        close={modal.closeModal}
        title='Guest form'
      >
        <CheckInForm />
      </FormDrawer>
    </>

  )
}

export default OnbardingPage
