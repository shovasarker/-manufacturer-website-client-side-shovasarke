import React, { createContext, useState } from 'react'

const CancelContext = createContext()

export const CancelProvider = ({ children }) => {
  const [canceled, setCanceled] = useState({})
  const [selectedUser, setSelectedUser] = useState({})
  return (
    <CancelContext.Provider
      value={{ canceled, setCanceled, selectedUser, setSelectedUser }}
    >
      {children}
    </CancelContext.Provider>
  )
}

export default CancelContext
