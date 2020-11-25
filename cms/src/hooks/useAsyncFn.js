import { useState } from 'react'

const useAsyncFn = (asyncFn) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    response: null
  })

  const executeFn = (...args) => {
    setState({ loading: true, error: null, data: null })

    return asyncFn(...args)
      .then(response => {
        setState({ ...state, loading: false, response })
        return response
      })
      .catch(error => {
        setState({ ...state, loading: false, error })
        return error
      })
  }

  return { ...state, executeFn }
}

export default useAsyncFn
