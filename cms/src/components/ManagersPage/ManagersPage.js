import React from 'react'
import SectionIconMenu from '../SectionIconMenu'
import SectionMenu from '../SectionMenu'
import Header from '../misc/Header'
import styled from 'styled-components'

const ManagersPageWrapper = styled.div`
  display: flex;
`

const ContentWrapper = styled.div`
  width: 100%;
`

const ManagersPage = () => {
  return (
    <ManagersPageWrapper>
      <SectionIconMenu />
      <SectionMenu />
      <ContentWrapper>
        <Header />
      </ContentWrapper>
    </ManagersPageWrapper>
  )
}

export default ManagersPage
