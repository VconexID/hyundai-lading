export const login = async function ({ commit, dispatch }, payload) {
  try {
    // set loading state
    dispatch('toggleLoading', null, { root: true })
    // send data
    const { data } = await this.$axios.post('/login', {
      email: payload.email,
      password: payload.password,
    })
    // set loading state
    dispatch('toggleLoading', null, { root: true })
    // remove error
    dispatch('toggleError', null, { root: true })
    // set token
    commit('SET_TOKEN', data.access_token)
    // set role
    commit('SET_ROLE', data.user.role)
    // redirect to dashboard if role == 0 (admin), to home if role == 1 (visitor)
    if (parseInt(data.user.role) === 0) {
      // show alert
      this.$swal('Login Successful', 'Welcome to Admin Dashboard', 'success')
      this.$router.push('/admin')
    } else {
      this.$router.push('about')
    }
  } catch (error) {
    // set error
    if (error.response.status === 422) {
      dispatch('toggleError', error.response.data.errors, { root: true })
    }
    // set loading state
    dispatch('toggleLoading', null, { root: true })
  }
}

export const changePassword = async function ({ commit, dispatch }, payload) {
  try {
    // set loading
    dispatch('toggleLoading', null, { root: true })
    // submit new password
    await this.$axios.post('/change-password', {
      old_password: payload.old_password,
      new_password: payload.new_password,
      confirm_password: payload.confirm_password,
    })
    // redirect to main page
    // this.$router.push('/')
  } catch (error) {
    // set error
    if (error.response.status === 422) {
      dispatch('toggleError', error.response.data.errors, { root: true })
    }
    // set loading state
    dispatch('toggleLoading', null, { root: true })
  }
}
export const logout = async function ({ commit, dispatch }) {
  try {
    // remove bearer token from server
    await this.$axios.post('/logout')
    // remove token
    commit('REMOVE_TOKEN')
    commit('REMOVE_ROLE')
    // redirect to main page
    this.$router.push('/')
  } catch (error) {
    // error
  }
}

export const removeToken = function ({ commit }) {
  commit('REMOVE_TOKEN')
  commit('REMOVE_ROLE')
}
