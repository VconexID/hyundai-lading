<template>
  <v-container>
    <page-navigation></page-navigation>
    <ancestor-tab></ancestor-tab>
    <loader-dialog></loader-dialog>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('ancestor/getAncestor', params.id)
  },
}
</script>

<style></style>
