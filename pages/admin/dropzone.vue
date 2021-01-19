<template>
  <v-container>
    <upload-example></upload-example>
  </v-container>
</template>

<script>
export default {
  computed: {
    title() {
      const path = this.$route.path.split('/')
      const title = this.capitalize(path[2])
      return title
    },
  },
  methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
