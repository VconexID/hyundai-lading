<template>
  <v-container>
    <page-navigation></page-navigation>
    <example-form :url="url"></example-form>
    <loader-dialog></loader-dialog>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('example/getExample', params.id)
  },
  data() {
    return {
      url: 'examples',
    }
  },
}
</script>

<style></style>
