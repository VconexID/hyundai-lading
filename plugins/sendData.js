export default ({ store, $axios }, inject) => {
  /* 
    Send Data using Axios
    The first parameter is URL where data is being sent
    the second parameter is payload or data being sent to URL in the first parameter
    the third parameter is whether you want to use put method or not
  */
  inject('sendData', async (url, payload, put = false) => {
    try {
      let data
      store.dispatch('toggleLoading', null, { root: true })
      if (put) {
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
