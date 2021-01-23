<template>
  <v-row>
    <v-col>
      <v-breadcrumbs :items="items">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            :to="item.href"
            exact
            nuxt
            :disabled="item.disabled"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    items() {
      const items = []
      const path = this.$route.path.split('/')
      const pageName = path[path.length - 1]
      path.forEach((element, index) => {
        if (element !== '') {
          items.push({
            text: element,
            disabled: element === pageName || element === 'edit',
            href: element !== 'admin' ? '/admin/' + element : '/' + element,
          })
        }
      })
      return items
    },
  },
}
</script>

<style></style>
