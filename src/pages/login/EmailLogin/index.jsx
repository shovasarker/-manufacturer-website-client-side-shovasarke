import React, { useEffect } from 'react'
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import auth from '../../../firebase/firebase.init'
import Button from '../../standalone/Button'
import Input from '../../standalone/Input'
import Spinner from '../../standalone/Spinner'

const EmailLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)

  useEffect(() => {
    if (user && !error) {
      toast.success(`Welcome Back, ${user?.user?.displayName}`)
      reset()
      return
    }
    if (error) {
      console.error(error)
      toast.error(error?.message)
      return
    }
  }, [user, error, reset])

  const email = watch('email')
  const onSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(email, password)
  }

  const handleResetPasssword = async () => {
    if (!email) return toast.warning('Please! Enter an Email First!')

    if (
      !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+\.{0,1})+([^<>().,;:\s@"]{2,}|[\d.]+))$/.test(
        email
      )
    )
      return toast.warning('Please! Enter a valid Email')

    await sendPasswordResetEmail(email)
    toast.success('Password Reset Email is Sent to your Email')
  }

  return (
    <form className='mt-10 space-y-1' onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        type='email'
        name='email'
        placeholder={''}
        error={errors?.email}
        label='Email'
        required={'Email is Required'}
        pattern={{
          value:
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+\.{0,1})+([^<>().,;:\s@"]{2,}|[\d.]+))$/,
          message: 'Email is not Valid',
        }}
        bordered
      />
      <Input
        register={register}
        type='password'
        name='password'
        placeholder={''}
        error={errors?.password}
        label='Password'
        required={'Passowrd is Required'}
        minLength={{
          value: 6,
          message: 'Password Must be Atleast 6 character long',
        }}
        bordered
      />
      <button
        type='button'
        className='btn btn-link !h-6 !min-h-6 text-neutral underline-offset-1 !p-0 !px-1 capitalize !mt-0'
        onClick={handleResetPasssword}
      >
        Forget Password?
      </button>
      {error && (
        <p className='text-error text-xs text-center'>{error?.message}</p>
      )}
      <Button type='submit' fullWidth neutral className={'!mt-4'}>
        {loading ? <Spinner small colored /> : <>Login</>}
      </Button>
    </form>
  )
}

export default EmailLogin
