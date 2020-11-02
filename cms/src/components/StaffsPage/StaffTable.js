import React, { useContext } from 'react'
import styled from 'styled-components'
import useModal from '../../hooks/useModal'
import ConfirmModal from '../misc/ConfirmModal'
import { STAFF_ROLES_LABEL, STAFF_STATUS_LABEL } from '../../constants/staff'
import staffImg from '../../assets/images/logo-sm.png'
import TrashIcon from '../icons/Trash'
import EditIcon from '../icons/Pencil'
import DisableButton from './DisableStaffButton'
import { StaffPageAPIMethods } from './StaffsPageContainer'

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
  const {
    handleDeleteStaff
  } = useContext(StaffPageAPIMethods)
  const {
    isOpen: deleteModalOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
    data: deleteModalData
  } = useModal()

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
                  <DisableButton staff={staff} />
                  <EditIcon onClick={() => handleOpen(staff)} />
                  <TrashIcon onClick={() => openDeleteModal(staff)} />
                </div>
              </td>
            </tr>
          )}

        </tbody>
        <ConfirmModal
          isOpen={deleteModalOpen}
          title='Delete staff'
          closeModal={closeDeleteModal}
          confirmAction={() => handleDeleteStaff(deleteModalData._id)}
          message={`Do you want to delete staff with name ${deleteModalData && deleteModalData.name}`}
        />

      </TableWrapper>
    </StaffTableContainer>
  )
}

export default StaffsTable
