import axios from 'axios'
// eslint-disable-next-line import/default
import store from '../store'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    Authorization: `bearer ${store.state.auth.token}`,
  },
})

export default api
