const resetForm = {
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.initialForm)
    },

    /* 
      Create formData automatically based on form object in data component
      first parameter is whether method put true or false, commonly used
      when update data with file
    */
    createFormData(update = false) {
      const formData = new FormData()
      const form = { ...this.form }

      if (update) {
        formData.append('_method', 'put')
      }

      for (const property in form) {
        formData.append(property, form[property] || '')
      }
      return formData
    },
    validateForm() {
      for (const property in this.form) {
        if (this.form[property] === '') {
          this.$swal('Data Required', 'Please fill empty form', 'error')
          return false
        }
        return true
      }
    },
    confirmDialog(submitData) {
      if (this.createPath) {
        this.data.push(this.form)
        this.$swal({
          title: 'Do you want to add more data?',
          text: 'Your form will be cleared',
          icon: 'warning',
          showCancelButton: true,
          showDenyButton: true,
          denyButtonColor: '#43A047',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'No, send data',
          denyButtonText: `Yes, Add more data!`,
        }).then((result) => {
          if (result.isConfirmed) {
            submitData()
          } else if (result.isDenied) {
            this.form = Object.assign({}, this.initialForm)
            return false
          }
        })
      }
    },
  },
}

export default resetForm
