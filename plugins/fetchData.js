export default ({ store, $axios }, inject) => {
  inject('fetchData', async (url) => {
    try {
      store.dispatch('toggleLoading', null, { root: true })
      const { data } = await $axios.get(url)
      store.dispatch('toggleError', null, { root: true })
      store.dispatch('toggleLoading', null, { root: true })
      return data
    } catch (error) {
      if (error.response.status === 422) {
        store.dispatch('toggleError', error.response.data.errors, {
          root: true,
        })
      }
      store.dispatch('toggleLoading', null, { root: true })
    }
  })
}
