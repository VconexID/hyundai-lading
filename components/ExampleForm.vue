<template>
  <v-dialog v-model="show" persistent no-click-animation max-width="900">
    <v-card class="tw-border-none">
      <v-toolbar dark color="primary" flat>
        <v-toolbar-title>Vehicle Variant</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon depressed dark @click="toggleDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider class="mb-5"></v-divider>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-container fluid class="pa-0">
            <!-- First Line -->
            <v-row>
              <v-col lg="6" cols="12">
                <v-text-field
                  v-model="form.title"
                  label="Name"
                  outlined
                  dense
                  :error-messages="$store.state.errors.title"
                ></v-text-field>
              </v-col>
              <v-col lg="6" cols="12">
                <v-file-input
                  v-model="form.image"
                  outlined
                  dense
                  prepend-icon=""
                  label="image"
                  :error-messages="$store.state.errors.image"
                ></v-file-input>
              </v-col>
            </v-row>
            <!-- Second Line -->
            <v-row>
              <v-col>
                <v-alert
                  v-if="$store.state.errors.description"
                  type="error"
                  dense
                >
                  {{ $store.state.errors.description[0] }}
                </v-alert>
                <text-editor
                  v-model="form.description"
                  class="tw-border tw-border-gray-500 tw-rounded"
                  :error-messages="$store.state.errors.description"
                ></text-editor>
              </v-col>
            </v-row>
            <!-- Third Line -->
            <v-row>
              <v-col>
                <div class="text-right mt-3">
                  <v-btn
                    type="submit"
                    color="primary"
                    depressed
                    :loading="$store.state.loading"
                    >Submit</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
        image: null,
      },
      initialForm: {
        title: '',
        description: '',
        image: null,
      },
    }
  },
  computed: {
    example() {
      return this.$store.state.example.example
    },
  },
  watch: {
    example(value) {
      value.image = null
      this.form = Object.assign({}, value)
    },
  },
  methods: {
    toggleDialog() {
      this.$store.dispatch('toggleError')
      this.form = Object.assign({}, this.initialForm)
      this.$emit('close', null)
    },
    actionCompleted() {
      if (Object.keys(this.$store.state.errors).length === 0) {
        this.$emit('update', null)
        this.toggleDialog()
      }
    },
    async submit() {
      if (this.form.id) {
        await this.$store.dispatch('example/updateExample', this.form)
        this.actionCompleted()
      } else {
        await this.$store.dispatch('example/storeExample', this.form)
        this.actionCompleted()
      }
    },
  },
}
</script>

<style></style>
