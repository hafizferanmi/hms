import React from 'react'
import styled from 'styled-components'
import CreateStaffButton from './CreateStaffButton'
import StaffsTable from './StaffTable'

const PageTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StaffsPage = ({ staffs }) => {
  return (
    <>
      <PageTopWrapper>
        <h3>Our company staffs</h3>
        <CreateStaffButton />
      </PageTopWrapper>
      <div>
        {staffs.length ? <StaffsTable staffs={staffs} /> : <div>You have not added any staff yet.</div>}
      </div>
    </>
  )
}

export default StaffsPage
