import React from 'react'
import styled from 'styled-components'
import ManagersPage from '../ManagersPage'
import CreateStaffButton from './CreateStaffButton'
import useModal from '../../hooks/useModal'
import Modal from '../misc/Modal'
import StaffForm from '../Forms/StaffForm'
import { STAFF_ROLES_LABEL, STAFF_STATUS_LABEL } from '../../constants/staff'
import staffImg from '../../assets/images/logo-sm.png'
import TrashIcon from '../icons/Trash'
import EditIcon from '../icons/Pencil'

const PageTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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

const StaffsTable = ({ staffs }) => {
  const { isOpen, openModal, closeModal, data } = useModal()
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
              <td><StaffIcon src={staffImg} alt={`${staff.name}'s name`} /></td>
              <td>{staff.name}</td>
              <td>{staff.email}</td>
              <td>{staff.phone}</td>
              <td>{STAFF_ROLES_LABEL[staff.role]}</td>
              <td>{STAFF_STATUS_LABEL[staff.status] || 'Active'}</td>
              <td>
                <div className='icon-wrapper'>
                  <EditIcon onClick={() => openModal(staff)} />
                  <TrashIcon onClick={() => {}} />
                </div>
              </td>
            </tr>
          )}

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
    </StaffTableContainer>
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
