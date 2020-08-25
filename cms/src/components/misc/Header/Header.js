import React from 'react'
import styled from 'styled-components'
import { removeToken } from '../../../helpers/auth'
import { useNavigate } from '@reach/router'
import PageContent from '../GlobalStyle/PageContent'

const HeaderTag = styled.header`
  background-color: #fff;
  border: 0;
  border-radius: 0;
  -webkit-box-shadow: 0 0 6px rgba(0,0,0,.15);
  box-shadow: 0 0 6px rgba(0,0,0,.15);
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  width: 100%;
  margin: 0;
  padding: 0;
  display: -ms-flexbox;
  display: flex;
  color: black;
  /* justify-content: space-space-around; */
  z-index: 1;
`
const Logo = styled.div`
`
const Logout = styled.div`
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
          HMS
        </Logo>
        <Logout onClick={handleLogout}>
          Logout
        </Logout>
      </PageContent>
    </HeaderTag>
  )
}

export default Header
