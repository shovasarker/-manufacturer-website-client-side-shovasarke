import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/NotFound'
import Header from './pages/shared/header/Header'

import 'react-toastify/dist/ReactToastify.css'
import Register from './pages/register/Register'
import Parts from './pages/Parts'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/parts' element={<Parts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
