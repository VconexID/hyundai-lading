<template>
  <v-row>
    <v-col>
      <v-card flat>
        <v-card-title
          class="text-capitalize tw-border-b tw-border-gray-400 mb-5"
          >create new example <v-spacer></v-spacer>
          <v-btn color="primary" small fab depressed @click="$router.back()"
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          ></v-card-title
        >
        <v-card-text>
          <v-form
            @submit.prevent="$store.dispatch('example/storeExample', form)"
          >
            <v-text-field
              v-model="form.title"
              label="Name"
              outlined
              dense
              :error-messages="$store.state.errors.title"
            ></v-text-field>
            <v-file-input
              v-model="form.image"
              outlined
              dense
              prepend-icon=""
              label="image"
              :error-messages="$store.state.errors.image"
            ></v-file-input>
            <v-alert v-if="$store.state.errors.description" type="error" dense>
              {{ $store.state.errors.description[0] }}
            </v-alert>
            <text-editor
              v-model="form.description"
              :error-messages="$store.state.errors.description"
            ></text-editor>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                color="primary"
                depressed
                :loading="$store.state.loading"
                >Submit</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        image: [],
      },
    }
  },
}
</script>

<style></style>
