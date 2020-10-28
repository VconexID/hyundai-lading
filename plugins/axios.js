export default function ({ $axios, store, $auth, redirect }) {
  $axios.setBaseURL('https://api2li.vconex.id/api')

  $axios.onRequest((config) => {
    const user = store.state.auth
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`
    } else {
      delete config.headers.Authorization
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      store.dispatch('auth/removeToken')
      return redirect('/')
    }
  })
}
