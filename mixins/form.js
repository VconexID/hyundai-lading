const resetForm = {
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.initialForm)
    },
    createFormData() {
      const formData = new FormData()
      const form = { ...this.form }

      for (const property in form) {
        formData.append(property, form[property])
      }
      return formData
    },
  },
}

export default resetForm
