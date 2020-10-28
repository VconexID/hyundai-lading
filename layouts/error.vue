<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" lg="5">
        <v-card flat>
          <v-card-title class="justify-center tw-text-red-500 tw-text-4xl"
            >Error</v-card-title
          >
          <v-card-text>
            <h1
              v-if="error.statusCode === 404"
              class="text-center text-h6 error--text"
            >
              {{ pageNotFound }}
            </h1>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              depressed
              class="text-capitalize"
              width="100%"
              to="/"
              nuxt
              color="primary"
              >back to home</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: '404',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
