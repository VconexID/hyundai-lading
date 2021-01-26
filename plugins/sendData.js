export default ({ store, $axios }, inject) => {
  inject('sendData', async (url, payload, update = false) => {
    try {
      let data
      store.dispatch('toggleLoading', null, { root: true })
      if (update) {
        data = await $axios.put(url, payload)
      } else {
        data = await $axios.post(url, payload)
      }
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
