<template>
  <div>
    <v-data-table :headers="headers" :items="descendants" calculate-widths>
      <template v-slot:top>
        <v-btn color="primary" @click="show = !show">
          <v-icon class="mr-3">mdi-plus</v-icon>
          add
        </v-btn>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small color="error" @click="remove(item.id)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <descendant-dialog
      :show="show"
      @click:outside="show = !show"
    ></descendant-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Content', value: 'content', sortable: false },
        { text: 'Action', value: 'actions', sortable: false, align: 'center' },
      ],
      show: false,
      url: 'descendants',
    }
  },
  computed: {
    descendants() {
      return this.$store.state.descendant.descendants
    },
  },
  methods: {
    remove(id) {
      this.$store.dispatch('descendant/remove', id)
    },
  },
}
</script>

<style></style>
