const serverSideTable = {
  data() {
    return {
      items: [],
      show: false,
      totalItems: 0,
      from: 0,
      loading: false,
      search: '',
      page: 0,
      totalPage: 0,
      total: 10,
      footers: {
        showFirstLastPage: true,
        firstIcon: 'mdi-page-first',
        lastIcon: 'mdi-page-last',
        prevIcon: 'mdi-arrow-left',
        nextIcon: 'mdi-arrow-right',
      },
    }
  },
  created() {
    this.getDataFromApi(1)
  },
  methods: {
    async getDataFromApi(pagination) {
      this.items = []
      this.search = ''
      this.loading = true
      const { data } = await this.$axios.get(
        `/${this.url}?page=${pagination}&total=${this.total}`
      )
      this.loading = false
      this.items = data.data
      this.totalItems = data.total
      this.from = data.from
      this.page = data.current_page
      this.totalPage = data.last_page
    },
    async searchData() {
      if (this.search === '' || this.search === null) {
        return this.$swal('Warning!', 'Please Input Text', 'warning')
      }
      this.items = []
      this.loading = true
      const { data } = await this.$axios.get(
        `/${this.url}?search=` + this.search
      )
      this.totalItems = data.length
      this.loading = false
      this.items = data
      this.page = 1
      this.totalPage = 1
    },
    async editItem(id) {
      await this.$store.dispatch(this.editState, id)
      this.showForm()
    },
    updateItemPerPage(value) {
      this.total = value
      this.getDataFromApi(1)
    },
    showForm() {
      this.show = true
    },
    refresh() {
      this.search = ''
      this.getDataFromApi(1)
    },
  },
}

export default serverSideTable
