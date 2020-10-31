import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Loading = () => {
  return (
    <LoadingWrapper>
      <ReactLoading />
    </LoadingWrapper>
  )
}

export default Loading
