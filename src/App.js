import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
