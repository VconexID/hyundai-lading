<template>
  <v-app>
    <web-navigation></web-navigation>
    <v-main class="background">
      <nuxt />
    </v-main>
    <!-- <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'Default',
}
</script>

<style scoped>
.background {
  background: url('https://ik.imagekit.io/vconexID/cool-background__2_.png')
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
