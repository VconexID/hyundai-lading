<template>
  <v-dialog v-model="show" max-width="500" @click:outside="toggle">
    <v-card>
      <v-card-title class="text-capitalize"> add new descendant </v-card-title>
      <v-card-text>
        <descendant-form @submitted="toggle"></descendant-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('click:outside', null)
    },
  },
}
</script>

<style></style>
