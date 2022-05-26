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
import SearchResult from './pages/searchresult/SearchResult'
import Purchase from './pages/purchase/Purchase'
import RequireAuth from './pages/shared/requireauth/RequireAuth'
import Dashboard from './pages/dashboard/Dashboard'
import MyProfile from './pages/dashboard/components/MyProfile'
import MyOrders from './pages/dashboard/components/MyOrders'
import MyReviews from './pages/dashboard/components/MyReviews'
import AddReview from './pages/dashboard/components/AddReview'
import { CancelProvider } from './contexts/CancelContext'
import Payment from './pages/dashboard/components/Payment'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/parts' element={<Parts />} />
        <Route
          path='/purchase/:id'
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path='search/:searchText' element={<SearchResult />} />
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <CancelProvider>
                <Dashboard />
              </CancelProvider>
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <MyProfile />
              </RequireAuth>
            }
          />
          <Route
            path='my-orders'
            element={
              <RequireAuth>
                <MyOrders />
              </RequireAuth>
            }
          />
          <Route
            path='my-reviews'
            element={
              <RequireAuth>
                <MyReviews />
              </RequireAuth>
            }
          />
          <Route
            path='add-review'
            element={
              <RequireAuth>
                <AddReview />
              </RequireAuth>
            }
          />
          <Route
            path='payment/:id'
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
