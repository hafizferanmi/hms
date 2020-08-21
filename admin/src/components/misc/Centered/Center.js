import React from 'react'
import styled from 'styled-components'

const CenterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Centered = ({ children }) => {
  return (
    <CenterContent>
      <div>
        {children}
      </div>
    </CenterContent>
  )
}

export default Centered
