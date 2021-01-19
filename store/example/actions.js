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
  } catch (error) {
    // set error
    if (error.response.status === 422) {
      dispatch('toggleError', error.response.data.errors, { root: true })
    }
    // set loading state
    dispatch('toggleLoading', null, { root: true })
  }
}

export const getExample = async function ({ commit, dispatch }, payload) {
  try {
    dispatch('toggleLoading', null, { root: true })
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    dispatch('toggleLoading', null, { root: true })
    commit('SET_EXAMPLE', data)
  } catch (error) {
    // error
  }
}

export const updateExample = async function ({ dispatch }, payload) {
  try {
    const formData = new FormData()
    formData.append('_method', 'put')
    formData.append('title', payload.title)
    formData.append('description', payload.description)
    formData.append('image', payload.image ? payload.image : '')
    // set loading state
    dispatch('toggleLoading', null, { root: true })
    await this.$axios.post(`${END_POINT}/${payload.id}`, formData)
    // set loading state
    dispatch('toggleLoading', null, { root: true })
    // set notification
    this.$swal('Success', 'Item Updated', 'success')
  } catch (error) {
    // set error
    if (error.response.status === 422) {
      dispatch('toggleError', error.response.data.errors, { root: true })
    }
    // set loading state
    dispatch('toggleLoading', null, { root: true })
  }
}
