const END_POINT = 'descendants'

export const remove = async function ({ dispatch, commit }, payload) {
  try {
    dispatch('toggleLoading', null, { root: true })
    await this.$axios.delete(`${END_POINT}/${payload}`)
    dispatch('toggleLoading', null, { root: true })
    commit('FILTER_DESCENDANT', payload)
    dispatch('toggleError', null, { root: true })
  } catch (error) {
    // set error
    if (error.response.status === 422) {
      dispatch('toggleError', error.response.data.errors, { root: true })
    }
    // set loading state
    dispatch('toggleLoading', null, { root: true })
  }
}

export const store = function ({ commit }, payload) {
  commit('STORE_DESCENDANT', payload)
}
