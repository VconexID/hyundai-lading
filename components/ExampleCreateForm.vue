<template>
  <v-row>
    <v-col>
      <v-card flat>
        <v-card-title
          class="text-capitalize tw-border-b tw-border-gray-400 mb-5"
          >create new page <v-spacer></v-spacer>
          <v-btn color="primary" small fab depressed nuxt to="/admin/pages"
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          ></v-card-title
        >
        <v-card-text>
          <v-form @submit.prevent="">
            <v-text-field
              v-model="form.title"
              label="Name"
              outlined
              dense
              :error-messages="$store.state.errors.title"
            ></v-text-field>
            <text-editor
              v-model="form.description"
              :error-messages="$store.state.errors.description"
            ></text-editor>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" depressed>Submit</v-btn>
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
      },
    }
  },
}
</script>

<style></style>
