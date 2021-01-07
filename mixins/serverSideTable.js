const serverSideTable = {
  data() {
    return {
      items: [],
      totalPage: 0,
      totalItems: 0,
      from: 0,
      page: 0,
      loading: false,
      search: '',
    }
  },
  created() {
    this.getDataFromApi(1)
  },
  computed: {
    searchIcon() {
      return this.search === '' || this.search === null ? 'mdi-magnify' : ''
    },
  },
  methods: {
    async getDataFromApi(pagination) {
      this.items = []
      this.search = ''
      this.loading = true
      const { data } = await this.$axios.get(`/${this.url}?page=` + pagination)
      this.loading = false
      this.items = data.data
      this.totalItems = data.total
      this.from = data.from
    },
    async searchData() {
      this.items = []
      this.loading = true
      const { data } = await this.$axios.get(
        `/${this.url}?search=` + this.search
      )
      this.totalItems = data.length
      this.loading = false
      this.items = data
    },
  },
}

export default serverSideTable
