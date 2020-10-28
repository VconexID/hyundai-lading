<template>
  <v-app>
    <v-app-bar flat class="tw-border-b tw-border-gray-500" app>
      <v-spacer></v-spacer>
      <h1 class="title text-uppercase">nuxt js</h1>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {}
</script>
