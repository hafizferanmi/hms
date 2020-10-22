import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const SectionMenuWrapper = styled.div`
  background: white;
  box-shadow: rgba(31, 30, 47, 0.1) 0px 2px 4px;
  width: 15%;
  height: 100vh;
  padding-left: 50px;
`

const LinkWrapper = styled.div`
  margin-top: 150px;

  a {
    display: block
  }
`

const SectionMenu = () => {
  return (
    <SectionMenuWrapper>
      <LinkWrapper>
        <Link to='/secure/admin'>Dashboard</Link>
        <Link to='/secure/admin/rooms'>Rooms</Link>
        <Link to='/secure/admin/roomtypes'>RoomTypes</Link>
        <Link to='/secure/admin/halls'>Halls</Link>
        <Link to='/secure/admin/staffs'>Staffs</Link>
        <Link to='/secure/admin/checkin'>Check In</Link>
      </LinkWrapper>
    </SectionMenuWrapper>
  )
}

export default SectionMenu
