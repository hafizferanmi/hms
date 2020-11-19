import React from 'react'
import PageLayout from '../ManagersPage/ManagersLayout'
import StaffsTable from './StaffTable'
import useModal from '../../hooks/useModal'
import Modal from '../misc/Modal'
import StaffForm from '../Forms/StaffForm'
import { makeStyles } from '@material-ui/core/styles'
import { SearchOutlined, Add as PlusIcon } from '@material-ui/icons'
import Button from '../misc/Button'
import Pagination from './Pagination'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  pageWrapper: {
    background: 'white',
    borderRadius: 5
  },
  pageTopWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 40px'
  },
  searchBox: {
    display: 'flex',
    '& svg': {
      color: '#b5c0d0',
      marginTop: 5
    },
    '& input': {
      padding: 5,
      outline: 0,
      border: 0,
      fontSize: 18,
      '&::placeholder': {
        color: '#b5c0d0'
      }
    }
  }
}))

const StaffsPage = ({ staffs }) => {
  const classes = useStyles()
  const { isOpen, openModal, closeModal, data: staff } = useModal()
  const openStaffFormModal = (data) => openModal(data)
  const closeStaffFormModal = () => closeModal()
  return (
    <PageLayout title='staffs'>
      <div className={classes.pageWrapper}>
        <div className={classes.pageTopWrapper}>
          <div className={classes.searchBox}>
            <SearchOutlined />
            <input type='text' name='search' placeholder='search staffs' />
          </div>
          <div className={classes.button}>
            <Button
              label='Add staff'
              endIcon={<PlusIcon />}
              onClick={() => openStaffFormModal()}
            />
          </div>
        </div>
        {staffs.length ? (
          <StaffsTable
            staffs={staffs}
            handleOpen={openStaffFormModal}
          />
        ) : <div>You have not added any staff yet.</div>}
      </div>
      <Modal
        open={isOpen}
        handleClose={closeStaffFormModal}
        size='md'
      >
        <StaffForm staff={staff} closeModal={closeStaffFormModal} />
      </Modal>
      <Pagination />
    </PageLayout>
  )
}

export default StaffsPage
