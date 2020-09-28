import React from 'react'
import styled from 'styled-components'
import ManagersPage from '../ManagersPage'
import Button from '../../components/misc/Button'

const PageTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StaffsPage = () => {
  return (
    <ManagersPage>
      <PageTopWrapper>
        <h3>Our company staffs</h3>
        <Button label='Add staff' />
      </PageTopWrapper>
    </ManagersPage>
  )
}

export default StaffsPage
