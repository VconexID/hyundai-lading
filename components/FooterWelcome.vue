<template>
  <v-footer height="80" absolute color="#E3DAD1" app>
    <v-container>
      <div class="tw-flex tw-text-center tw-items-center tw-mx-40">
        <div
          class="tw-flex-grow tw-underline tw-cursor-pointer tw-font-hyundai-regular tw-font-bold"
          @click.prevent="snackbar = true"
        >
          Klik disini untuk lanjutkan
        </div>
        <div class="tw-flex-grow-0 tw-font-hyundai-text">Atau</div>
        <div class="tw-flex-grow">
          <v-btn
            :to="{ name: 'register' }"
            tile
            dark
            depressed
            color="#00185a"
            class="tw-tracking-wide tw-text-white tw-capitalize tw-font-hyundai-regular tw-font-bold"
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
