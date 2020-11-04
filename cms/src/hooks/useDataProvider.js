import { useContext, createContext } from 'react'

const DataContext = createContext()

const useDataProvider = () => {
  const Context = useContext(DataContext)
  const Provider = DataContext.Provider
  return {
    DataContext: Context, Provider
  }
}

export default useDataProvider
