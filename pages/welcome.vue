<template>
  <v-container>
    <h5
      class="tw-font-hyundai-text tw-font-medium tw-text-center tw-text-black"
    >
      Temukan di sini
    </h5>
    <div class="tw-flex tw-justify-center tw-my-4">
      <v-card tile elevation="0" width="750">
        <v-carousel height="380" cycle hide-delimiters show-arrows-on-hover>
          <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
            <h3
              slot="default"
              class="tw-font-hyundai-medium tw-uppercase tw-text-3xl tw-mt-6 tw-ml-5"
            >
              {{ item.text }}
            </h3>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
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

<style></style>
