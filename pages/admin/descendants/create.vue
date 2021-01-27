<template>
  <v-container>
    <page-navigation></page-navigation>
    <ancestor-stepper :url="url"></ancestor-stepper>
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
