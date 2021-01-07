<template>
  <!-- float button -->
  <v-speed-dial v-model="fab" bottom right fixed>
    <template v-slot:activator>
      <v-btn color="blue darken-2" depressed dark fab>
        <v-icon v-if="fab"> mdi-close </v-icon>
        <v-icon v-else> mdi-dots-vertical </v-icon>
      </v-btn>
    </template>
    <v-btn color="accent" fab small depressed nuxt to="/admin">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn
      v-if="create"
      color="success"
      fab
      small
      depressed
      nuxt
      :to="createLink"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
      v-if="back"
      color="secondary"
      depressed
      small
      fab
      dark
      @click="$router.back()"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <slot></slot>
  </v-speed-dial>
</template>

<script>
export default {
  props: {
    create: {
      type: Boolean,
      default: false,
    },
    createLink: {
      type: String,
      default: '',
    },
    back: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      fab: false,
    }
  },
}
</script>

<style></style>
