import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './pages/NotFound'
import Header from './pages/shared/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
