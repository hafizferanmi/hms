import { useContext, createContext } from 'react'

const dataContext = createContext()

const useDataProvider = () => {
  const context = useContext(dataContext)
  return {
    context
  }
}

export default useDataProvider
