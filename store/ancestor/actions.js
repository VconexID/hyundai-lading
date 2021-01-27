const END_POINT = 'ancestors'

export const getAncestor = async function ({ commit, dispatch }, payload) {
  try {
    dispatch('toggleLoading', null, { root: true })
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    dispatch('toggleLoading', null, { root: true })
    commit('SET_ANCESTOR', data)
    commit('descendant/SET_DESCENDANTS', data.descendants, { root: true })
  } catch (error) {
    // error
  }
}
