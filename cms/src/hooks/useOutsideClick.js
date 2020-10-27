import { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)
    window.addEventListener('touchstart', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('touchstart', handleClick)
    }
  })
}

export default useOutsideClick
