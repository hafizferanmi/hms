import React, { useEffect } from 'react'
import useAsyncFn from '../../hooks/useAsyncFn'
import { useParams } from '@reach/router'
import CheckinFormPage from './CheckinFormPage'
import { getCheckIn } from '../../helpers/api'

// check if there is an existing checkIn, if there is none, then present and empty form

const CheckinFormPageContainer = () => {
  const { checkInId } = useParams()

  console.log({ checkInId })

  const {
    error: serverError,
    loading: checkInLoading,
    response,
    executeFn
  } = useAsyncFn(getCheckIn)

  useEffect(() => {
    if (checkInId) executeFn(checkInId)

    // eslint-disable-next-line
  }, [checkInId])

  const [checkInDetails, setCheckIndetails] = React.useState()

  useEffect(() => {
    if (response && response.success) {
      setCheckIndetails(response.result)
    }
    // eslint-disable-next-line
  }, [response])

  if (checkInLoading) return 'Loading some data'
  if (serverError) return 'Error occured.'

  return (
    <CheckinFormPage checkIn={checkInDetails} />
  )
}

export default CheckinFormPageContainer
