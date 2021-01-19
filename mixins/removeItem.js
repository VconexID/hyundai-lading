const removeItem = {
  methods: {
    removeItem(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.$axios.delete(`/${this.url}/${id}`)
          this.$swal('Deleted!', 'Your data has been deleted.', 'success')
          this.getDataFromApi()
        }
      })
    },
  },
}

export default removeItem
