<template>
  <v-container>
    <example-form></example-form>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('example/getExample', params.id)
  },
}
</script>

<style></style>
