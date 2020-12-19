import React from 'react'
import FrontDeskPage from './FrontDeskPage'
import useCurrentStaff from '../../hooks/useCurrentStaff'

const FrontDeskPageContainer = () => {
  const currentStaff = useCurrentStaff()
  console.log({ currentStaff })
  return (
    <FrontDeskPage />
  )
}

export default FrontDeskPageContainer
