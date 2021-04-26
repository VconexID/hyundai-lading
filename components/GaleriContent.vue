<template>
  <v-row
    id="galeri-id"
    dense
    justify="center"
    class="tw-bg-primary tw-px-4 md:tw-px-0"
  >
    <v-col cols="12" md="10">
      <div class="tw-grid tw-grid-cols-12 tw-gap-4 tw-my-6">
        <div class="tw-col-span-12">
          <span class="tw-font-hyundai-text tw-text-2xl tw-text-white"
            >Galeri</span
          >
        </div>
        <div
          v-for="(item, i) in galeri"
          :key="i"
          class="tw-col-span-12 md:tw-col-span-4"
        >
          <v-hover v-slot="{ hover }">
            <v-img
              height="250"
              :src="item.src"
              :gradient="
                hover
                  ? 'to top right, rgba(0,0,0,.33), rgba(25,32,72,.5)'
                  : null
              "
            >
              <template v-slot:default>
                <v-scroll-x-transition>
                  <h3
                    v-if="hover"
                    class="tw-font-hyundai-medium tw-text-white tw-uppercase tw-text-2xl tw-mt-6 tw-ml-5"
                  >
                    {{ item.title }}
                  </h3>
                </v-scroll-x-transition>
              </template>
            </v-img>
          </v-hover>
        </div>
        <div class="tw-col-span-12 tw-text-center">
          <v-btn
            depressed
            color="white"
            class="tw-tracking-normal tw-capitalize tw-font-hyundai-bold"
            @click="snackbar = !snackbar"
            >Lihat lebih</v-btn
          >
        </div>
      </div>
    </v-col>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="#00185a"
      right
      top
      class="tw-flex"
    >
      <span class="tw-capitalize tw-font-hyundai-text tw-font-bold"
        >Fitur ini masih tahap developer</span
      >
      <template v-slot:action="{ attrs }">
        <v-btn icon color="white" v-bind="attrs" @click="snackbar = !snackbar">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      galeri: [
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/galeri-1.jpg',
          title: 'Galeri one',
        },
        {
          src:
            'https://ik.imagekit.io/vconexID/Hyundai-RSVP/Hyundai-Kona-Electric-Gallery-1.jpg',
          title: 'Galeri two',
        },
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/galeri-2.png',
          title: 'Galeri three',
        },
      ],
    }
  },
}
</script>

<style></style>
