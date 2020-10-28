const serverSideTable = {
  data() {
    return {
      items: [],
      totalItems: 0,
      from: 0,
      loading: false,
      footer: {
        disableItemsPerPage: true,
      },
    }
  },
  created() {
    this.getDataFromApi()
  },
  methods: {
    async getDataFromApi(pagination) {
      this.items = []
      this.loading = true
      const { data } = await this.$axios.get(`/${this.url}?page=` + pagination)
      this.loading = false
      this.items = data.data
      this.totalItems = data.total
      this.from = data.from
    },
  },
}

export default serverSideTable
