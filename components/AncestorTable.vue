<template>
  <div>
    <!-- Example Table -->
    <v-row>
      <v-col>
        <v-card class="tw-rounded-md tw-shadow-md">
          <v-data-table
            :headers="headers"
            :server-items-length="totalItems"
            :items="items"
            :loading="loading"
            calculate-widths
            :footer-props="footers"
            @update:items-per-page="updateItemPerPage"
            @update:page="getDataFromApi"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <nuxt-link :to="path + '/edit/' + item.id">
                <v-icon small class="mr-2" color="primary"> mdi-pencil </v-icon>
              </nuxt-link>
              <v-icon small color="error" @click="removeItem(item.id)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    footers: {
      type: Object,
      default: () => {},
    },
    updateItemPerPage: {
      type: Function,
      required: true,
    },
    getDataFromApi: {
      type: Function,
      required: true,
    },
    removeItem: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    headers: [
      { text: 'Title', value: 'title', sortable: false },
      { text: 'Action', value: 'actions', sortable: false, width: 100 },
    ],
    url: 'examples',
  }),
  computed: {
    path() {
      return this.$route.path
    },
  },
}
</script>
