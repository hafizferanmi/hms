import React from 'react'
import styled from 'styled-components'
import Ourlogo from '../../assets/images/logo-sm.png'

const SectionIconMenuWrapper = styled.div`
  max-width: 5%;
  width: 5%;
  background: rgb(80, 110, 228);
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const OurLogoImg = styled.img`
  width: 40px;
  height: 40px;
`
const IconMenuListWrapper = styled.ul`
  li {
    list-style-type: none;
    margin-top: 10px;

    img {
      width: 20px;
    }
  }
`

const sections = [
  { title: 'FrontDesk', icon: Ourlogo },
  { title: 'Banquet', icon: Ourlogo },
  { title: 'Restaurant', icon: Ourlogo },
  { title: 'Bar', icon: Ourlogo },
  { title: 'Gym', icon: Ourlogo }
]

const SectionIconMenu = () => {
  return (
    <SectionIconMenuWrapper>
      <OurLogoImg src={Ourlogo} alt='suites logo' />
      <IconMenuListWrapper>
        {
          sections.map(({ title, icon }) => (
            <li key={title}>
              <img src={icon} alt={title} />
            </li>
          ))
        }
      </IconMenuListWrapper>
    </SectionIconMenuWrapper>
  )
}

export default SectionIconMenu
