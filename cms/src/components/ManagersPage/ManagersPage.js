import React from 'react'
import SectionMenu from '../SectionMenu'
import Header from '../misc/Header'
import styled from 'styled-components'

const ManagersPageWrapper = styled.div`
  display: flex;
`

const ContentWrapper = styled.div`
  width: 100%;
`

const ContentBody = styled.div`
  padding: 20px 20px;
`

const ManagersPage = ({ children }) => {
  return (
    <ManagersPageWrapper>
      <SectionMenu />
      <ContentWrapper>
        <Header />
        <ContentBody>
          {children}
        </ContentBody>
      </ContentWrapper>
    </ManagersPageWrapper>
  )
}

export default ManagersPage
