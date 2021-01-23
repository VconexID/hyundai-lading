<template>
  <v-container class="fill-height">
    <dashboard-card></dashboard-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Dashboard',
      description: 'Admin Dashboard',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
}
</script>

<style></style>
