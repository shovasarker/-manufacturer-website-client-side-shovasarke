import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../../../firebase/firebase.init'
import Button from '../../../standalone/Button'
import Spinner from '../../../standalone/Spinner'

const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  useEffect(() => {
    if (user && !error) {
      toast.success(`Welcome to Abacus Parts, ${user?.user?.displayName}`)
      return
    }
    if (error) {
      toast.error(error?.message)
      return
    }
  }, [user, error])

  return (
    <Button
      fullWidth
      outlined
      className={`!mt-5 `}
      onClick={() => signInWithGoogle()}
    >
      {loading ? <Spinner small /> : <>Continue With Google</>}
    </Button>
  )
}

export default GoogleSignIn
