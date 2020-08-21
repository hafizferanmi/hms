import React from 'react'
import Centered from '../misc/Centered'
import styled from 'styled-components'

import CreateCompanyButton from '../misc/CreateCompanyButton'

const StyledWrapper = styled.div`
  text-align: center;
  width: 500px;
  margin-top: 200px;

  div {
    margin-bottom: 10px;
  }
`

const DashboardEmpty = () => {
  return (
    <div>
      <Centered>
        <StyledWrapper>
          <div>No company created yet. Click to create new company.</div>
          <CreateCompanyButton />
        </StyledWrapper>
      </Centered>
    </div>
  )
}

export default DashboardEmpty
