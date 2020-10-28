<template>
  <v-app>
    <!-- App Header & Sidebar -->
    <admin-navigation></admin-navigation>

    <v-main class="tw-bg-gray-400">
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware({ store, redirect }) {
    // If the user is not authenticated
    // if (!store.state.auth.token) {
    //   return redirect('/login-ap2li')
    // }
    // If the user role not admin
    // if (store.state.user.user.role !== '0') {
    //   return redirect('/')
    // }
  },
}
</script>

<style></style>
