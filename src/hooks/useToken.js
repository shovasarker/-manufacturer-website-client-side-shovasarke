import axios from 'axios'
import { useEffect, useState } from 'react'

const useToken = (user) => {
  const [token, setToken] = useState('')

  useEffect(() => {
    const updateUser = async () => {
      if (!user || !user?.email) return
      const currentUser = {
        email: user?.email,
        displayName: user?.displayName,
      }

      const { data } = await axios.put(
        `http://localhost:5000/user/${user?.email}`,
        currentUser
      )

      console.log(data)
      localStorage.setItem('accessToken', data?.accessToken)
      setToken(data?.accessToken)
    }

    updateUser()
  }, [user])

  return [token]
}

export default useToken
