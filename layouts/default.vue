<template>
  <v-app>
    <landing-navigation ref="landingNav"></landing-navigation>
    <v-main v-scroll="handleScroll" class="tw-bg-light-grey">
      <nuxt />
    </v-main>
    <footer-content></footer-content>
  </v-app>
</template>

<script>
export default {
  name: 'Default',
  methods: {
    handleScroll() {
      this.$vuetify.breakpoint.smAndDown
        ? this.doNothing()
        : this.processScroll()
    },
    processScroll() {
      // artikel
      if (window.scrollY > 500 && window.scrollY < 1100) {
        const check = this.$refs.landingNav.listNavigation === 'artikel'
        if (!check) {
          this.$refs.landingNav.onScroll('artikel')
        }
      }
      // kalender
      else if (window.scrollY > 1100 && window.scrollY < 1500) {
        const check = this.$refs.landingNav.listNavigation === 'kalender-event'
        if (!check) {
          this.$refs.landingNav.onScroll('kalender-event')
        }
      }
      // galeri
      else if (window.scrollY > 1500 && window.scrollY < 1800) {
        const check = this.$refs.landingNav.listNavigation === 'galeri'
        if (!check) {
          this.$refs.landingNav.onScroll('galeri')
        }
      }
      // tentang
      else if (window.scrollY > 1800) {
        const check = this.$refs.landingNav.listNavigation === 'tentang'
        if (!check) {
          this.$refs.landingNav.onScroll('tentang')
        }
      }
      // beranda
      else if (!this.changeStatusScroll) {
        const check = this.$refs.landingNav.listNavigation === 'beranda'
        if (!check) {
          this.$refs.landingNav.onScroll('beranda')
        }
      }
    },
    doNothing() {
      return true
    },
  },
}
</script>

<style scoped></style>
