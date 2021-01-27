<template>
  <v-form class="py-5" @submit.prevent="submit">
    <v-textarea
      v-model="form.content"
      label="Content"
      :disabled="$store.state.loading"
      outlined
      dense
      :error-messages="$store.state.errors.content"
    ></v-textarea>
    <div class="text-right mt-3">
      <v-btn
        type="submit"
        color="primary"
        depressed
        :loading="$store.state.loading"
      >
        {{ createPath ? 'Submit' : 'Update' }}
      </v-btn>
      <v-badge
        v-if="createPath"
        bordered
        color="success"
        overlap
        :content="data.length === 0 ? '0' : data.length"
      >
        <v-btn color="success" @click="pushData"> Add more data </v-btn>
      </v-badge>
      <v-btn v-if="createPath" text @click="cancel"> Cancel </v-btn>
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
        content: '',
      },
      initialForm: {
        content: '',
      },
      data: [],
    }
  },
  computed: {
    example() {
      return this.$store.state.example.example
    },
    createPath() {
      const path = this.$route.path.split('/')
      const createPath = path[path.length - 1]
      return createPath === 'create'
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
    this.$store.dispatch('remove', 'example/REMOVE_ANCESTOR')
    this.$store.dispatch('toggleError')
  },
  methods: {
    submit() {
      if (this.createPath) {
        this.$emit('submitted', this.data)
      } else {
      }
    },
    cancel() {
      this.$emit('cancelled', null)
    },
  },
}
</script>

<style></style>
