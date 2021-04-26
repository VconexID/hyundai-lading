<template>
  <v-row id="artikel-id" dense justify="center" class="tw-px-4md:tw-px-0">
    <!-- artikel -->
    <v-col cols="12" md="10">
      <div class="tw-grid tw-grid-cols-12 tw-gap-4 tw-mb-6">
        <div class="tw-col-span-12">
          <span class="tw-font-hyundai-text tw-text-2xl tw-text-primary"
            >Artikel</span
          >
        </div>
        <template v-for="(item, i) in artikel">
          <v-card
            v-if="item.stretch"
            :key="i"
            flat
            tile
            dark
            class="tw-col-span-12 lg:tw-col-span-8 tw-border-none"
            color="primary"
          >
            <v-img height="200" :src="item.src"></v-img>
            <v-card-text>
              <div
                class="tw-font-hyundai-medium tw-font-medium tw-tracking-wide tw-text-xl tw-text-white tw-truncate"
              >
                {{ item.title }}
              </div>
              <span
                class="tw-font-hyundai-text tw-font-medium tw-text-white tw-opacity-80"
              >
                {{ item.text }}</span
              >
            </v-card-text>
          </v-card>
          <v-card
            v-else
            :key="i"
            flat
            tile
            dark
            class="tw-col-span-12 lg:tw-col-span-4 tw-border-none"
            color="primary"
          >
            <v-img height="200" :src="item.src"></v-img>
            <v-card-text>
              <div
                class="tw-font-hyundai-medium tw-font-medium tw-tracking-wide tw-text-xl tw-text-white tw-truncate"
              >
                {{ item.title }}
              </div>
              <span
                class="tw-font-hyundai-text tw-font-medium tw-text-white tw-opacity-80"
              >
                {{ item.text }}</span
              >
            </v-card-text>
          </v-card>
        </template>
        <div class="tw-text-center tw-col-span-12">
          <v-btn
            tile
            dark
            depressed
            color="primary"
            class="tw-tracking-normal tw-capitalize tw-font-hyundai-medium"
            @click="snackbar = !snackbar"
            >lihat lebih</v-btn
          >
        </div>
      </div>
    </v-col>
    <!-- end -->
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
      artikel: [
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/beranda-1.jpg',
          title: 'Lorem ipsum dolor sir amet',
          text: 'Kamis, 18 Maret 2021',
          stretch: true,
        },
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/artikel-2.jpg',
          title: 'Lorem ipsum dolor sir amet ukao sozakei made',
          text: 'Jumat, 18 Maret 2021',
          stretch: false,
        },
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/artikel-3.jpg',
          title: 'Lorem ipsum dolor sir amet',
          text: 'Senin, 18 Maret 2021',
          stretch: false,
        },
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/artikel-4.jpg',
          title: 'Lorem ipsum dolor sir amet',
          text: 'Selasa, 18 Maret 2021',
          stretch: false,
        },
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/artikel-5.jpg',
          title: 'Lorem ipsum dolor sir amet',
          text: 'Minggu, 18 Maret 2021',
          stretch: false,
        },
      ],
    }
  },
}
</script>

<style></style>
