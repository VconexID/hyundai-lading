<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title class="justify-center text-capitalize">
          <v-icon>mdi-</v-icon>
          upload file
        </v-card-title>
        <v-card-text>
          <dropzone
            id="foo"
            ref="el"
            :options="options"
            :destroy-dropzone="true"
          ></dropzone>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  components: {
    Dropzone,
  },
  data() {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: 'http://127.0.0.1:8000/api/upload',
        headers: { Authorization: 'Bearer ' + this.$store.state.auth.token },
      },
    }
  },
}
</script>

<style></style>
