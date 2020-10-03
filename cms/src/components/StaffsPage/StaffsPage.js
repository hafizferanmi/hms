import React from 'react'
import styled from 'styled-components'
import ManagersPage from '../ManagersPage'
import CreateStaffButton from './CreateStaffButton'
import useModal from '../../hooks/useModal'
import Modal from '../misc/Modal'
import StaffForm from '../StaffForm'

const PageTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TableWrapper = styled.table`
  margin-top: 20px;
`

const tableHeaders = ['Name', 'Email', 'Phone No', 'Role', 'Active', '...']

const StaffsTable = ({ staffs }) => {
  const { isOpen, openModal, closeModal, data } = useModal()
  return (
    <TableWrapper className='table table-bordered'>
      <thead>
        <tr>
          {tableHeaders.map((header) =>
            <td key={header}>{header}</td>)}
        </tr>
      </thead>
      <tbody>
        {staffs.map((staff, i) =>
          <tr key={staff._id}>
            <td>{staff.name}</td>
            <td>{staff.email}</td>
            <td>{staff.phoneNo}</td>
            <td>{staff.role}</td>
            <td>{staff.status}</td>
            <td onClick={() => openModal(staff)}>...</td>
          </tr>)}
      </tbody>
      <Modal
        open={isOpen}
        title='Edit staff'
        handleClose={closeModal}
        size='lg'
      >
        <StaffForm
          closeModal={closeModal}
          staff={data}
        />
      </Modal>

    </TableWrapper>
  )
}

const StaffsPage = ({ staffs }) => {
  return (
    <ManagersPage>
      <PageTopWrapper>
        <h3>Our company staffs</h3>
        <CreateStaffButton />
      </PageTopWrapper>
      <div>
        {staffs.length ? <StaffsTable staffs={staffs} /> : <div>You have not added any staff yet.</div>}
      </div>
    </ManagersPage>
  )
}

export default StaffsPage
