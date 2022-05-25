import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../../../firebase/firebase.init'
import Spinner from '../../../standalone/Spinner'
// import EmailVerifcation from '../EmailVerification'

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()

  if (loading) return <Spinner colored center />

  if (!user) return <Navigate replace to='/login' state={{ from: location }} />

  // email verification off for Testing
  // if (!user?.emailVerified) return <EmailVerifcation />

  return children
}

export default RequireAuth
