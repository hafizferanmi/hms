import React from 'react'
import styled from 'styled-components'
import { removeToken } from '../../../helpers/auth'
import { useNavigate } from '@reach/router'
import PageContent from '../GlobalStyle/PageContent'

const StyledHeader = styled.header`
  background-color: #fff;
  z-index: 1;
  height: 70px;
  width: 100%;
  box-shadow: rgba(31, 30, 47, 0.06) 6px 0px 6px;
`

const Header = () => {
  return (
    <StyledHeader />
  )
}

export default Header
