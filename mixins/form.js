const resetForm = {
  methods: {
    /* 
      Reset Form object value
      for using this method you need to add object with name form and initial form
      then you can use this function in your component
    */
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
    /* 
      Push data in form object to data object
      also will automatically validate empty form and reset form
      when this function used
    */
    pushData() {
      if (!this.validateForm()) return false
      this.data.push(this.form)
      this.resetForm()
    },
  },
}

export default resetForm
