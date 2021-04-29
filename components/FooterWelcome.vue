<template>
  <v-footer
    :height="$vuetify.breakpoint.xsOnly ? 150 : 80"
    absolute
    color="#E3DAD1"
    app
  >
    <v-container>
      <div class="md:tw-flex tw-text-center tw-items-center md:tw-mx-40">
        <nuxt-link :to="{ name: 'home' }">
          <div
            class="tw-flex-grow tw-underline tw-cursor-pointer tw-font-hyundai-regular tw-font-bold tw-text-lg md:tw-text-base"
          >
            Klik disini untuk lanjutkan
          </div>
        </nuxt-link>
        <div
          class="tw-flex-grow-0 tw-font-hyundai-text tw-text-lg md:tw-text-sm tw-my-2 md:tw-my-0"
        >
          Atau
        </div>
        <div class="tw-flex-grow">
          <v-btn
            :to="{ name: 'register' }"
            tile
            dark
            depressed
            :block="$vuetify.breakpoint.xsOnly ? true : false"
            color="#00185a"
            class="tw-tracking-wide tw-text-white tw-capitalize tw-font-hyundai-regular tw-font-bold tw-text-lg md:tw-text-sm"
            >bergabung dengan kami</v-btn
          >
        </div>
      </div>
    </v-container>

    <v-snackbar v-model="snackbar" dark :timeout="1000" top right>
      You clicked

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
    }
  },
}
</script>

<style></style>
