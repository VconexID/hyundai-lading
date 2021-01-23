<template>
  <v-row>
    <v-col>
      <v-card class="tw-rounded-md tw-shadow-md">
        <v-container>
          <v-row>
            <v-col cols="12" lg="6">
              <v-btn
                color="primary"
                nuxt
                :block="$vuetify.breakpoint.mdAndDown"
                :to="path + '/create'"
                class="hover:tw-bg-blue-500 tw-transition tw-duration-500 my-2"
                dark
              >
                <v-icon class="mr-2">mdi-plus</v-icon>
                Add
              </v-btn>
              <v-btn
                color="success"
                :block="$vuetify.breakpoint.mdAndDown"
                class="hover:tw-bg-green-500 tw-transition tw-duration-500 my-2"
                dark
                @click="refresh"
              >
                <v-icon class="mr-2">mdi-refresh</v-icon>
                refresh
              </v-btn>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="search"
                class="lg:tw-w-64 lg:tw-float-right"
                :disabled="loading"
                single-line
                hide-details
                outlined
                dense
                label="Search"
                append-icon="mdi-magnify"
                @keypress.enter="submit"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    refresh: {
      type: Function,
      required: true,
    },
    searchData: {
      type: Function,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    path() {
      return this.$route.path
    },
  },
  methods: {
    submit() {
      this.searchData(this.search)
      this.search = ''
    },
  },
}
</script>

<style></style>
