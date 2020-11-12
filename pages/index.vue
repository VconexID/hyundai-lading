<template>
  <v-container class="fill-height" fluid>
    <main-content></main-content>
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Welcome',
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
