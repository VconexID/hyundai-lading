<template>
  <v-overlay :value="loading">
    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Wait a moment
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-overlay>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading
    },
  },
}
</script>

<style></style>
