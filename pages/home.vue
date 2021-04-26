<template>
  <v-container fluid class="lg:tw-px-0">
    <main-content></main-content>
    <article-content></article-content>
    <calendar-content></calendar-content>
    <galeri-content></galeri-content>
    <about-us-content></about-us-content>
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
}
</script>

<style></style>
