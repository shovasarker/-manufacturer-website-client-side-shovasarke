import { useEffect, useState } from 'react'
import axiosPrivate from '../utilities/Axios.init'

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAdmin = async () => {
      if (!user) return
      setLoading(true)
      const { data } = await axiosPrivate.get(`admin/${user?.email}`)

      setAdmin(data?.admin)
      setLoading(false)
    }

    getAdmin()
  }, [user])

  return [admin, loading]
}

export default useAdmin
