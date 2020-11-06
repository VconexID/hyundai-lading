<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <h1 class="text-h5 text-center primary--text">Please Wait</h1>
        <lottie
          v-if="loading"
          :width="100"
          :height="100"
          :options="lottieOptions"
          @animCreated="handleAnimation"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/assets/8819-loading.json'

export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: null,
      lottieOptions: { animationData: animationData.default },
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('auth/logout')
    }, 3000)
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
  },
}
</script>

<style></style>
