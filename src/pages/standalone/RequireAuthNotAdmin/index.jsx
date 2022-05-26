import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../../../firebase/firebase.init'
import useAdmin from '../../../hooks/useAdmin'
import Spinner from '../../../standalone/Spinner'

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const [admin, adminLoading] = useAdmin(user)
  const location = useLocation()

  if (loading || adminLoading) return <Spinner colored center />

  if (!user) return <Navigate replace to='/login' state={{ from: location }} />

  if (admin)
    return <Navigate replace to='/dashboard' state={{ from: location }} />

  return children
}

export default RequireAuth
