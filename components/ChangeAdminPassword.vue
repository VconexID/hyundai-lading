<template>
  <v-row>
    <v-col>
      <v-card flat>
        <v-card-title
          class="text-capitalize tw-border-b tw-border-gray-400 mb-5"
          >change password <v-spacer></v-spacer>
          <v-btn color="primary" small fab depressed @click="$router.back()"
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          ></v-card-title
        >
        <v-card-text>
          <v-form
            @submit.prevent="$store.dispatch('auth/changePassword', form)"
          >
            <v-text-field
              v-model="form.old_password"
              label="Old Password"
              outlined
              :type="type"
              dense
              append-outer-icon="mdi-eye"
              :error-messages="$store.state.errors.old_password"
              @click:append-outer="changeType"
            ></v-text-field>
            <v-text-field
              v-model="form.new_password"
              label="New Password"
              :type="type"
              outlined
              :error-messages="$store.state.errors.new_password"
              dense
              append-outer-icon="mdi-eye"
              @click:append-outer="changeType"
            ></v-text-field>
            <v-text-field
              v-model="form.confirm_password"
              :error-messages="$store.state.errors.confirm_password"
              label="Confirm Password"
              :type="type"
              outlined
              dense
              append-outer-icon="mdi-eye"
              @click:append-outer="changeType"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                color="primary"
                depressed
                class="text-capitalize"
                >Change Password</v-btn
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
        old_password: '',
        new_password: '',
        confirm_password: '',
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
