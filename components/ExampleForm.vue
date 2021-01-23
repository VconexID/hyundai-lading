<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title class="text-capitalize">
          {{ form.id ? 'Edit' : 'Add' }} new data
          <v-spacer></v-spacer>
          <v-icon color="primary">mdi-book-plus</v-icon>
        </v-card-title>
        <v-divider class="mb-5"></v-divider>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="form.title"
              label="Title"
              :disabled="$store.state.loading"
              outlined
              dense
              :error-messages="$store.state.errors.title"
            ></v-text-field>
            <v-file-input
              v-model="form.image"
              prepend-icon=""
              label="Image"
              :disabled="$store.state.loading"
              outlined
              dense
              :error-messages="$store.state.errors.image"
            ></v-file-input>
            <v-alert v-if="$store.state.errors.description" type="error" dense>
              {{ $store.state.errors.description[0] }}
            </v-alert>
            <text-editor
              v-model="form.description"
              :error-messages="$store.state.errors.description"
            ></text-editor>
            <div class="text-right mt-3">
              <v-btn
                type="submit"
                color="primary"
                depressed
                :loading="$store.state.loading"
              >
                Save data
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import resetForm from '../mixins/resetForm'

export default {
  mixins: [resetForm],
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
      url: 'examples',
    }
  },
  computed: {
    example() {
      return this.$store.state.example.example
    },
  },
  created() {
    if (Object.keys(this.example).length > 0) {
      this.example.image = null
      this.form = Object.assign({}, this.example)
    } else {
      this.resetForm()
    }
  },
  destroyed() {
    this.$store.dispatch('remove', 'example/REMOVE_EXAMPLE')
  },
  methods: {
    async submit() {
      if (this.form.id) {
        // update data
        await this.$sendData(`${this.url}/` + this.form.id, this.form, true)
        this.$redirectPage('/admin/examples')
      } else {
        // store data
        // create form data
        const formData = new FormData()

        Object.keys(this.form).forEach((element) => {
          formData.append(element, this.form[element] || '')
        })
        // store data
        await this.$sendData(this.url, formData)

        this.$redirectPage('/admin/examples')
      }
    },
  },
}
</script>

<style></style>
