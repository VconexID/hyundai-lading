<template>
  <v-app>
    <web-navigation></web-navigation>
    <v-main class="tw-flex tw-items-center">
      <nuxt />
    </v-main>
    <footer-welcome></footer-welcome>
  </v-app>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style scoped></style>
