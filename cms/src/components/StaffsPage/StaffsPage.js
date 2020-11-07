import React from 'react'
import CreateStaffButton from './CreateStaffButton'
import StaffsTable from './StaffTable'
import useModal from '../../hooks/useModal'
import Modal from '../misc/Modal'
import StaffForm from '../Forms/StaffForm'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

const StaffsPage = ({ staffs }) => {
  const classes = useStyles()
  const { isOpen, openModal, closeModal, data: staff } = useModal()
  const handleOpen = (data) => openModal(data)
  const handleClose = () => closeModal()
  return (
    <>
      <Box className={classes.boxContainer}>
        <Typography variant='h4' color='textSecondary'>
          Our company staffs
        </Typography>
        <CreateStaffButton handleClick={handleOpen} />
      </Box>
      <div>
        {staffs.length ? (
          <StaffsTable
            staffs={staffs}
            handleOpen={handleOpen}
          />
        ) : <div>You have not added any staff yet.</div>}
      </div>
      <Modal
        open={isOpen}
        handleClose={handleClose}
        size='md'
      >
        <StaffForm staff={staff} closeModal={handleClose} />
      </Modal>
    </>
  )
}

export default StaffsPage
