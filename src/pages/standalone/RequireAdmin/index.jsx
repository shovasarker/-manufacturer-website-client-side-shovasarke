import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import useAdmin from '../../../hooks/useAdmin'
import Spinner from '../Spinner'

const RequireAdmin = ({ children }) => {
  const [user] = useAuthState(auth)
  const [admin, loading] = useAdmin(user)

  if (loading) return <Spinner center colored />

  if (!admin) return <Navigate replace to='/' />

  return children
}

export default RequireAdmin
