import React from 'react'
import Loginform from './Loginform'
import styled from 'styled-components'

import loginformbackground from '../../assets/images/loginformbackground.jpg'

const LoginPageWrapper = styled.div`
  display: flex;
`

const LoginLogoContainer = styled.div`
  flex-basis: 70%;
  background-image: url(${loginformbackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`
const LoginInputContainer = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loginpage = (props) => {
  return (
    <LoginPageWrapper>
      <LoginLogoContainer>
        &nbsp;
      </LoginLogoContainer>
      <LoginInputContainer>
        <div>
          <Loginform />
        </div>
      </LoginInputContainer>
    </LoginPageWrapper>
  )
}

export default Loginpage
