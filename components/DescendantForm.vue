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
        {{ createPath ? 'Submit' : 'Add' }}
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
    descendant() {
      return this.$store.state.descendant.descendant
    },
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
    if (Object.keys(this.descendant).length > 0) {
      this.form = Object.assign({}, this.descendant)
    } else {
      this.resetForm()
    }
  },
  destroyed() {
    this.$store.dispatch('remove', 'descendant/REMOVE_DESCENDANT')
    this.$store.dispatch('toggleError')
  },
  methods: {
    async submit() {
      if (this.createPath) {
        if (!this.validateForm()) return false
        this.pushData()
        this.$emit('submitted', this.data)
      } else {
        this.form.ancestor = this.ancestor.id
        const { data } = await this.$sendData('descendants', this.form)
        this.$store.dispatch('descendant/store', data)
        this.resetForm()
        this.$emit('submitted', null)
      }
    },
    cancel() {
      this.$emit('cancelled', null)
    },
  },
}
</script>

<style></style>
