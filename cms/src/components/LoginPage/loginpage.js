import React from 'react'
import Loginform from './LoginFormContainer'
import styled from 'styled-components'

import loginformbackground from '../../assets/images/loginformbackground.jpg'

const LoginPageWrapper = styled.div`
  background-image: url(${loginformbackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loginpage = (props) => {
  return (
    <LoginPageWrapper>
      <Loginform />
    </LoginPageWrapper>
  )
}

export default Loginpage
