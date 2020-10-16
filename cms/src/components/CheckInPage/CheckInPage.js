import React from 'react'
import styled from 'styled-components'
import ManagersPage from '../ManagersPage'
import CheckInButton from './CheckInButton'
import CheckInTable from './CheckInTable'

const PageTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CheckInPage = ({ checkIns = [] }) => {
  return (
    <ManagersPage>
      <PageTopWrapper>
        <h3>CheckIn's</h3>
        <CheckInButton />
      </PageTopWrapper>
      <div>
        {checkIns.length ? <CheckInTable checkIns={checkIns} /> : <div>You dont have a checkIn yet.</div>}
      </div>
    </ManagersPage>
  )
}

export default CheckInPage
