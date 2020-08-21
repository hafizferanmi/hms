import { useState } from 'react'

const useAsyncFn = (asyncFn) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  })

  const executeFn = (...args) => {
    return asyncFn(...args)
      .then(data => {
        setState({ ...state, loading: false, data })
        return data
      })
      .catch(error => {
        setState({ ...state, loading: false, error })
        return error
      })
  }

  return { ...state, executeFn }
}

export default useAsyncFn
