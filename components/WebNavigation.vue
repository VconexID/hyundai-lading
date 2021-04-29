<template>
  <v-app-bar flat absolute app color="#E3DAD1" height="100">
    <v-toolbar-title
      class="tw-font-hyundai-medium tw-text-xl md:tw-text-2xl tw-leading-tight tw-text-center"
    >
      <span v-if="$vuetify.breakpoint.smAndUp">
        Selamat datang di situs
        <br />
        Hyundai EV Community
      </span>
      <span v-if="$vuetify.breakpoint.xsOnly">
        Selamat datang di situs Hyundai
        <br />
        EV Community
      </span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style scoped>
::v-deep .v-toolbar__content {
  justify-content: center !important;
}
</style>
