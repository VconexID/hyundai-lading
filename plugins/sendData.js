export default ({ store, $axios }, inject) => {
  inject('sendData', async (url, payload, update = false) => {
    try {
      store.dispatch('toggleLoading', null, { root: true })
      if (update) {
        await $axios.put(url, payload)
      } else {
        await $axios.post(url, payload)
      }
      store.dispatch('toggleError', null, { root: true })
      store.dispatch('toggleLoading', null, { root: true })
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
