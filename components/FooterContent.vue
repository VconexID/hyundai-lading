<template>
  <v-bottom-navigation active-class="tw-text-blue-300" dark color="#212121">
    <div class="tw-flex tw-items-center">
      <div v-for="(item, i) in icon" :key="i" class="tw-mx-4 md:tw-mx-8">
        <v-img
          aspect-ratio="1"
          :width="$vuetify.breakpoint.mdAndUp ? '30' : '20'"
          :src="item.src"
        ></v-img>
      </div>
    </div>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    icon: [
      {
        src:
          'https://ik.imagekit.io/vconexID/Hyundai-RSVP/icons8-facebook-50.png',
      },
      {
        src:
          'https://ik.imagekit.io/vconexID/Hyundai-RSVP/icons8-instagram-50.png',
      },
      {
        src:
          'https://ik.imagekit.io/vconexID/Hyundai-RSVP/icons8-twitter-50.png',
      },
      {
        src:
          'https://ik.imagekit.io/vconexID/Hyundai-RSVP/icons8-play-button-50.png',
      },
      {
        src:
          'https://ik.imagekit.io/vconexID/Hyundai-RSVP/icons8-tiktok-50.png',
      },
    ],
  }),
}
</script>

<style></style>
