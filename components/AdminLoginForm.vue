<template>
  <v-row align="center">
    <v-col cols="12" lg="7">
      <v-img
        src="https://ik.imagekit.io/vconexID/ap2li/undraw_unlock_24mb.svg"
      ></v-img>
    </v-col>
    <v-col cols="12" lg="5">
      <v-card flat class="tw-rounded-lg" :loading="$store.state.loading">
        <v-toolbar flat>
          <v-toolbar-title class="title"
            ><v-icon>mdi-cog-outline</v-icon> Please Login</v-toolbar-title
          >
        </v-toolbar>
        <v-card-text>
          <v-form @submit.prevent="$store.dispatch('auth/login', form)">
            <v-text-field
              v-model="form.email"
              :disabled="$store.state.loading"
              :error-messages="$store.state.errors.email"
              label="Email"
            ></v-text-field>
            <v-text-field
              v-model="form.password"
              :disabled="$store.state.loading"
              label="Password"
              :type="type"
              :error-messages="$store.state.errors.password"
              append-outer-icon="mdi-eye"
              @click:append-outer="changeType"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                color="#cbd5e0"
                depressed
                :loading="$store.state.loading"
                >Login</v-btn
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
        email: '',
        password: '',
      },
      type: 'password',
    }
  },
  methods: {
    changeType() {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
  },
}
</script>

<style></style>
