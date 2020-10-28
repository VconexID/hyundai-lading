<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <h1 class="text-h5 text-center primary--text">Please Wait</h1>
        <v-img
          max-width="200"
          max-height="100"
          class="mx-auto"
          src="https://ik.imagekit.io/vconexID/ap2li/animation_500_kg8wxry9.gif"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('auth/logout')
    }, 3000)
  },
}
</script>

<style></style>
