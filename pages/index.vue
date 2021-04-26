<template>
  <v-container class="fill-height" fluid>
    <main-content></main-content>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
  middleware({ store, redirect }) {
    // Jika pengguna tidak diautentikasi
    if (!store.state.landing) {
      return redirect('/welcome')
    } else {
      return redirect('/home')
    }
  },
}
</script>
