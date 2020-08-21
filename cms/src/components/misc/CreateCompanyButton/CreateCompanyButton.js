import React, { useState } from 'react'
import Modal from '../Modal'
import CompanyForm from '../../CompanyForm'
import Button from '../Button'

const CreateCompanyButton = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Button
        label='Add company'
        onClick={handleOpen}
      />
      <Modal
        open={open}
        title='Create new company'
        handleClose={handleClose}
      >
        <CompanyForm closeModal={handleClose} />
      </Modal>
    </>
  )
}

export default CreateCompanyButton
