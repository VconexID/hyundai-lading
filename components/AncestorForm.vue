<template>
  <v-form class="py-5" @submit.prevent="submit">
    <v-text-field
      v-model="form.title"
      label="Title"
      :disabled="$store.state.loading"
      outlined
      dense
      :error-messages="$store.state.errors.title"
    ></v-text-field>
    <v-textarea
      v-model="form.description"
      label="Description"
      :disabled="$store.state.loading"
      outlined
      dense
      :error-messages="$store.state.errors.description"
    ></v-textarea>
    <div class="text-right mt-3">
      <v-btn
        type="submit"
        color="primary"
        depressed
        :loading="$store.state.loading"
      >
        {{ createPath ? 'Continue' : 'Update' }}
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import form from '../mixins/form'

export default {
  mixins: [form],
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
      },
      initialForm: {
        title: '',
        description: '',
      },
    }
  },
  computed: {
    ancestor() {
      return this.$store.state.ancestor.ancestor
    },
    createPath() {
      const path = this.$route.path.split('/')
      const createPath = path[path.length - 1]
      return createPath === 'create'
    },
  },
  created() {
    if (Object.keys(this.ancestor).length > 0) {
      this.form = Object.assign({}, this.ancestor)
    } else {
      this.resetForm()
    }
  },
  destroyed() {
    this.$store.dispatch('remove', 'ancestor/REMOVE_ANCESTOR')
    this.$store.dispatch('toggleError')
  },
  methods: {
    submit() {
      if (this.createPath) {
        if (!this.validateForm()) return false
        this.$emit('submitted', this.form)
      } else {
        this.$sendData('ancestors/' + this.form.id, this.form, true)
        this.$swal('Success', 'Action Completed', 'success')
      }
    },
  },
}
</script>

<style></style>
