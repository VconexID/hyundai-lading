<template>
  <v-row id="beranda-id" dense justify="center">
    <!-- beranda -->
    <v-col cols="12" md="10">
      <div class="tw-my-6">
        <v-carousel
          :height="$vuetify.breakpoint.smAndDown ? 300 : 450"
          cycle
          show-arrows-on-hover
          hide-delimiters
        >
          <v-carousel-item
            v-for="(item, i) in beranda"
            :key="i"
            :src="item.src"
          >
            <h3
              slot="default"
              class="tw-font-hyundai-medium tw-uppercase tw-text-2xl tw-mt-6 tw-ml-5"
            >
              {{ item.text }}
            </h3>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-col>
    <!-- end -->
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      beranda: [
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/hyundai-1.jpeg',
          text: 'Kalender kegiatan',
        },
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/hyundai-2.jpeg',
          text: 'Smart lifestyle',
        },
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/hyundai-3.jpeg',
          text: 'Tips Berkendara',
        },
        {
          src: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/hyundai-4.jpeg',
          text: 'Kabar terbaru',
        },
      ],
    }
  },
}
</script>

<style scoped>
.text-gradient {
  background: -webkit-linear-gradient(#0063b2ff, #9cc3d5ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
