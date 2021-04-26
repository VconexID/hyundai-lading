<template>
  <div class="tw-justify-center tw-flex">
    <v-snackbar
      v-model="statusSubmit"
      :timeout="2000"
      app
      tile
      right
      top
      color="green accent-4"
      elevation="6"
    >
      <template v-slot:action="{ attrs }">
        <v-btn color="white" icon text v-bind="attrs">
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </template>
      <span class="tw-font-bold tw-font-hyundai-regular tw-text-base">
        Thank you for register!
      </span>
    </v-snackbar>
    <v-card
      tile
      color="white"
      elevation="0"
      class="tw-font-hyundai-regular tw-border-none"
      width="600"
      max-width="600"
    >
      <div class="tw-grid tw-grid-cols-2">
        <div>
          <v-img
            contain
            :height="$vuetify.breakpoint.smAndDown ? '70' : '50'"
            src="https://ik.imagekit.io/vconexID/Hyundai-RSVP/hyundai-ev-3.png"
          ></v-img>
        </div>
        <div
          class="tw-bg-primary tw-flex tw-justify-center tw-items-center tw-text-white tw-text-xl lg:tw-text-base"
        >
          <nuxt-link :to="{ name: 'welcome' }" class="tw-text-white">
            <v-icon color="white" class="tw-mr-2 tw-text-xl">
              mdi-arrow-left
            </v-icon>
            Back
          </nuxt-link>
        </div>
      </div>
      <v-card-text class="md:tw-px-24 tw-py-8">
        <!-- <p class="tw-text-black tw-text-base tw-font-normal">
          Thank you for your interest to take part in the 1st Hyundai EV
          Gathering 2021.
        </p>
        <p class="tw-text-black tw-text-base tw-font-normal">
          Please kindly fill in the form below for your RSVP.
        </p> -->
        <div class="tw-flex tw-justify-center tw-mb-4">
          <p
            class="tw-flex tw-text-base tw-justify-center tw-w-56 tw-text-black tw-uppercase tw-text-center tw-font-bold tw-tracking-wider"
            style="
              border-bottom: solid;
              border-bottom-width: thin;
              border-color: black;
            "
          >
            Join with community
          </p>
        </div>
        <v-form @submit.prevent="submit">
          <v-row>
            <v-col cols="12">
              <div class="group">
                <label class="tw-text-sm tw-text-black">Full name</label>
                <v-text-field
                  v-model="form.full_name"
                  solo
                  dense
                  autofocus
                  placeholder="Your name"
                  class="tw-mt-1"
                  :error-messages="errors.full_name"
                ></v-text-field>
              </div>
              <div class="group">
                <label class="tw-text-sm tw-text-black">Phone number</label>
                <v-text-field
                  v-model="form.phone_number"
                  solo
                  dense
                  placeholder="Your number"
                  class="tw-mt-1"
                  :error-messages="errors.phone_number"
                ></v-text-field>
              </div>
              <div class="group">
                <label class="tw-text-sm tw-text-black">Email</label>
                <v-text-field
                  v-model="form.email"
                  solo
                  dense
                  placeholder="Your email"
                  class="tw-mt-1"
                  :error-messages="errors.email"
                ></v-text-field>
              </div>
              <div class="group">
                <label class="tw-text-sm tw-text-black">Provinsi</label>
                <v-select
                  v-model="form.province"
                  solo
                  dense
                  :items="provinces"
                  item-text="name"
                  item-value="id"
                  placeholder="Choose here"
                  class="tw-mt-1"
                  :error-messages="errors.province"
                  @change="getDistrict(form.province)"
                >
                </v-select>
              </div>
              <div class="group">
                <label class="tw-text-sm tw-text-black">City</label>
                <v-select
                  v-model="form.district"
                  solo
                  dense
                  :items="listDistrict"
                  placeholder="Choose here"
                  item-text="name"
                  item-value="id"
                  class="tw-mt-1"
                  :error-messages="errors.district"
                >
                </v-select>
              </div>
              <div class="group">
                <label class="tw-text-sm tw-text-black">Type Car</label>
                <v-radio-group
                  v-model="form.car_type"
                  row
                  :error-messages="errors.car_type"
                >
                  <v-radio
                    v-for="(type, i) in type_car"
                    :key="i"
                    :label="type.text"
                    :value="type.text"
                    class="tw-mb-3"
                    @change="setColor(type.color)"
                  >
                    <!-- <template v-slot:label>
                      <h3 class="tw-text-black tw-mb-1">{{ type.text }}</h3>
                      <v-img
                        width="130"
                        height="130"
                        src="https://ik.imagekit.io/vconexID/gengar_1.png"
                      ></v-img>
                    </template> -->
                  </v-radio>
                </v-radio-group>
              </div>
              <div class="group">
                <label class="tw-text-sm tw-text-black">Color</label>
                <v-select
                  v-model="form.car_color"
                  solo
                  dense
                  :items="colors"
                  placeholder="Choose here"
                  item-text="text"
                  item-value="text"
                  class="tw-mt-1"
                  :error-messages="errors.car_color"
                  @change="setImage(form.car_color)"
                >
                </v-select>
              </div>
              <div v-if="imageSelected" class="group">
                <v-img
                  contain
                  height="200"
                  lazy-src="https://ik.imagekit.io/vconexID/Hyundai-RSVP/default-cars.jpeg"
                  :src="imageSelected"
                ></v-img>
              </div>
              <div class="group">
                <label class="tw-text-sm tw-text-black">No. Polisi</label>
                <v-text-field
                  v-model="form.no_polisi"
                  solo
                  dense
                  placeholder="Your no polisi"
                  class="tw-mt-1"
                  :error-messages="errors.no_polisi"
                ></v-text-field>
              </div>
              <div class="tw-text-center tw-mt-4">
                <v-btn
                  type="submit"
                  :block="$vuetify.breakpoint.smAndDown ? true : false"
                  :width="$vuetify.breakpoint.smAndDown ? 'auto' : '150'"
                  dark
                  depressed
                  color="#00185a"
                  class="tw-tracking-wide tw-capitalize tw-text-base lg:tw-text-sm"
                  >Send</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <!-- <div class="tw-py-4 tw-text-center tw-bg-secondary">
        <h2
          class="tw-text-base lg:tw-text-lg tw-font-normal tw-text-primary tw-tracking-normal tw-cursor-pointer"
        >
          Click here to download event details.
        </h2>
      </div> -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    provinces: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      form: {
        full_name: '',
        phone_number: '',
        email: '',
        province: '',
        district: '',
        car_type: '',
        car_color: '',
        no_polisi: '',
      },
      imageSelected: null,
      colors: [],
      listDistrict: [],
      type_car: [
        {
          text: 'Kona Electric',
          color: [
            {
              text: 'Chalk White',
              img:
                'https://ik.imagekit.io/vconexID/Hyundai-RSVP/chalk-white.png',
            },
            {
              text: 'Dark Knight',
              img:
                'https://ik.imagekit.io/vconexID/Hyundai-RSVP/dark-knight.png',
            },
            {
              text: 'Galactic Grey',
              img:
                'https://ik.imagekit.io/vconexID/Hyundai-RSVP/galatic-gray.png',
            },
            {
              text: 'Pulse Red',
              img: 'https://ik.imagekit.io/vconexID/Hyundai-RSVP/pulse-red.png',
            },
          ],
        },
        {
          text: 'Ioniq Electric',
          color: [
            {
              text: 'Polar White',
              img:
                'https://ik.imagekit.io/vconexID/Hyundai-RSVP/polar-white.png',
            },
            {
              text: 'Fluidic Metal',
              img:
                'https://ik.imagekit.io/vconexID/Hyundai-RSVP/fluidic-metal.png',
            },
            {
              text: 'Phantom Black',
              img:
                'https://ik.imagekit.io/vconexID/Hyundai-RSVP/phantom-black.png',
            },
            {
              text: 'Flery Red',
              img:
                'https://ik.imagekit.io/vconexID/Hyundai-RSVP/firely-red.png',
            },
          ],
        },
      ],
      statusSubmit: false,
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    errors() {
      return this.$store.state.errors
    },
    baseUrl() {
      return process.env.apiURL
    },
  },
  methods: {
    async getDistrict(provinceId) {
      const {
        data: { data },
      } = await this.$axios.get(
        `${process.env.BASE_URL}/districts/by-province/${provinceId}`
      )
      this.listDistrict = data
    },
    setImage(colorName) {
      const image = this.colors.filter(function (item) {
        return item.text === colorName
      })
      this.imageSelected = image[image.lastIndex].img
    },
    setColor(colors) {
      this.imageSelected = null
      this.colors = colors
    },
    async submit() {
      try {
        this.$store.dispatch('toggleLoading', { root: true })
        this.$store.dispatch('toggleError', [], {
          root: true,
        })
        await this.$axios.post(`${process.env.BASE_URL}/visitors`, this.form)
        await this.$store.dispatch('toggleLoading', { root: true })
        this.statusSubmit = true
        // reset form to initial value
        this.form.full_name = ''
        this.form.phone_number = ''
        this.form.email = ''
        this.form.province = ''
        this.form.district = ''
        this.form.car_type = ''
        this.form.car_color = ''
        this.form.no_polisi = ''
        // end
      } catch (error) {
        this.$store.dispatch('toggleLoading', { root: true })
        if (error.response) {
          this.$store.dispatch('toggleError', error.response.data.errors, {
            root: true,
          })
        } else {
        }
      }
    },
  },
}
</script>

<style lang="css" scoped>
::v-deep .v-input__slot {
  box-shadow: none !important;
}

::v-deep .v-input--dense > .v-input__control > .v-input__slot {
  background: #ebebeb !important;
}

::v-deep .v-select > .v-input__control > .v-input__slot {
  background: #ebebeb !important;
}

::v-deep .v-list-item__title {
  text-transform: capitalize !important;
}

::v-deep .v-input--selection-controls .v-radio > .v-label {
  display: block !important;
}
</style>
