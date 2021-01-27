<template>
  <v-row>
    <v-col>
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1">
            Ancestor
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 2" step="2">
            Descendant
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <ancestor-form @submitted="storeAncestor"></ancestor-form>
          </v-stepper-content>

          <v-stepper-content step="2">
            <descendant-form
              @submitted="submit"
              @cancelled="step--"
            ></descendant-form>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      step: 1,
      ancestor: {},
      descendant: [],
    }
  },
  methods: {
    storeAncestor(value) {
      this.ancestor = value
      this.step++
    },
    storeDescendant(value) {
      this.descendant = value
    },
    async submit(value) {
      this.storeDescendant(value)
      const { data } = await this.$sendData('ancestors', this.ancestor)
      this.descendant.forEach(async (element) => {
        element.ancestor = data.id
        await this.$sendData('descendants', element)
      })

      this.$redirectPage('/admin/ancestors')
    },
  },
}
</script>

<style></style>
