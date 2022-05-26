import React, { createContext, useState } from 'react'

const CancelContext = createContext()

export const CancelProvider = ({ children }) => {
  const [canceled, setCanceled] = useState({})
  return (
    <CancelContext.Provider value={{ canceled, setCanceled }}>
      {children}
    </CancelContext.Provider>
  )
}

export default CancelContext
