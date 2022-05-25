import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import useToken from '../../../hooks/useToken'
import SocialLogin from '../../shared/sociallogin/SocialLogin'
import EmailRegister from '../EmailRegister'

const Register = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [token] = useToken(user)

  useEffect(() => {
    if (!token) return
    navigate(from, { replace: true })
  }, [token, from, navigate])

  return (
    <main>
      <div className='card max-w-full md:max-w-sm bg-base-100 shadow-xl mx-auto my-20'>
        <div className='card-body'>
          <h2 className='text-xl text-neutral text-center'>Register</h2>
          <EmailRegister />
          <p className='text-center text-sm'>
            Already Have an Account?
            <button
              className='btn btn-link !text-secondary underline-offset-1 ml-2 !p-0 !capitalize'
              onClick={() =>
                navigate('/login', {
                  replace: true,
                  state: { from: { pathname: from } },
                })
              }
            >
              Login Here
            </button>
          </p>
          <SocialLogin />
        </div>
      </div>
    </main>
  )
}

export default Register
