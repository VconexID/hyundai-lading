<template>
  <div>
    <v-app-bar
      app
      color="secondary"
      elevate-on-scroll
      elevation="5"
      dark
      class="wrapper-navigation"
      :extension-height="$vuetify.breakpoint.smAndDown ? 'auto' : 0"
    >
      <v-row dense justify="center" align="center">
        <v-col cols="12" md="10">
          <div class="tw-flex tw-items-center">
            <div>
              <v-img
                :class="$vuetify.breakpoint.mdAndUp ? 'tw-w-32' : 'tw-w-20'"
                contain
                height="auto"
                src="https://ik.imagekit.io/vconexID/Hyundai-RSVP/logo-hyundai.png"
              ></v-img>
            </div>

            <v-spacer />

            <div>
              <v-img
                :class="$vuetify.breakpoint.mdAndUp ? 'tw-w-32' : 'tw-w-20'"
                contain
                height="auto"
                src="https://ik.imagekit.io/vconexID/Hyundai-RSVP/hyundai-ev-3.png"
              ></v-img>
            </div>

            <v-spacer v-show="$vuetify.breakpoint.smAndDown" />
            <v-btn
              v-show="$vuetify.breakpoint.smAndDown"
              icon
              @click="drawerMobile = !drawerMobile"
            >
              <v-icon color="#00185a">mdi-menu</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <template v-slot:extension>
        <div
          v-show="$vuetify.breakpoint.mdAndUp"
          class="tw-w-full tw-bg-white tw-text-center"
        >
          <v-btn-toggle v-model="listNavigation" mandatory group>
            <v-btn
              v-for="(item, i) in listNavigations"
              :key="i"
              :ref="item.value"
              :value="item.value"
              rounded
              class="tw-text-black tw-tracking-normal tw-capitalize button-link"
              active-class="tw-text-primary"
              @click="handleGoTo(item.text)"
            >
              <div>
                {{ item.text }}
              </div>

              <div
                v-if="item.value === listNavigation"
                class="tw-w-8 border-bottom"
              ></div>
            </v-btn>
          </v-btn-toggle>
        </div>
        <v-expand-transition>
          <div
            v-show="$vuetify.breakpoint.smAndDown && drawerMobile"
            class="tw-w-full tw-text-center"
          >
            <v-divider class="tw-border-red-400"></v-divider>

            <v-list color="#E3DAD1">
              <v-list-item-group v-model="listNavigation">
                <v-list-item
                  v-for="(item, i) in listNavigations"
                  :ref="item.value"
                  :key="i"
                  :value="item.value"
                  color="primary"
                  active-class="tw-text-primary"
                  @click="handleGoTo(item.text), (drawerMobile = !drawerMobile)"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="tw-text-primary"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-expand-transition>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listNavigation: 'beranda',
      listNavigations: [
        {
          text: 'Beranda',
          value: 'beranda',
          id: 'beranda-id',
        },
        {
          text: 'Artikel',
          value: 'artikel',
          id: 'artikel-id',
        },
        {
          text: 'Kalender Event',
          value: 'kalender-event',
          id: 'kalender-event-id',
        },
        {
          text: 'Galeri',
          value: 'galeri',
          id: 'galeri-id',
        },
        {
          text: 'Tentang',
          value: 'tentang',
          id: 'tentang-id',
        },
      ],

      drawerMobile: false,
    }
  },
  methods: {
    handleGoTo(params) {
      const check = params.split(/\W+/).length
      let scrollId = ''

      if (check === 1) {
        const word = params.toLowerCase()
        scrollId = '#' + word + '-id'
      } else {
        const word = params.split(' ').join('-').toLowerCase()
        scrollId = '#' + word + '-id'
      }

      this.$vuetify.goTo(scrollId, {
        duration: 500,
        offset: 0,
      })
    },
    onScroll(params) {
      this.listNavigation = params
    },
  },
}
</script>

<style scoped>
::v-deep .v-toolbar__extension {
  padding: 0;
  height: auto !important;
}

::v-deep .v-btn:before {
  background-color: transparent;
}

::v-deep .v-btn-toggle--group > .v-btn.v-btn {
  margin: 4px 24px;
}

.border-bottom {
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 24, 90, 0.9);
  border-bottom-width: 0.1em;
  margin-top: 2px;
}

::v-deep .v-btn__content {
  display: block;
}
</style>
