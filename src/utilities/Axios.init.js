import axios from 'axios'
const BASE_URL = 'https://mwss-server.herokuapp.com/'

const axiosPrivate = axios.create({ baseURL: BASE_URL })
axiosPrivate.interceptors.request.use(
  function (config) {
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        'accessToken'
      )}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default axiosPrivate
