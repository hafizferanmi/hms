import React from 'react'
import styled from 'styled-components'
import { removeToken } from '../../../helpers/auth'
import { useNavigate } from '@reach/router'
import PageContent from '../GlobalStyle/PageContent'

const HeaderTag = styled.header`
  height: 70px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
`
const Logout = styled.div`
  cursor: pointer;
  background: white;
  padding: 5px;
  color: black;
`

const Header = () => {
  const navigateTo = useNavigate()
  const handleLogout = () => {
    removeToken()
    navigateTo('/')
  }

  return (
    <HeaderTag>
      <PageContent>
        <Logo>
          HMS admin
        </Logo>
        <Logout onClick={handleLogout}>
          Logout
        </Logout>
      </PageContent>
    </HeaderTag>
  )
}

export default Header
