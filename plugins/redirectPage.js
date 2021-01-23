export default ({ redirect, store, $swal }, inject) => {
  inject('redirectPage', (url, swal = null) => {
    if (Object.keys(store.state.errors).length === 0) {
      $swal(swal || 'Success', 'Action Completed', 'success')
      redirect(url)
    }
  })
}
