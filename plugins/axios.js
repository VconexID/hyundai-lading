export default function ({ $axios, store, redirect, $swal, $config }) {
  $axios.setBaseURL($config.apiURL)

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
      $swal('Session Expired', 'Your Token Invalid', 'error')
      return redirect('/')
    }
  })
}
