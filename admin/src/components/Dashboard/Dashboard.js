import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'

import DashboardTable from './DashboardTable'
import DashboardEmpty from './DashboardEmpty'
import CreateCompanyButton from '../misc/CreateCompanyButton'

const DashboardHeader = styled.h2`
  padding: 10px 5px;
  font-size: 30px;
  margin-top: 10px;
  font-weight: bold;
  width: fit-content;
`

const TextButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;

  button {
    margin-top: 25px;
  }
`

const Dashboard = ({ companies }) => {
  return (
    <>
      <TextButtonWrapper>
        <DashboardHeader>Dashboard</DashboardHeader>
        <CreateCompanyButton />
      </TextButtonWrapper>

      {R.isEmpty(companies) ? <DashboardEmpty /> : <DashboardTable companies={companies} />}
    </>
  )
}

export default Dashboard
