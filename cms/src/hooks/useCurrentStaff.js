import { useStore } from 'react-redux'

const useCurrentStaff = () => {
  const store = useStore()
  const state = store.getState()
  const currentStaff = state.currentStaff.data
  return currentStaff
}

export default useCurrentStaff
