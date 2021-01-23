<template>
  <div>
    <!-- header -->
    <v-app-bar app class="tw-shadow-md" color="white">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-capitalize" v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn rounded depressed tile v-bind="attrs" v-on="on">
            <v-icon color="primary" class="mr-1">mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list dense outlined class="py-0 overline" max-width="150">
          <v-list-item
            v-for="(item, index) in dropdownMenu"
            :key="index"
            nuxt
            :to="item.link"
          >
            <v-list-item-title class="text-capitalize">
              <v-icon small :color="item.color" v-text="item.icon"></v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app color="rgb(29, 34, 40)" dark>
      <v-img
        src="https://ik.imagekit.io/vconexID/Logo_White.png"
        max-width="200"
        contain
        class="mx-auto py-10"
      ></v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <div v-for="(item, i) in items" :key="i" class="my-2">
          <!-- Non children menu -->
          <v-list-item
            v-if="!item.children"
            nuxt
            :to="item.link"
            color="primary"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="text-capitalize"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Menu + children -->
          <v-list-group v-else :prepend-icon="item.icon" color="">
            <template v-slot:activator>
              <v-list-item-title
                class="text-capitalize"
                v-text="item.text"
              ></v-list-item-title>
            </template>
            <v-list-item
              v-for="(itemChild, indexChild) in item.children"
              :key="indexChild"
              color="primary"
              exact
              nuxt
              :to="itemChild.link"
            >
              <v-list-item-icon>
                <v-icon v-text="itemChild.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="mt-1 text-capitalize"
                  v-text="itemChild.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {
          text: 'examples',
          icon: 'mdi-circle',
          link: '/admin/examples',
        },
        {
          text: 'item',
          icon: 'mdi-circle',
          children: [
            {
              icon: 'mdi-circle-outline',
              link: '/admin/dropzone',
              text: 'dropzone example',
            },
            {
              icon: 'mdi-circle-outline',
              link: '',
              text: 'sub-item',
            },
          ],
        },
      ],
      dropdownMenu: [
        {
          title: 'password',
          link: '/admin/change-password',
          color: 'primary',
          icon: 'mdi-key',
        },
        {
          title: 'logout',
          link: '/admin/logout',
          color: 'error',
          icon: 'mdi-power',
        },
      ],
    }
  },
  computed: {
    title() {
      const path = this.$route.path.split('/')
      const title = path[2]
      return title
    },
  },
}
</script>

<style></style>
