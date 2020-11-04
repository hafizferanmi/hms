import React from 'react'
import styled from 'styled-components'
import useModal from '../../hooks/useModal'
import useDataProvider from '../../hooks/useDataProvider'
import ConfirmModal from '../misc/ConfirmModal'
import { STAFF_ROLES_LABEL } from '../../constants/staff'
import staffImg from '../../assets/images/logo-sm.png'
import TrashIcon from '../icons/Trash'
import EditIcon from '../icons/Pencil'
import DisableButton from './DisableStaffButton'

const StaffTableContainer = styled.div`
background-color: white;
border-radius: 12px;
padding: 10px;
margin-top: 30px;
`

const TableWrapper = styled.table`
width: 100%;
border-collapse: collapse;
overflow: hidden;

thead tr th {
  padding: 15px 0px;
  font-weight: normal;
  color: #8e95a9;

}

tbody {
  margin-top: 200px;

  > tr {
    font-size: 14px;
    background-color: #fafafb;
    margin-bottom: 40px;
    cursor: pointer;
    padding-top: 12px;
    border-radius: 10px;
    border-bottom: 1px solid #dae2eb;

    :last-of-type {
      border-bottom: none;
    }

    td {
      padding: 10px 0;
      margin: 30px;

      :first-of-type {
        padding-left: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      :last-of-type {
        padding-right: 5px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 80px;

        .icon-wrapper {
          display: none;

          svg:first-child {
            margin-right: 10px;

            &::after {
              content: 'ade';
              position: absolute;
              top: 2px;
              width: 5px;
              background: red;
            }
          }
        }
        
      }
    }

    :hover {
      background-color: #f2f6ff;

      td .icon-wrapper {
        display: block;
      } 
    }
  }
}
`

const StaffIcon = styled.img`
width: 33px;
height: 33px;
border-radius: 50%;
border: 1px solid white;
object-fit: contain;
`

const tableHeaders = ['', 'Name', 'Email', 'Phone No', 'Job title', 'Status', '']

const StaffsTable = ({ staffs, handleOpen }) => {
  const { DataContext } = useDataProvider()
  const { handleDeleteStaff } = DataContext
  const deleteModal = useModal()
  const disableModal = useModal()

  return (
    <StaffTableContainer>
      <TableWrapper className=''>
        <thead>
          <tr>
            {tableHeaders.map((header, i) =>
              <th key={i}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {staffs.map((staff, i) =>
            <tr key={staff._id}>
              <td><StaffIcon src={staffImg} alt={staff.name} /></td>
              <td>{staff.name}</td>
              <td>{staff.email}</td>
              <td>{staff.phone}</td>
              <td>{STAFF_ROLES_LABEL[staff.role]}</td>
              <td>{staff.disabled ? 'Not active' : 'Active'}</td>
              <td>
                <div className='icon-wrapper'>
                  <DisableButton onClick={() => disableModal.openModal(staff)} disableModal={disableModal} staff={staff} />
                  <EditIcon onClick={() => handleOpen(staff)} />
                  <TrashIcon onClick={() => deleteModal.openModal(staff)} />
                </div>
              </td>
            </tr>
          )}

        </tbody>
        <ConfirmModal
          isOpen={deleteModal.isOpen}
          title='Delete staff'
          closeModal={deleteModal.closeModal}
          confirmAction={() => handleDeleteStaff(deleteModal.data._id)}
          message={`Do you want to delete staff with name ${deleteModal.data && deleteModal.data.name}`}
        />
        <ConfirmModal
          isOpen={disableModal.isOpen}
          title={`${disableModal.data && disableModal.data.disabled ? 'Enable' : 'Disable'} staff`}
          closeModal={disableModal.closeModal}
          confirmAction={() => window.alert('Will learn to diable soon. Like now now.')}
          message={`Do you want to ${disableModal.data && disableModal.data.disabled ? 'enable' : 'disable'} staff with name ${disableModal.data && disableModal.data.name}`}
        />

      </TableWrapper>
    </StaffTableContainer>
  )
}

export default StaffsTable
