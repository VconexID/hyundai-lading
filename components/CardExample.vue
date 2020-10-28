<template>
  <v-row>
    <v-col>
      <v-card flat>
        <v-card-title
          class="text-capitalize tw-border-b tw-border-gray-400 pa-lg-5"
          >Events <v-spacer></v-spacer>
          <v-btn
            color="primary"
            small
            fab
            depressed
            nuxt
            to="/admin/events/create"
            ><v-icon>mdi-plus</v-icon></v-btn
          ></v-card-title
        >
        <v-card-text>
          <v-data-table
            :headers="headers"
            :footer-props="footer"
            :server-items-length="totalItems"
            :items="items"
            :disable-sort="true"
            :loading="loading"
            @update:page="getDataFromApi"
          >
            <template v-slot:item="item">
              <tr>
                <td>{{ item.index + from }}</td>
                <td>{{ item.item.name }}</td>
                <td>{{ item.item.datetime }}</td>
                <td class="py-2">
                  <v-img :src="item.item.image" max-width="200px"></v-img>
                </td>
                <td>
                  <v-btn
                    nuxt
                    :to="'/admin/events/edit/' + item.item.id"
                    depressed
                    fab
                    color="primary"
                    x-small
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    depressed
                    fab
                    color="error"
                    x-small
                    @click="removeItem(item.item.id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: '#',
        },
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Date Time',
          value: 'datetime',
        },
        {
          text: 'Image',
          value: 'image',
        },
        {
          text: 'Action',
        },
      ],
      footer: {
        disableItemsPerPage: true,
      },
      items: [],
      totalItems: 0,
      from: 0,
      loading: false,
    }
  },
  created() {
    this.getDataFromApi()
  },
  methods: {
    async getDataFromApi(pagination) {
      this.loading = true
      const { data } = await this.$axios.get('/events?page=' + pagination)
      this.loading = false
      this.items = data.data
      this.totalItems = data.total
      this.from = data.from
    },
    removeItem(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('event/deleteEvent', id)
          this.getDataFromApi()
          this.$swal('Deleted!', 'Your data has been deleted.', 'success')
        }
      })
    },
  },
}
</script>

<style></style>
