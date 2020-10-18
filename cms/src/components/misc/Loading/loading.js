import React from 'react'
import ReactLoading from 'react-loading'
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
      <ReactLoading type='cylon' color='white' width='400px' height='400px' />
    </LoadingWrapper>
  )
}

export default Loading
