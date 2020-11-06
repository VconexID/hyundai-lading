<template>
  <v-app>
    <v-main>
      <nuxt class="tw-bg-gray-400"></nuxt>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Authentication',
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.auth.token) {
      if (store.state.auth.role === 0) {
        return redirect('/admin')
      } else {
        return redirect('/')
      }
    }
  },
}
</script>

<style></style>
