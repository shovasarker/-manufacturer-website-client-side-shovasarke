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
import RequireAuthNotAdmin from './pages/standalone/RequireAuthNotAdmin'
import RequireAdmin from './pages/standalone/RequireAdmin'
import MakeAdmin from './pages/dashboard/components/MakeAdmin'
import ManageOrders from './pages/dashboard/components/ManageOrders'
import ManageParts from './pages/dashboard/components/MangeParts'
import AddPart from './pages/dashboard/components/AddPart'
import MyPortFolio from './pages/MyPortFolio'
import Blogs from './pages/Blogs'

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
              <RequireAuthNotAdmin>
                <MyOrders />
              </RequireAuthNotAdmin>
            }
          />
          <Route
            path='my-reviews'
            element={
              <RequireAuthNotAdmin>
                <MyReviews />
              </RequireAuthNotAdmin>
            }
          />
          <Route
            path='add-review'
            element={
              <RequireAuthNotAdmin>
                <AddReview />
              </RequireAuthNotAdmin>
            }
          />
          <Route
            path='payment/:id'
            element={
              <RequireAuthNotAdmin>
                <Payment />
              </RequireAuthNotAdmin>
            }
          />
          <Route
            path='make-admin'
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path='manage-orders'
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
          <Route
            path='manage-parts'
            element={
              <RequireAdmin>
                <ManageParts />
              </RequireAdmin>
            }
          />
          <Route
            path='add-part'
            element={
              <RequireAdmin>
                <AddPart />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/my-portfolio' element={<MyPortFolio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
