const resetForm = {
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.initialForm)
    },
  },
}

export default resetForm
