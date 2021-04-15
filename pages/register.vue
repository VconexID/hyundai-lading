<template>
  <v-container fluid class="tw-bg-hyundai tw-bg-cover tw-min-h-screen tw-py-8">
    <loader-dialog></loader-dialog>
    <register-form :provinces="provinces.data"></register-form>
  </v-container>
</template>

<script>
export default {
  layout: 'register',
  async asyncData({ $config: { apiURL } }) {
    const provinces = await fetch(
      `${apiURL}/provinces/only-jabodetabek`
    ).then((res) => res.json())

    return { provinces }
  },
}
</script>

<style></style>
