<template>
  <v-container>
    <page-navigation></page-navigation>
    <example-form :url="url"></example-form>
    <loader-dialog></loader-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      url: 'examples',
    }
  },
}
</script>

<style></style>
