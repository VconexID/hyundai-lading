<template>
  <v-row
    id="kalender-event-id"
    dense
    justify="center"
    class="tw-px-4 md:tw-px-0"
  >
    <!-- kalender -->
    <v-col cols="12" md="10">
      <div class="tw-grid tw-grid-cols-12 tw-gap-4 tw-mb-6">
        <div class="tw-col-span-12">
          <span class="tw-font-hyundai-text tw-text-2xl tw-text-primary"
            >Kalender</span
          >
        </div>
        <div class="tw-col-span-12 lg:tw-col-span-4">
          <!-- on click open another page -->
          <span
            class="tw-font-hyundai-text tw-text-base tw-text-black tw-cursor-pointer"
            @click="snackbar = !snackbar"
            >Telusuri semua &rsaquo;
          </span>
          <div class="tw-flex tw-gap-x-2 tw-mt-2">
            <v-img
              class="tw-w-1/2"
              min-height="230"
              src="https://ik.imagekit.io/vconexID/Hyundai-RSVP/hyundai-kona.jpg"
            ></v-img>
          </div>
        </div>
        <div class="tw-col-span-12 lg:tw-col-span-4">
          <v-list
            v-for="(items, i) in 3"
            :key="i"
            color="transparent"
            class="tw-px-0 lg:tw-px-4"
          >
            <v-list-item class="divide-bottom-calendar tw-px-0">
              <v-list-item-content>
                <v-list-item-title
                  v-for="(item, b) in 1"
                  :key="b"
                  :class="b > 0 ? 'tw-block tw-mt-4' : 'tw-block'"
                >
                  <div class="tw-flex">
                    <span class="tw-font-hyundai-medium">
                      April/{{ 20 + b }}
                    </span>
                    <v-spacer></v-spacer>
                    <span class="tw-font-hyundai-text">Vision of tomorrow</span>
                  </div>
                </v-list-item-title>
                <v-list-item-title class="tw-mt-4 tw-text-right">
                  <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        small
                        icon
                        color="primary"
                        class="tw-capitalize tw-tracking-normal"
                        v-on="on"
                        @click="handleDetailKalender"
                      >
                        <v-icon color="primary" small>mdi-chevron-right</v-icon>
                      </v-btn>
                    </template>
                    <span>Lihat detail</span>
                  </v-tooltip>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
        <div class="tw-col-span-12 lg:tw-col-span-4">
          <v-list
            v-for="(items, i) in 3"
            :key="i"
            color="transparent"
            class="tw-px-0 lg:tw-px-4"
          >
            <v-list-item class="divide-bottom-calendar tw-px-0">
              <v-list-item-content>
                <v-list-item-title
                  v-for="(item, a) in 1"
                  :key="a"
                  :class="a > 0 ? 'tw-block tw-mt-4' : 'tw-block'"
                >
                  <div class="tw-flex">
                    <span class="tw-font-hyundai-medium">
                      April/{{ 20 + a }}
                    </span>
                    <v-spacer></v-spacer>
                    <span class="tw-font-hyundai-text">Vision of tomorrow</span>
                  </div>
                </v-list-item-title>
                <v-list-item-title class="tw-mt-4 tw-text-right">
                  <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        small
                        icon
                        color="primary"
                        class="tw-capitalize tw-tracking-normal"
                        v-on="on"
                        @click="handleDetailKalender"
                      >
                        <v-icon color="primary" small>mdi-chevron-right</v-icon>
                      </v-btn>
                    </template>
                    <span>Lihat detail</span>
                  </v-tooltip>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </v-col>
    <!-- end -->
    <v-dialog v-model="dialogDetailKalender" max-width="500">
      <v-card tile class="tw-border-none">
        <v-img
          height="250"
          src="https://ik.imagekit.io/vconexID/Hyundai-RSVP/background.png"
        ></v-img>
        <v-card-title class="tw-block">
          <div class="tw-flex tw-items-center tw-mb-2">
            <div class="tw-font-hyundai-medium">Vision of tomorrow</div>
            <v-spacer></v-spacer>
            <div class="tw-font-hyundai-text tw-text-sm">
              <v-icon>mdi-calendar-month</v-icon>
              April/20
            </div>
          </div>
          <p class="tw-font-hyundai-text tw-text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </v-card-title>
      </v-card>
    </v-dialog>

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
      dialogDetailKalender: false,
      snackbar: false,
    }
  },
  methods: {
    handleDetailKalender() {
      this.dialogDetailKalender = !this.dialogDetailKalender
    },
  },
}
</script>

<style scoped>
.divide-bottom-calendar {
  border-bottom: 2px solid rgb(0, 0, 0, 0.4);
}

::v-deep .v-dialog:not(.v-dialog--fullscreen) {
  border-radius: 0;
}
</style>
