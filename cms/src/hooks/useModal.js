import { useState } from 'react'

const useModal = (autoOpen = false) => {
  const [isOpen, setIsOpen] = useState(autoOpen)
  const [data, setModalData] = useState(null)

  const openModal = (data) => {
    setModalData(data)
    setIsOpen(true)
  }

  const closeModal = () => {
    setModalData(null)
    setIsOpen(false)
  }

  return { isOpen, openModal, closeModal, data }
}

export default useModal
