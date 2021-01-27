<template>
  <v-container>
    <page-navigation></page-navigation>
    <action-bar
      :refresh="refresh"
      :loading="loading"
      :search="search"
      :search-data="searchData"
    ></action-bar>
    <example-table
      :total-items="totalItems"
      :items="items"
      :loading="loading"
      :update-item-per-page="updateItemPerPage"
      :get-data-from-api="getDataFromApi"
      :footers="footers"
      :remove-item="removeItem"
    ></example-table>
    <loader-dialog></loader-dialog>
  </v-container>
</template>

<script>
import mixin from '~/mixins/mixin'
export default {
  mixins: [mixin],
  data() {
    return {
      url: 'examples',
    }
  },
}
</script>

<style></style>
