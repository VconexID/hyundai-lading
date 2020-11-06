const END_POINT = 'examples'

export const storeExample = async function ({ dispatch }, payload) {
  try {
    const formData = new FormData()
    formData.append('title', payload.title)
    formData.append('description', payload.description)
    formData.append('image', payload.image)
    // set loading state
    dispatch('toggleLoading', null, { root: true })
    await this.$axios.post(END_POINT, formData)
    // set loading state
    dispatch('toggleLoading', null, { root: true })
    // set notification
    this.$swal('Success', 'Item Added', 'success')
    // redirect to index page
    this.$router.push('/admin/examples')
  } catch (error) {
    // set error
    if (error.response.status === 422) {
      dispatch('toggleError', error.response.data.errors, { root: true })
    }
    // set loading state
    dispatch('toggleLoading', null, { root: true })
  }
}

export const getExample = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_EXAMPLE', data)
  } catch (error) {
    // error
  }
}

export const updateExample = async function ({ dispatch }, payload) {
  try {
    const formData = new FormData()
    formData.append('_method', 'put')
    formData.append('title', payload.form.title)
    formData.append('description', payload.form.description)
    formData.append('image', payload.optionalData.image)
    // set loading state
    dispatch('toggleLoading', null, { root: true })
    await this.$axios.post(`${END_POINT}/${payload.form.id}`, formData)
    // set loading state
    dispatch('toggleLoading', null, { root: true })
    // set notification
    this.$swal('Success', 'Item Updated', 'success')
    // redirect to index page
    this.$router.push('/admin/examples')
  } catch (error) {
    // set error
    if (error.response.status === 422) {
      dispatch('toggleError', error.response.data.errors, { root: true })
    }
    // set loading state
    dispatch('toggleLoading', null, { root: true })
  }
}
