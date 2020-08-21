import React from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Loading = () => {
  return (
    <LoadingWrapper>
      Loading...
    </LoadingWrapper>
  )
}

export default Loading
