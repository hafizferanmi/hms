import React, { useEffect } from 'react'
import notification from 'cogo-toast'
import { useDispatch } from 'react-redux'
import ErrorMessage from '../components/misc/ErrorMessage'

import { notify } from '../helpers/notification'

const useNotify = ({ message, response, action, callback, error }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (response && response.success) {
      action && dispatch(action(response.result))
      message && notification.success(...notify(message))
      callback && callback()
    } else if (response && !response.success) {
      notification.error(...notify(<ErrorMessage message={response.message} />))
    }
    // eslint-disable-next-line
  }, [response])

  useEffect(() => {
    if (error) {
      notification.error(...notify(<ErrorMessage message='An error occured, could not complete request.' />))
    }
  }, [error])

  return true
}

export default useNotify
